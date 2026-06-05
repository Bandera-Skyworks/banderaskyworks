# Bandera Skyworks - Professional Drone Services

Professional drone inspection services for the Texas Hill Country, specializing in energy infrastructure, construction monitoring, and commercial applications.

![Bandera Skyworks Logo](logo3.png)

## 🚁 Overview

Bandera Skyworks provides cutting-edge aerial inspection and monitoring services using advanced drone technology. We serve utilities, energy companies, construction firms, and commercial clients throughout Central and South Texas.

### Key Services
- **Powerline Inspections** - Comprehensive transmission and distribution line assessments
- **Substation Inspections** - Detailed equipment and infrastructure analysis
- **Solar Farm Monitoring** - Panel efficiency and maintenance inspections
- **Wind Turbine Inspections** - Blade and component examinations
- **Construction Progress Monitoring** - Real-time project documentation
- **Emergency Response** - 24/7 rapid deployment for critical situations

## 🌐 Website

Visit our live site: [banderaskyworks.com](https://banderaskyworks.com)

## 💻 Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Framework**: Bootstrap 5.3
- **Icons**: Font Awesome 6.4
- **Framework**: [Astro](https://astro.build) (static output)
- **Styling**: Tailwind CSS v4 with a shared design system mirroring the [UAS-Log](https://github.com/DamageLabs/uas-log) app (Outfit typeface, `brand`/`gray` token ramps)
- **Language**: TypeScript
- **Contact Form**: EmailJS integration
- **Analytics**: Cloudflare Web Analytics
- **Hosting**: Google Cloud Platform VM
- **CI/CD**: GitHub Actions

## 🚀 Getting Started

### Prerequisites

- Node.js 24+ (see `.nvmrc`)
- Git

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/Bandera-Skyworks/banderaskyworks.git
cd banderaskyworks
```

2. Install dependencies and start the dev server:
```bash
npm install
npm run dev
```

3. Navigate to `http://localhost:4321`

### Building

```bash
npm run build    # outputs static HTML/CSS/JS to dist/
npm run preview  # serve the production build locally
```

## 📁 Project Structure

```
banderaskyworks/
├── src/
│   ├── pages/              # One file per route → index/about/services/contact/404.html
│   ├── layouts/
│   │   └── BaseLayout.astro # <head> SEO meta, JSON-LD, dark-mode init
│   ├── components/         # Navbar, Footer, Button, Card, Badge, Icon, ContactForm…
│   ├── lib/
│   │   └── site.ts         # Single source of truth for site content & metadata
│   └── styles/
│       └── theme.css       # Shared @theme design tokens (mirrors UAS-Log)
├── public/                 # Copied verbatim to the site root
│   ├── assets/images/      # Logos and imagery
│   ├── robots.txt
│   ├── sitemap.xml
│   └── .htaccess
└── .github/workflows/
    ├── deploy-to-gcp.yml   # Build + deploy to GCP VM
    └── README.md           # Deployment documentation
```

## 🔧 Configuration

### Contact Form Setup

The contact form uses EmailJS. Credentials live in `src/components/ContactForm.astro`:

- Public Key — `emailjs.init(...)`
- Service ID / Template ID — `emailjs.send('gmail_1', 'template_cb3vlel', ...)`

### Deployment Configuration

See `.github/workflows/README.md` for detailed GCP deployment setup.

## 📱 Features

- **Responsive Design** - Mobile-first approach for all devices
- **Fast Loading** - Optimized assets and minimal dependencies
- **SEO Friendly** - Semantic HTML and meta tags
- **Accessible** - WCAG compliance considerations
- **24/7 Contact** - Emergency response capabilities

## 🎨 Customization

### Colors

Edit CSS variables in `assets/css/styles.css`:
```css
:root {
    --navy: #1e3a5f;
    --red: #c8102e;
    --light-blue: #e8f1f9;
    --dark-gray: #2c3e50;
    --white: #ffffff;
}
```

### Content

All content is in HTML files and can be edited directly. Main sections:
- Hero sections
- Service descriptions
- Contact information
- Footer content

## 📧 Contact Information

- **Phone**: (210) 549-7015
- **Email**: info@banderaskyworks.com
- **Emergency**: Available 24/7
- **Service Area**: Texas Hill Country

## 🌟 Social Media

- [Instagram](https://www.instagram.com/banderaskyworks/)
- [X (Twitter)](https://x.com/BanderaSkyworks)

## 📄 License

© 2024 Bandera Skyworks. All rights reserved.

## 🤝 Contributing

This is a private business website. For inquiries about the website or services, please contact us through the website contact form.

## ✈️ Certifications

- FAA Part 107 Certified
- $5M Liability Insurance
- Texas State Licensed

---

**Bandera Skyworks** - *Elevating Infrastructure Inspections*