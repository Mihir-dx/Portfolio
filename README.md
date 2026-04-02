# Mihir Kumar - Game Developer & 3D Artist Portfolio

A professional portfolio website showcasing game development and 3D art projects. Built with modern web technologies for fast performance and smooth user experience.

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- Bun or npm package manager

### Installation & Development

```sh
# Clone the repository
git clone <YOUR_REPOSITORY_URL>

# Navigate to the project directory
cd mihir-portfolio

# Install dependencies
npm install
# or
bun install

# Start the development server
npm run dev
# or
bun dev
```

The development server will start at `http://localhost:8080` with hot module replacement enabled.

## 🛠️ Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Custom Design System
- **UI Components**: shadcn/ui (custom curated selection)
- **Icons**: Lucide React
- **3D Models**: Google Model Viewer
- **Notifications**: Sonner toast notifications
- **Routing**: React Router v6

## 📦 Available Scripts

```sh
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Code linting
npm run lint
```

## 📁 Project Structure

- `/src/components` - Reusable React components
  - `/ui` - Custom shadcn/ui components
  - `/sections` - Page section components
- `/src/pages` - Page components
- `/src/hooks` - Custom React hooks
- `/src/lib` - Utility functions
- `/src/assets` - Images and static files
- `/public` - Public assets

## 🎨 Design System

The portfolio uses a professional Black Ops 6 HUD-inspired theme with:
- **Primary Color**: Orange (hsl(24, 100%, 50%))
- **Background**: Dark charcoal (hsl(0, 0%, 2%))
- **Fonts**: Rajdhani (display), Oxanium (body)
- **Sharp tactical edges** with minimal border radius

See `/src/index.css` for complete design token definitions.

## 🚀 Deployment

Build the project for production:

```sh
npm run build
```

The optimized build artifacts will be in the `/dist` directory. Deploy this folder to your hosting platform:

- **Vercel**: Connect your GitHub repository to Vercel for automatic deployments
- **Netlify**: Drop the `/dist` folder directly or connect your Git repository
- **GitHub Pages**: Build and push the `/dist` folder to the `gh-pages` branch
- **Custom Server**: Copy the `/dist` contents to your web server's public directory

## 🔧 Development Workflow

1. Create a new branch for features: `git checkout -b feature/your-feature`
2. Make your changes
3. Commit your work: `git commit -am 'Add feature description'`
4. Push to your branch: `git push origin feature/your-feature`
5. Create a Pull Request

## 📝 Configuration Files

- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript compiler options
- `tailwind.config.ts` - Tailwind CSS customization
- `postcss.config.js` - PostCSS plugins
- `eslint.config.js` - Code linting rules
- `.components.json` - shadcn/ui configuration

## 🐛 Troubleshooting

**Port 8080 already in use?**
```sh
npm run dev -- --port 3000
```

**Clear build cache and reinstall:**
```sh
rm -rf node_modules dist
npm install
npm run build
```

## 📄 License

Personal portfolio project. All rights reserved.

---

For questions or inquiries about projects, please use the contact form on the portfolio website.
