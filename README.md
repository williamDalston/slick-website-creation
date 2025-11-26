# ClarityGrid Marketing Site

A fast, cinematic, single-page marketing website for ClarityGrid, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎬 Full-bleed video backgrounds with responsive design
- ⚡ Optimized for performance and Core Web Vitals
- 🎨 Cinematic animations with Framer Motion
- 📱 Fully responsive design (mobile-first)
- ♿ Accessible semantic HTML and ARIA labels
- 🎯 Clear CTAs for early access and waitlist signup

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your video files to the `public/videos/` directory:
   - `hero-loop.mp4` - Main hero background video
   - `analytics-grid.mp4` - Analytics visualization video
   - `ai-orbit.mp4` - AI/orbit animation video

   **Note:** Videos should be optimized, short loops (3-6 seconds), and in MP4 format with H.264 encoding for best browser compatibility.

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Main landing page
│   └── globals.css          # Global styles and Tailwind
├── components/
│   ├── Nav.tsx              # Sticky navigation
│   ├── Hero.tsx             # Hero section with video
│   ├── VideoBackground.tsx  # Reusable video background
│   ├── CollaboratorsStrip.tsx
│   ├── SectionCluster.tsx   # Reusable domain section
│   ├── HowItWorks.tsx
│   ├── ProblemVsFuture.tsx
│   ├── Pricing.tsx
│   ├── FAQ.tsx
│   ├── FinalCTA.tsx
│   ├── Waitlist.tsx
│   └── Footer.tsx
├── public/
│   └── videos/              # Place your video files here
└── package.json
```

## Video Requirements

For optimal performance:

- **Format:** MP4 (H.264 codec)
- **Duration:** 3-6 second loops
- **Resolution:** 1920x1080 (1080p) or lower for faster loading
- **File size:** Aim for < 5MB per video
- **Optimization:** Use tools like HandBrake or FFmpeg to compress

Example FFmpeg command to optimize:
```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k -movflags +faststart output.mp4
```

## Deployment

This site is ready to deploy to Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy

The site is static and requires no backend configuration.

## Customization

### Colors & Typography

Edit `app/globals.css` to customize the color scheme and typography.

### Content

All copy and content can be edited directly in the component files in `components/`.

### Animations

Animations use Framer Motion. Adjust timing and effects in individual components.

## Performance Tips

- Videos are lazy-loaded with `preload="metadata"` for non-hero videos
- Images should use Next.js `Image` component (when added)
- Animations use GPU-friendly transforms (translate/opacity)
- Components use dynamic imports where appropriate

## License

This project is private and proprietary.


