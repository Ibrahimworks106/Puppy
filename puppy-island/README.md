# Puppy Island

A premium digital experience for Puppy Island — a boutique dog resort offering boarding, grooming, spa & bath, and daycare services.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Language:** TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── pricing/page.tsx      # Pricing (scrollable sections)
│   ├── services/page.tsx     # Services overview
│   └── about/page.tsx        # About us
├── components/
│   ├── home/                 # Home page components
│   ├── pricing/              # Pricing components
│   ├── services/             # Service components
│   ├── about/                # About components
│   ├── layout/               # Navbar, Footer
│   └── ui/                   # Shared UI primitives
└── lib/                      # Utilities
```

## Features

- Responsive design across all breakpoints
- Scroll-triggered animations with Framer Motion
- Dynamic pricing tables with real service data
- Modular component architecture
- Static page generation for optimal performance

## License

Private — Puppy Island Resort
