# Radheshyam Mopalwar - Personal Branding Website

A modern, premium personal branding website for Radheshyam Mopalwar (IAS Retd.) built with React, Vite, and Tailwind CSS v4.

## Tech Stack

- **Build Tool**: Vite
- **Framework**: React 19
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM v7
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Design System

- **Primary Color**: Deep navy (#0a1628)
- **Accent Color**: Gold (#c9a45c)
- **Heading Font**: Playfair Display
- **Body Font**: Inter

## Project Structure

```
├── index.html              # Entry HTML with fonts
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite + Tailwind v4 config
├── eslint.config.js        # ESLint configuration
├── src/
│   ├── main.jsx           # React entry with router
│   ├── App.jsx            # App placeholder
│   ├── router.jsx         # Route definitions
│   ├── styles.css         # Tailwind + custom styles
│   ├── layout/
│   │   └── Layout.jsx     # Root layout wrapper
│   ├── components/
│   │   ├── Navbar.jsx     # Sticky responsive nav
│   │   ├── Footer.jsx     # Site footer
│   │   ├── Container.jsx  # Layout wrapper
│   │   ├── SectionHeading.jsx  # Reusable section headers
│   │   └── Card.jsx       # Reusable card component
│   └── pages/
│       ├── Home.jsx       # Hero + highlights + projects
│       ├── About.jsx      # Bio + values + timeline
│       ├── Achievements.jsx  # Awards + publications
│       ├── Projects.jsx   # Projects showcase
│       ├── Career.jsx     # Career timeline
│       ├── Blog.jsx       # Articles + newsletter
│       └── Contact.jsx    # Contact form + info
```

## Routes

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About |
| `/achievements` | Achievements |
| `/projects` | Projects |
| `/career` | Career |
| `/blog` | Blog |
| `/contact` | Contact |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Design Features

- **Hero Section**: Animated intro with impact statement
- **About Preview**: Short bio with portrait placeholder
- **Key Highlights**: 4 stat cards with icons
- **Featured Project**: Samruddhi Mahamarg showcase
- **Latest Updates**: Blog preview cards
- **Responsive**: Mobile-first design
- **Animations**: Framer Motion for subtle transitions

## License

© 2024 Radheshyam Mopalwar. All rights reserved.
