'use client';

import { useState, useEffect, useRef } from 'react';

export default function Page() {
  const [screen, setScreen] = useState('landing');
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [artifact, setArtifact] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const [firstMessageSent, setFirstMessageSent] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const [loadingStartTime, setLoadingStartTime] = useState(null);
  const [showLoadingMessage, setShowLoadingMessage] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Show loading message after 1 second delay
  useEffect(() => {
    let timer;
    if (isLoading) {
      setLoadingStartTime(Date.now());
      timer = setTimeout(() => setShowLoadingMessage(true), 1000);
    } else {
      setShowLoadingMessage(false);
      setLoadingStartTime(null);
    }
    return () => clearTimeout(timer);
  }, [isLoading]);

  const getLoadingEstimate = () => {
    if (messageCount <= 1) return 'Finding the best scales for you... usually ~10 seconds, but can take longer depending on your request';
    if (messageCount <= 3) return 'Noting your preferences... usually ~10 seconds, but can take longer depending on your request';
    return 'Building your custom assessment... this is the big one! Usually ~30\u201360 seconds, but can take longer depending on your style preferences';
  };

  const getStepLabel = () => {
    if (messageCount <= 1) return 'Step 1 of 3: Matching scales';
    if (messageCount <= 3) return 'Step 2 of 3: Gathering preferences';
    return 'Step 3 of 3: Building your assessment';
  };

  // Add initial assistant message when entering chat
  useEffect(() => {
    if (screen === 'chat' && !firstMessageSent) {
      const initialMessage = {
        role: 'assistant',
        content:
          "Hi! I\u2019m Scale Builder by Promptletariat.com \u2014 I help you discover validated psychology scales and turn them into beautiful, interactive assessment apps.\n\nThis takes between 30 seconds and 2 minutes. I\u2019ll ask you 4\u20135 quick questions about the topic you\u2019d like to assess, what you\u2019d like to name your app, and your visual style preferences. Then I\u2019ll build your custom assessment.\n\nWhat kind of assessment are you thinking about?",
      };
      setMessages([initialMessage]);
      setFirstMessageSent(true);
    }
  }, [screen, firstMessageSent]);

  // Focus input when chat screen loads
  useEffect(() => {
    if (screen === 'chat') {
      inputRef.current?.focus();
    }
  }, [screen]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);
    setMessageCount((prev) => prev + 1);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!res.ok) {
        // Non-streaming error responses come back as JSON
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || 'API response was not ok (status ' + res.status + ')');
      }

      // Read the streamed response
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let fullText = '';

      // Add a placeholder assistant message that we'll update as chunks arrive
      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);
      setIsLoading(false); // Hide loading dots since text is now streaming in

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        fullText += chunk;

        // Update the last message in-place with accumulated text (strip HTML for display)
        const displayText = fullText.replace(/```html\n[\s\S]*?```/g, '').trim();
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: 'assistant', content: displayText || 'Building...' };
          return updated;
        });
      }

      // Stream complete — check for HTML artifact in the full response
      const htmlMatch = fullText.match(/```html\n([\s\S]*?)```/);
      const cleanContent = fullText.replace(/```html\n[\s\S]*?```/g, '').trim();

      // Final update with clean content
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: 'assistant', content: cleanContent || 'Your assessment is ready! Try it out below.' };
        return updated;
      });

      if (htmlMatch) {
        setArtifact(htmlMatch[1]);
        setShowPreview(true);
      }

      return; // Skip the setIsLoading(false) at the bottom since we already did it
    } catch (error) {
      console.error('Error:', error);
      let errorMsg = 'Sorry, something went wrong. Please try again.';
      try {
        if (error.message && error.message !== 'API response was not ok') {
          errorMsg = 'Sorry, there was an issue: ' + error.message;
        }
      } catch (e) { /* use default */ }
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: errorMsg },
      ]);
    }

    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const downloadArtifact = () => {
    const blob = new Blob([artifact], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-assessment.html';
    a.click();
    URL.revokeObjectURL(url);
  };

  const startNewAssessment = () => {
    setMessages([
      {
        role: 'assistant',
        content:
          "Hi! I\u2019m Scale Builder by Promptletariat.com \u2014 I help you discover validated psychology scales and turn them into beautiful, interactive assessment apps.\n\nThis takes between 30 seconds and 2 minutes. I\u2019ll ask you 4\u20135 quick questions about the topic you\u2019d like to assess, what you\u2019d like to name your app, and your visual style preferences. Then I\u2019ll build your custom assessment.\n\nWhat kind of assessment are you thinking about?",
      },
    ]);
    setArtifact(null);
    setShowPreview(false);
    setInput('');
    setMessageCount(0);
  };

  const renderMessageContent = (content) => {
    const parts = content.split(/(\*\*[^*]+\*\*|\n\d+\.|#+\s)/);
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={idx} className="font-semibold">{part.slice(2, -2)}</strong>;
      }
      if (part.match(/^\n\d+\./)) return null;
      if (part.match(/^#+\s/)) return null;
      return <span key={idx}>{part}</span>;
    });
  };

  // =========================================
  // LANDING SCREEN
  // =========================================
  if (screen === 'landing') {
    return (
      <div className="min-h-screen relative flex flex-col">
        {/* Floating Orbs */}
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
        <div className="orb orb-5"></div>

        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center px-6 sm:px-12 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-syne text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-2 tracking-tight gradient-text">
              Scale Builder
            </h1>
            <p className="font-syne text-xl sm:text-2xl mb-8 font-medium gradient-text-subtle">
              by <a href="https://promptletariat.com" className="underline hover:opacity-80">Promptletariat.com</a>
            </p>

            {/* CTA Button */}
            <button
              onClick={() => setScreen('chat')}
              className="btn-primary text-xl sm:text-2xl px-12 py-5 shadow-lg hover:shadow-2xl font-syne tracking-tight mb-10"
            >
              Start Building →
            </button>

            <p className="font-space text-lg sm:text-xl mb-6 max-w-2xl mx-auto text-gray-400" style={{letterSpacing: '-0.3px'}}>
              Turn social science into personalized learning tools with AI
            </p>
            <p className="text-sm sm:text-base mb-4 max-w-2xl mx-auto leading-relaxed text-gray-500">
              This is for FUN and AI demonstration purposes only. Not at all serious. For medical or psychological advice, speak to your medical or psychological professionals. Scales are made available for personal and academic research, but may require licensing for commercial use.
            </p>
            <p className="text-sm sm:text-base mb-10 max-w-2xl mx-auto leading-relaxed text-gray-500">
              Created by <span className="text-white font-semibold">The Promptletariat, Mary Kate Stimmler</span>, for fun. To learn more about the evolution of this tool,{' '}
              <a href="https://www.linkedin.com/in/marykatestimmler/" target="_blank" rel="noopener noreferrer" className="text-cyan-accent hover:text-hot-pink underline font-semibold transition-colors">follow me on LinkedIn</a>
            </p>

            {/* Badge */}
            <div className="badge-pill mb-8">84 Validated Scales</div>
            <p className="text-sm text-gray-400 mt-2 mb-8 italic">Can&apos;t find your favorite scale? This site aims to use only open source (for noncommercial use) scales.</p>

            {/* How It Works */}
            <div className="glass-card p-8 max-w-2xl mx-auto mb-12">
              <p className="font-space text-lg font-semibold mb-3 text-white">This takes between 30 seconds and 2 minutes.</p>
              <p className="text-base text-gray-400 leading-relaxed">
                Scale Builder will ask you 4–5 quick questions about the topic you'd like to assess, what you want to name your app, and your visual style preferences. Then it builds your custom assessment app.
              </p>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 py-8 px-6 text-center" style={{borderTop: '1px solid rgba(255,255,255,0.08)'}}>
          <p className="font-space text-sm text-gray-500">
            Brought to you by{' '}
            <a href="https://promptletariat.com" className="text-hot-pink hover:text-cyan-accent font-semibold transition-colors">Promptletariat.com</a>
            {' '}| Created by <span className="font-semibold text-white">MK</span> |{' '}
            <span className="text-gray-600">Stanford Fellow in Organizational Behavior</span>
          </p>
          <p className="text-xs text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            Scale Builder by <a href="https://promptletariat.com" className="text-gray-500 hover:text-gray-400 underline">Promptletariat.com</a> is for fun and AI demonstration purposes only, not licensed for commercial use and not to be used for psychological evaluation. For medical or psychological advice, speak to your medical or psychological professionals. Scales are made available for personal and academic research, but may require licensing for commercial use.
          </p>
        </div>
      </div>
    );
  }

  // =========================================
  // CHAT SCREEN
  // =========================================
  return (
    <div className="flex h-screen relative">
      {/* Floating Orbs (behind chat) */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col relative z-10">
        {/* Header */}
        <div className="px-6 py-4" style={{borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(26,10,46,0.8)', backdropFilter: 'blur(12px)'}}>
          <div className="max-w-4xl mx-auto">
            <h1 className="font-syne text-2xl font-bold gradient-text">Scale Builder</h1>
            <p className="font-space text-sm text-gray-500 mt-1">
              by <a href="https://promptletariat.com" className="text-hot-pink hover:text-cyan-accent transition-colors">Promptletariat.com</a> — Turn social science into personalized learning tools with AI
            </p>
          </div>
        </div>

        {/* Messages Area */}
        <div className="chat-messages flex-1 px-6 py-8 overflow-y-auto max-w-4xl mx-auto w-full">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-6 flex message-enter ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={msg.role === 'user' ? 'user-message' : 'assistant-message'}>
                {msg.role === 'assistant' && (
                  <div className="text-xs font-semibold mb-2 uppercase tracking-wide" style={{color: '#08d9d6'}}>
                    Scale Builder
                  </div>
                )}
                <div className="message-content whitespace-pre-wrap">
                  {renderMessageContent(msg.content)}
                </div>
              </div>
            </div>
          ))}

          {showPreview && artifact && (
            <div className="mb-6 flex justify-start">
              <div className="rounded-2xl p-6 max-w-sm shadow-lg text-white" style={{background: 'linear-gradient(135deg, #ff2e63, #d4254f)'}}>
                <p className="font-space text-lg font-bold mb-1">Your assessment is ready!</p>
                <p className="text-sm opacity-90 mb-4">Try it out, then save it to share with others.</p>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => setFullScreen(true)}
                    className="w-full px-4 py-3 bg-white text-hot-pink rounded-lg font-semibold hover:bg-gray-100 transition-all font-space"
                  >
                    Try Your Assessment →
                  </button>
                  <button
                    onClick={startNewAssessment}
                    className="w-full px-4 py-2 text-sm text-pink-100 hover:text-white transition-all"
                  >
                    Build a different one
                  </button>
                </div>
              </div>
            </div>
          )}

          {isLoading && (
            <div className="mb-6 flex justify-start">
              <div className="assistant-message">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-1">
                    <span className="typing-indicator" style={{color: '#ff2e63'}}>{'\u25CF'}</span>
                    <span className="typing-indicator" style={{ animationDelay: '0.2s', color: '#08d9d6' }}>{'\u25CF'}</span>
                    <span className="typing-indicator" style={{ animationDelay: '0.4s', color: '#c8ff00' }}>{'\u25CF'}</span>
                  </div>
                  {showLoadingMessage && (
                    <span className="text-sm text-gray-400 ml-2">{getLoadingEstimate()}</span>
                  )}
                </div>
                {showLoadingMessage && (
                  <div className="mt-2 text-xs text-gray-500 font-medium font-space">{getStepLabel()}</div>
                )}
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="px-6 py-6" style={{borderTop: '1px solid rgba(255,255,255,0.08)', background: 'rgba(26,10,46,0.8)', backdropFilter: 'blur(12px)'}}>
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-3">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Describe the assessment you want to build..."
                disabled={isLoading}
                className="flex-1 px-5 py-3 rounded-lg text-white placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                style={{background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)'}}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="btn-primary px-6 py-3 disabled:opacity-30 disabled:cursor-not-allowed disabled:transform-none flex items-center gap-2"
              >
                <span>Send</span>
                <span>→</span>
              </button>
            </div>
            <p className="text-xs text-gray-600 mt-3 ml-1 font-space">
              Press Enter to send • Brought to you by <a href="https://promptletariat.com" className="text-hot-pink hover:text-cyan-accent underline transition-colors" target="_blank" rel="noopener noreferrer">Promptletariat.com</a>
            </p>
            <p className="text-xs text-gray-700 mt-2 ml-1 leading-relaxed">
              Scale Builder by <a href="https://promptletariat.com" className="underline hover:text-gray-500 transition-colors" target="_blank" rel="noopener noreferrer">Promptletariat.com</a> is for fun and AI demonstration purposes only, not licensed for commercial use and not to be used for psychological evaluation. For medical or psychological advice, speak to your medical or psychological professionals. Scales are made available for personal and academic research, but may require licensing for commercial use.
            </p>
          </div>
        </div>
      </div>

      {/* Full-Screen Assessment Overlay */}
      {fullScreen && artifact && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div className="px-6 py-4 flex items-center justify-between shadow-sm" style={{borderBottom: '1px solid #e5e7eb', background: 'linear-gradient(90deg, #fdf2f4, #fff)'}}>
            <h2 className="font-space text-lg font-bold text-gray-900">
              Your Assessment{' '}
              <span className="text-sm font-normal text-gray-500">
                • Brought to you by <a href="https://promptletariat.com" className="text-hot-pink hover:text-cyan-accent underline transition-colors" target="_blank" rel="noopener noreferrer">Promptletariat.com</a>
              </span>
            </h2>
            <div className="flex gap-3 items-center">
              <button
                onClick={downloadArtifact}
                className="font-space text-sm px-4 py-2 text-hot-pink border border-hot-pink rounded-lg hover:bg-pink-50 transition-all"
              >
                Save to Computer
              </button>
              <button
                onClick={() => setFullScreen(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
              >
                {'\u2715'}
              </button>
            </div>
          </div>
          <div className="flex-1">
            <iframe
              srcDoc={artifact}
              className="w-full h-full border-none"
              title="Your Assessment"
            />
          </div>
        </div>
      )}
    </div>
  );
}
