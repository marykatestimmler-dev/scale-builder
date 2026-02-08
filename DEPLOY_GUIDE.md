# Scale Builder — Deployment Guide

## What You're Deploying

A web app where anyone can chat with AI to discover validated psychology scales and get a custom, downloadable assessment tool. No account needed for visitors.

## What You Need

1. A **GitHub** account (free) — [github.com](https://github.com)
2. A **Vercel** account (free) — [vercel.com](https://vercel.com) (sign up with your GitHub account)
3. A **Claude API key** from Anthropic — [console.anthropic.com](https://console.anthropic.com)

## Step 1: Get Your Claude API Key

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Sign up or log in
3. Go to **API Keys** in the left sidebar
4. Click **Create Key**
5. Name it "Scale Builder"
6. Copy the key (starts with `sk-ant-...`) — save it somewhere safe, you'll need it in Step 4
7. Add billing: Go to **Plans & Billing** → add a payment method → add $5 in credits to start

**Cost estimate:** Each user conversation costs roughly $0.05–0.15. So $5 covers about 30–100 conversations.

## Step 2: Push Code to GitHub

1. Go to [github.com](https://github.com) and log in
2. Click the **+** button (top right) → **New repository**
3. Name it `scale-builder`
4. Set it to **Public** (or Private — your choice)
5. Click **Create repository**
6. Open Terminal on your Mac and run these commands one at a time:

```
cd ~/Claude\ App\ Folder\ I\ made/scale-builder
git init
git add .
git commit -m "Initial Scale Builder app"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/scale-builder.git
git push -u origin main
```

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username.

**If you've never used Git before:** You may be prompted to log in. Follow the prompts, or ask me for help.

## Step 3: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New..."** → **Project**
3. Find your `scale-builder` repository in the list and click **Import**
4. Leave all settings at their defaults (Vercel auto-detects Next.js)
5. Click **Deploy**
6. Wait 1–2 minutes for the build to complete

## Step 4: Add Your API Key

1. In your Vercel project dashboard, go to **Settings** → **Environment Variables**
2. Add a new variable:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** paste your API key from Step 1
   - **Environment:** select all (Production, Preview, Development)
3. Click **Save**
4. Go back to **Deployments** → click the **...** menu on the latest deployment → **Redeploy**

## Step 5: Test It

1. Click the URL Vercel gave you (something like `scale-builder-abc123.vercel.app`)
2. Click **Start Building**
3. Type: "I want to build a burnout assessment for my team"
4. You should see Claude respond with scale recommendations
5. Follow the conversation to generate an assessment
6. Try downloading the generated HTML file and opening it in your browser

## Step 6: Custom Domain (Optional)

If you want it at `builder.promptletariat.com`:

1. In Vercel → **Settings** → **Domains**
2. Type `builder.promptletariat.com` and click **Add**
3. Vercel will give you DNS instructions
4. Log into your Squarespace domain settings
5. Add a **CNAME record** pointing `builder` to `cname.vercel-dns.com`
6. Wait 5–10 minutes for DNS to propagate

## Step 7: Link from Squarespace

Add a page on promptletariat.com that links to your Scale Builder:

**Option A: Simple link**
Add a button that opens the app in a new tab.

**Option B: Embed via iframe**
In Squarespace, add a Code Block and paste:
```html
<iframe src="https://builder.promptletariat.com" width="100%" height="800" style="border: none; border-radius: 12px;"></iframe>
```

## Monitoring Costs

Check your API usage at [console.anthropic.com](https://console.anthropic.com) → **Usage**.

**Tips to control costs:**
- The app has built-in rate limiting (20 requests/hour per visitor)
- Each conversation is typically 3–8 API calls
- Set a monthly budget alert in Anthropic's console
- If it goes viral, you can temporarily disable by removing the API key from Vercel

## Troubleshooting

**"Error: Missing API key"**
→ Make sure you added `ANTHROPIC_API_KEY` in Vercel Settings → Environment Variables, then redeployed.

**Build fails on Vercel**
→ Check the build logs for errors. Most common: a typo in the code. Share the error with me and I can help fix it.

**Chat works but no assessment is generated**
→ Claude might need more context. Try being specific: "I want a 5-minute burnout assessment with a blue color scheme called Team Wellness Check."

**Assessment HTML doesn't render in preview**
→ Try downloading it and opening directly in your browser. Some complex assessments render better outside the iframe.

## Updating the App

To make changes:
1. Edit files in `~/Claude App Folder I made/scale-builder/`
2. In Terminal:
```
cd ~/Claude\ App\ Folder\ I\ made/scale-builder
git add .
git commit -m "Description of what you changed"
git push
```
3. Vercel automatically redeploys when you push to GitHub

## Adding More Scales

Edit `lib/systemPrompt.js` — find the scales database section and add new entries following the existing format. Then push to GitHub and Vercel will redeploy automatically.
