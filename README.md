# localboost-ai
Ai App
git clone https://github.com/<your-username>/localboost-ai.git
cd localboost-ai
npx create-next-app@latest . --typescript --eslint --use-npm
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
localboost-ai/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── dashboard/
│   │   ├── page.tsx          # Dashboard (reviews, analytics)
│   │   ├── reviews.tsx       # Review management UI
│   │   ├── retention.tsx     # SMS/email automation UI
│   │   └── posts.tsx         # Social posting UI
│   └── api/
│       ├── reviews/
│       │   └── route.ts      # Handles review replies (OpenAI API)
│       ├── retention/
│       │   └── route.ts      # Handles reactivation messages
│       └── reports/
│           └── route.ts      # Weekly summaries
│
├── components/
│   ├── ui/                   # Buttons, cards, modals
│   ├── charts/               # Recharts components
│   └── forms/                # Inputs, etc.
│
├── lib/
│   ├── openai.ts             # OpenAI client wrapper
│   ├── google.ts             # Google Business API connector
│   ├── twilio.ts             # SMS integration
│   ├── auth.ts               # Clerk/Auth0 config
│   └── db.ts                 # Supabase or Prisma config
│
├── public/
│   ├── logo.svg
│   ├── favicon.ico
│
├── .env.local                # API keys (never push this!)
├── package.json
├── tailwind.config.js
├── README.md
└── LICENSE
git add .
git commit -m "Initial commit: Next.js + Tailwind + setup"
git push origin main
OPENAI_API_KEY=your_openai_key
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
GOOGLE_API_KEY=your_google_key
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
