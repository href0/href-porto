# Hermansyah Efendi - Portfolio

Modern, clean, and technical portfolio website for a Backend Developer, built with React, TypeScript, and Tailwind CSS.

![React](https://img.shields.io/badge/React-18-61dafb?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7-646cff?style=flat&logo=vite)

## 🎨 Features

- **Modern Design**: Dark theme with blue and neon green accents
- **Code-Inspired UI**: Typography using Inter and JetBrains Mono fonts
- **Smooth Animations**: Powered by Framer Motion
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **SEO Optimized**: Meta tags and semantic HTML
- **Performance**: Fast loading with Vite build tool

## 📦 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project folder:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.tsx          # Hero section with intro
│   │   ├── About.tsx         # About section
│   │   ├── Skills.tsx        # Tech stack & skills
│   │   ├── Experience.tsx    # Work history timeline
│   │   ├── Projects.tsx      # Featured projects
│   │   ├── Contact.tsx       # Contact form & info
│   │   ├── Navigation.tsx    # Top navigation
│   │   └── Footer.tsx        # Footer section
│   ├── lib/
│   │   └── utils.ts          # Utility functions
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎨 Customization

### Update Personal Information

Edit the content in each component file:

- **Hero.tsx**: Name, title, tagline, and social links
- **About.tsx**: Bio and expertise description
- **Skills.tsx**: Tech stack and skill levels
- **Experience.tsx**: Work history and achievements
- **Projects.tsx**: Featured projects
- **Contact.tsx**: Contact information

### Change Theme Colors

Edit `tailwind.config.js` and `src/index.css` to customize:

- Primary color (blue)
- Accent color (green)
- Background colors
- Border colors

### Modify Fonts

Update the Google Fonts import in `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

Or use Netlify CLI:
```bash
npm i -g netlify-cli
netlify deploy --prod
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Hermansyah Efendi**

- Website: [hrefdev.be](https://hrefdev.be)
- GitHub: [@href0](https://github.com/href0)
- LinkedIn: [href0](https://www.linkedin.com/in/href0)
- Email: me@hrefdev.be

## 🙏 Acknowledgments

- Design inspiration from modern developer portfolios
- Icons by [Lucide](https://lucide.dev)
- Fonts by [Google Fonts](https://fonts.google.com)

---

Built with ❤️ using React + TypeScript + Tailwind CSS
