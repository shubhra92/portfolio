# Shubhra Ghosh Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-blue?logo=nextdotjs)](https://nextjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?logo=tailwindcss)](https://tailwindcss.com/)

A modern, responsive portfolio website for Shubhra Ghosh, Full Stack Developer. Built with Next.js, React, TypeScript, and Tailwind CSS. Showcases projects, skills, resume, blog, and contact form.

---

## 🚀 Features

- **Hero Section**: Eye-catching introduction with call-to-action buttons and social links.
- **About**: Developer background, journey, and highlights.
- **Skills**: Categorized list of technologies and tools.
- **Projects**: Featured and other projects with tech stack, code, and demo links.
- **Resume**: Experience, education, certifications, and downloadable resume.
- **Contact**: Contact info and interactive form with toast notifications.
- **Blog**: Recent articles on web development and technology.
- **Dark/Light Mode**: Theme toggle with system preference support.
- **Responsive Design**: Mobile-first, works on all devices.

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/) (Accessible UI components)
- [Lucide Icons](https://lucide.dev/)
- [Zod](https://zod.dev/) (Validation)
- [React Hook Form](https://react-hook-form.com/)
- [Next Themes](https://github.com/pacocoursey/next-themes) (Theme switching)
- [Sonner](https://sonner.emilkowal.ski/) (Toasts)

## 📁 Folder Structure

```
portfolio-website/
├── app/                # Next.js app directory (pages, layout, entry)
├── components/         # Reusable UI and section components
│   ├── layout/         # Header, Footer
│   ├── sections/       # Hero, About, Skills, Projects, Resume, Contact, Blog
│   └── ui/             # UI primitives (button, card, etc.)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets (images, icons)
├── styles/             # Global styles
├── package.json        # Project metadata and scripts
├── tailwind.config.js  # Tailwind CSS config
├── tsconfig.json       # TypeScript config
└── README.md           # Project documentation
```

## ⚡ Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/portfolio-website.git
   cd portfolio-website
   ```
2. **Install dependencies:**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```
3. **Run the development server:**
   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```
4. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## 📝 Customization

- **Update content**: Edit files in `components/sections/` for About, Skills, Projects, Resume, Blog, and Contact info.
- **Change theme**: Modify `tailwind.config.js` and `styles/globals.css` for custom styles.
- **Add projects/blogs**: Update the arrays in `Projects.tsx` and `Blog.tsx`.
- **Social links**: Update URLs in `Hero.tsx` and `Footer.tsx`.

## 📦 Scripts

- `pnpm dev` — Start development server
- `pnpm build` — Build for production
- `pnpm start` — Start production server
- `pnpm lint` — Lint code

## 🙏 Credits

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)
- [Sonner](https://sonner.emilkowal.ski/)

---

**Made with ❤️ by Shubhra Ghosh** 