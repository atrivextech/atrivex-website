# Atrivex Technology Website

Modern, high-performance corporate website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Framer Motion for animations
- ✅ Dark/Light mode toggle
- ✅ Fully responsive design
- ✅ SEO optimized
- ✅ Contact form with API route
- ✅ Reusable component architecture

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create `.env.local` file (copy from `.env.example`):

```bash
cp .env.example .env.local
```

4. Update environment variables in `.env.local`

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── about/          # About page
│   ├── api/            # API routes
│   ├── contact/        # Contact page
│   ├── portfolio/      # Portfolio page
│   ├── services/       # Services page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── ServiceCard.tsx
│   ├── TestimonialCard.tsx
│   ├── ContactForm.tsx
│   └── ...
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Manual Deployment

```bash
npm run build
```

Deploy the `.next` folder to your hosting provider.

## Email Configuration

To enable contact form emails:

1. Install nodemailer: `npm install nodemailer`
2. Configure SMTP settings in `.env.local`
3. Update `src/app/api/contact/route.ts` with email logic

## Customization

- Update colors in `tailwind.config.ts`
- Modify content in page files
- Add new components in `src/components/`
- Update metadata in each page's `metadata` export

## Performance

- Lighthouse score target: 90+
- Image optimization with Next.js Image
- Code splitting and lazy loading
- Minimal JavaScript bundle

## License

Private - Atrivex Technology Private Limited
