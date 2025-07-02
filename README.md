# David Boham - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, React, and Tailwind CSS. This website showcases David Boham's skills, experience, projects, and provides a way for potential employers or collaborators to get in touch.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations and gradients
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Scrolling**: Seamless navigation between sections
- **Interactive Components**: Engaging UI elements with hover effects and transitions
- **Performance Optimized**: Built with Next.js for optimal performance and SEO
- **TypeScript**: Full TypeScript support for better development experience

## 📋 Sections

- **Hero Section**: Introduction with call-to-action buttons
- **About Section**: Personal background and skills
- **Experience Section**: Work history and achievements
- **Projects Section**: Showcase of notable projects
- **Contact Section**: Contact information and form
- **Footer**: Additional links and information

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations**: [Tailwind CSS Animate](https://github.com/jamiebuilds/tailwindcss-animate)
- **Icons**: Custom SVG icons and heroicons
- **Deployment**: Ready for Vercel deployment

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd personal_web
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
personal_web/
├── app/                    # Next.js App Router
│   ├── components/         # Page-specific components
│   ├── favicon.ico        # Website favicon
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Shared components
│   ├── ui/               # Reusable UI components
│   └── *.tsx             # Section components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## 🎨 Customization

### Personal Information

Update the following files to customize your personal information:

- `app/components/hero-section.tsx` - Update name and tagline
- `app/components/about-section.tsx` - Update bio and skills
- `app/components/experience-section.tsx` - Update work experience
- `app/components/projects-section.tsx` - Update projects
- `app/components/contact-section.tsx` - Update contact information

### Styling

- Modify `app/globals.css` for global styles
- Update Tailwind classes in component files
- Customize colors in `tailwind.config.js`

### Images

- Replace `public/Profile.jpg` with your profile picture
- Add project images to the `public/` directory
- Update image references in components

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a personal portfolio project, but if you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Name**: David Boham
- **Role**: Computer Science Student
- **Focus**: Creating elegant, user-focused applications

---

Built with ❤️ using Next.js, React, and Tailwind CSS
