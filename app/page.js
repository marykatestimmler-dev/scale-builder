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

  // Estimate which step we're on and how long it takes
  const getLoadingEstimate = () => {
    if (messageCount <= 1) return 'Finding the best scales for you... usually ~10 seconds, but can take longer depending on your request';
    if (messageCount <= 3) return 'Noting your preferences... usually ~10 seconds, but can take longer depending on your request';
    return 'Building your custom assessment... this is the big one! Usually ~30–60 seconds, but can take longer depending on your style preferences';
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
          "Hi! I'm Scale Builder by Promptletariat — I help you discover validated psychology scales and turn them into beautiful, interactive assessment apps.\n\nThis takes about 5 minutes. I'll ask you 4–5 quick questions about the topic you'd like to assess, what you'd like to name your app, and your visual style preferences. Then I'll build your custom assessment.\n\nWhat kind of assessment are you thinking about?",
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
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || 'API response was not ok (status ' + res.status + ')');
      }

      const data = await res.json();

      if (data.content) {
        const assistantContent = data.content;

        // Check for HTML artifact and extract it
        const htmlMatch = assistantContent.match(/```html\n([\s\S]*?)```/);

        // Strip code blocks from the displayed message so users never see raw code
        const cleanContent = assistantContent.replace(/```html\n[\s\S]*?```/g, '').trim();

        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: cleanContent || 'Your assessment is ready! Try it out below.' },
        ]);

        if (htmlMatch) {
          setArtifact(htmlMatch[1]);
          setShowPreview(true);
        }
      }
    } catch (error) {
      console.error('Error:', error);
      // Try to get a useful error message from the API response
      let errorMsg = 'Sorry, something went wrong. Please try again.';
      try {
        if (error.message && error.message !== 'API response was not ok') {
          errorMsg = 'Sorry, there was an issue: ' + error.message;
        }
      } catch (e) { /* use default */ }
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: errorMsg,
        },
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
          "Hi! I'm Scale Builder by Promptletariat — I help you discover validated psychology scales and turn them into beautiful, interactive assessment apps.\n\nThis takes about 5 minutes. I'll ask you 4–5 quick questions about the topic you'd like to assess, what you'd like to name your app, and your visual style preferences. Then I'll build your custom assessment.\n\nWhat kind of assessment are you thinking about?",
      },
    ]);
    setArtifact(null);
    setShowPreview(false);
    setInput('');
    setMessageCount(0);
  };

  const renderMessageContent = (content) => {
    // Parse and render markdown-like formatting
    const parts = content.split(/(\*\*[^*]+\*\*|\n\d+\.|#+\s)/);

    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={idx} className="font-semibold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.match(/^\n\d+\./)) {
        return null; // Handled by list styling
      }
      if (part.match(/^#+\s/)) {
        return null; // Handled by heading styling
      }
      return <span key={idx}>{part}</span>;
    });
  };

  // LANDING SCREEN
  if (screen === 'landing') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
        {/* Hero Section */}
        <div className="gradient-hero text-white py-20 px-6 sm:px-12 flex-1 flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-2 tracking-tight">
              Scale Builder
            </h1>
            <p className="text-xl sm:text-2xl mb-6 font-medium opacity-95">
              by Promptletariat
            </p>
            <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Build validated psychology assessments with AI
            </p>
            <p className="text-base sm:text-lg mb-12 max-w-3xl mx-auto leading-relaxed opacity-85">
              Discover from 82 validated psychology scales and generate custom assessment tools tailored to your needs. Turn insights into interactive apps in minutes.
            </p>

            {/* How It Works */}
            <div className="bg-white bg-opacity-15 backdrop-blur-sm border border-white border-opacity-25 rounded-2xl p-8 max-w-2xl mx-auto mb-12 mt-10">
              <p className="text-lg font-semibold mb-3">This takes about 5 minutes.</p>
              <p className="text-base opacity-90 leading-relaxed">
                Scale Builder will ask you 4–5 quick questions about the topic you'd like to assess, what you want to name your app, and your visual style preferences. Then it builds your custom assessment app.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: 'Discover Scales',
                  desc: '82 validated scales',
                  icon: '🔍',
                },
                {
                  title: 'Customize Design',
                  desc: 'Colors, names, and style',
                  icon: '🎨',
                },
                {
                  title: 'Get Your App',
                  desc: 'Interactive assessment tool',
                  icon: '📱',
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="feature-card bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30"
                >
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white opacity-90">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setScreen('chat')}
              className="btn-primary text-lg shadow-lg hover:shadow-2xl"
            >
              Start Building →
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-900 text-gray-300 py-8 px-6 text-center">
          <p className="text-sm">
            Brought to you by{' '}
            <a href="https://promptletariat.com" className="text-teal-400 hover:text-teal-300 font-semibold">the Promptletariat.com</a>
            {' '}| Created by <span className="font-semibold text-white">MK</span> |{' '}
            <span className="text-gray-400">
              Stanford Fellow in Organizational Behavior
            </span>{' '}
            | <a href="https://promptletariat.com" className="text-teal-400 hover:text-teal-300">promptletariat.com</a>
          </p>
        </div>
      </div>
    );
  }

  // CHAT SCREEN
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900">Scale Builder</h1>
            <p className="text-sm text-gray-600 mt-1">
              by Promptletariat — Build validated psychology assessments with AI
            </p>
          </div>
        </div>

        {/* Messages Area */}
        <div className="chat-messages flex-1 px-6 py-8 overflow-y-auto max-w-4xl mx-auto w-full">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-6 flex message-enter ${
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={msg.role === 'user' ? 'user-message' : 'assistant-message'}
              >
                {msg.role === 'assistant' && (
                  <div className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
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
              <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-6 max-w-sm shadow-lg text-white">
                <p className="text-lg font-bold mb-1">Your assessment is ready!</p>
                <p className="text-sm opacity-90 mb-4">Try it out, then save it to share with others.</p>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => setFullScreen(true)}
                    className="w-full px-4 py-3 bg-white text-teal-700 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                  >
                    Try Your Assessment →
                  </button>
                  <button
                    onClick={startNewAssessment}
                    className="w-full px-4 py-2 text-sm text-teal-100 hover:text-white transition-all"
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
                    <span className="typing-indicator">●</span>
                    <span className="typing-indicator" style={{ animationDelay: '0.2s' }}>●</span>
                    <span className="typing-indicator" style={{ animationDelay: '0.4s' }}>●</span>
                  </div>
                  {showLoadingMessage && (
                    <span className="text-sm text-gray-500 ml-2">{getLoadingEstimate()}</span>
                  )}
                </div>
                {showLoadingMessage && (
                  <div className="mt-2 text-xs text-gray-400 font-medium">{getStepLabel()}</div>
                )}
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-white border-t border-gray-200 px-6 py-6 shadow-lg">
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
                className="flex-1 px-5 py-3 rounded-lg border border-gray-300 focus:border-teal-700 focus:ring-2 focus:ring-teal-700 focus:ring-offset-0 transition-all disabled:bg-gray-100 disabled:text-gray-500"
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="px-6 py-3 bg-teal-700 text-white rounded-lg font-semibold hover:bg-teal-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all flex items-center gap-2"
              >
                <span>Send</span>
                <span>→</span>
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3 ml-1">
              Press Enter to send • Brought to you by the Promptletariat.com
            </p>
          </div>
        </div>
      </div>

      {/* Full-Screen Assessment Overlay */}
      {fullScreen && artifact && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          {/* Full-screen Header */}
          <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between bg-gradient-to-r from-teal-50 to-white shadow-sm">
            <h2 className="text-lg font-bold text-gray-900">Your Assessment <span className="text-sm font-normal text-gray-500">• Brought to you by the Promptletariat.com</span></h2>
            <div className="flex gap-3 items-center">
              <button
                onClick={downloadArtifact}
                className="text-sm px-4 py-2 text-teal-700 border border-teal-700 rounded-lg hover:bg-teal-50 transition-all"
              >
                Save to Computer
              </button>
              <button
                onClick={() => setFullScreen(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
              >
                ✕
              </button>
            </div>
          </div>
          {/* Full-screen iframe */}
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
