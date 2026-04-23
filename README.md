# Portfolio Website

A modern, production-ready portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations, responsive design, and optimized performance for Vercel deployment.

## ✨ Features

- **Modern Design** – Clean, minimal aesthetic with elegant typography
- **Responsive Layout** – Mobile-first approach, optimized for all screen sizes
- **Smooth Animations** – Framer Motion animations with reduced-motion support
- **Type-Safe** – Full TypeScript support with strict mode enabled
- **Data-Driven** – Centralized content configuration in `lib/data.ts`
- **Performance Optimized** – Image optimization, lazy loading, code splitting
- **SEO Ready** – Proper metadata, OpenGraph tags, and robots configuration
- **Vercel Optimized** – Configured for seamless Vercel deployment

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Deployment**: Vercel

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles
│   └── not-found.tsx        # 404 error page
├── components/
│   ├── Hero.tsx             # Hero section
│   ├── Work.tsx             # Projects grid
│   ├── Contact.tsx          # Contact section
│   ├── Footer.tsx           # Footer
│   ├── Navigation.tsx       # Navbar with smooth scroll
│   ├── Typography.tsx       # Heading & BodyText components
│   ├── Button.tsx           # CTA button component
│   ├── Container.tsx        # Responsive wrapper
│   ├── LoadingSkeleton.tsx  # Loading states
│   └── index.ts             # Barrel export
├── types/
│   └── index.ts             # TypeScript interfaces
├── lib/
│   └── data.ts              # Centralized content config
├── next.config.js           # Next.js configuration
├── vercel.json              # Vercel deployment config
└── postcss.config.mjs       # PostCSS configuration
```

## 🛠️ Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd moses

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Update Your Information

Edit `lib/data.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: 'Your Name',
  role: 'Your Role',
  bio: 'Your bio',
  email: 'your.email@example.com',
  projectCount: 6,
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Project Name',
    category: 'Category',
    description: 'Project description',
    imageUrl: '/images/projects/project-1.jpg',
  },
  // Add more projects...
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/...' },
  { name: 'LinkedIn', url: 'https://linkedin.com/...' },
  { name: 'Twitter', url: 'https://twitter.com/...' },
];
```

### Customize Colors & Fonts

Edit `app/globals.css` and `app/layout.tsx` to change:
- Primary colors
- Typography fonts
- Spacing and sizing

## 📦 Build & Deployment

### Build

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

**Option 1: GitHub Integration (Easiest)**
```bash
# 1. Push to GitHub
git add .
git commit -m "Initial commit"
git push origin main

# 2. Go to vercel.com → Import Project
# 3. Select your repository
# 4. Click Deploy
```

**Option 2: Vercel CLI**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production
vercel --prod
```

**Option 3: Web Dashboard**
1. Visit [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Select your repository
4. Click "Deploy"

### Environment Variables

Create `.env.local` (optional):
```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 🔧 Configuration

- **next.config.js**: Image optimization, TypeScript settings
- **vercel.json**: Deployment settings, build commands
- **app/layout.tsx**: Metadata, SEO, theme configuration

## ♿ Accessibility

- ✅ Semantic HTML
- ✅ Proper heading hierarchy
- ✅ Reduced motion support
- ✅ Keyboard navigation
- ✅ Proper contrast ratios

## 📱 Responsive Design

- Mobile: 320px - 639px
- Tablet: 640px - 1023px
- Desktop: 1024px+

## 🚀 Performance

- Optimized Framer Motion animations with `useInView`
- Reduced-motion accessibility support
- Image optimization ready
- Automatic code splitting
- CSS purging with Tailwind

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Vercel Docs](https://vercel.com/docs)

## 📄 License

MIT License - Open source
