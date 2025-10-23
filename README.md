# Rete Italiana Studi Curdi - Website

Modern Jamstack website for the Rete Italiana Studi Curdi association, built with Astro, Decap CMS, and deployed on Netlify.

## 🚀 Features

- **Static Site Generation** with Astro for optimal performance
- **Headless CMS** with Decap CMS for easy content management
- **Responsive Design** with Tailwind CSS
- **Content Collections** for articles, pages, and events
- **SEO Optimized** with proper meta tags and structured data
- **Git-based Workflow** with automatic deployments

## 🛠️ Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Decap CMS](https://decapcms.org/) - Headless CMS
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Netlify](https://netlify.com/) - Hosting and CI/CD

## 📁 Project Structure

```
├── public/
│   ├── admin/           # Decap CMS admin interface
│   └── images/          # Static images
├── src/
│   ├── components/      # Reusable Astro components
│   ├── content/         # Content collections
│   │   ├── articoli/    # Articles content
│   │   ├── eventi/      # Events content
│   │   └── pagine/      # Pages content
│   ├── layouts/         # Page layouts
│   └── pages/           # Astro pages
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind configuration
└── netlify.toml         # Netlify deployment config
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands
- `npm run verify` - Verify project is ready for deployment
- `npm run deploy:prep` - Interactive deployment preparation
- `npm run deploy:checklist` - Track deployment progress

See `DEPLOYMENT_SCRIPTS.md` for detailed information about deployment automation.

## 📝 Content Management

### Using Decap CMS

1. Deploy the site to Netlify
2. Enable Netlify Identity
3. Access the admin panel at `/admin/`
4. Create an account and start managing content

### Content Collections

The site uses three main content collections:

- **Articoli** (`src/content/articoli/`) - Blog articles and publications
- **Eventi** (`src/content/eventi/`) - Events and conferences  
- **Pagine** (`src/content/pagine/`) - Static pages

Each collection has a defined schema in `src/content/config.ts`.

## 🚀 Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Enable Netlify Identity for CMS access
4. Deploy!

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Upload the `dist` folder to your hosting provider

## 🔧 Configuration

### Environment Variables

No environment variables are required for basic functionality.

### Custom Domain

To set up a custom domain:

1. Add your domain in Netlify dashboard
2. Update the `site` URL in `astro.config.mjs`
3. Configure DNS settings as instructed by Netlify

## 📱 Content Types

### Articles (Articoli)

- Title and description
- Publication and update dates
- Author information
- Tags for categorization
- Featured flag for homepage display
- Hero image
- Markdown content

### Events (Eventi)

- Title and description
- Event date and end date
- Location information
- Registration URL
- Featured flag
- Hero image
- Markdown content

### Pages (Pagine)

- Title and description
- Update date
- Order for navigation
- Hero image
- Markdown content

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- Email: info@reteitalianastudicurdi.it
- Website: www.reteitalianastudicurdi.it
