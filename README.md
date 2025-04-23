# Developer Portfolio

[![Developer Portfolio](https://via.placeholder.com/800x200)](https://your-demo-link.com)

A modern, responsive developer portfolio built with React, TypeScript, and Tailwind CSS. Features a beautiful design, dark mode support, and smooth animations.

[**View Live Demo**](https://your-demo-link.com)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Future Improvements](#future-improvements)

## Features

- 🎨 Modern and clean design
- 🌓 Dark mode support
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive layout
- ⚡ Built with Vite for optimal performance
- 🎯 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 📝 Contact form with validation
- 🖼️ Project showcase with filtering
- 📊 Skills visualization

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React Icons
- Vite

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/developer-portfolio.git
```

2. Install dependencies:

```bash
cd developer-portfolio
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## Project Structure

```
├── public/
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── ui/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── context/
│   │   └── ThemeContext.tsx
│   ├── data/
│   │   ├── projects.ts
│   │   └── skills.ts
│   ├── hooks/
│   │   └── useTypewriter.ts
│   ├── App.tsx
│   └── main.tsx
└── package.json
```

## Customization

1.  **Update Personal Information:** Modify the `src/components/Hero.tsx` file to update your name, title, and short description.
2.  **Modify Projects:** Add or edit your projects in the `src/data/projects.ts` file. You can include project images, descriptions, and links to live demos or GitHub repositories.
3.  **Update Skills:** Update your skills in the `src/data/skills.ts` file. You can specify the skill name and proficiency level.
4.  **Replace Profile Image:** Replace the placeholder profile image in the `src/assets/profile.jpg` file with your own image.
5.  **Update Contact Information:** Modify the `src/components/Contact.tsx` file to update your email address and other contact information.
6.  **Customize Theme:** Modify the `src/context/ThemeContext.tsx` file to customize the theme of the portfolio. You can change the primary and secondary colors, font family, and other theme settings.

## Deployment

1.  **Build the project:** Run `npm run build` to build the project for production.
2.  **Deploy to a hosting provider:** Deploy the contents of the `dist` folder to a hosting provider such as Netlify, Vercel, or GitHub Pages.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Future Improvements

- Add a blog section
- Implement a more advanced contact form
- Add support for multiple languages

## License

This project is licensed under the MIT License - see the LICENSE file for details.
