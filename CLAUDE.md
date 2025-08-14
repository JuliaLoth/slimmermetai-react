# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server
npm start

# Start with Netlify Dev (for CMS functionality)
npm run dev

# Build for production
npm run build

# Run tests
npm run test
```

## Project Architecture

This is a React 18 website for AI training and advisory services with Decap CMS integration. Key architectural patterns:

### Component Structure
- **Styled Components**: All styling is done with styled-components, not CSS modules or external stylesheets
- **React Router**: Client-side routing with sticky navigation
- **Content Management**: Hybrid approach using default content in `useContent.js` hook with CMS override capability

### Styling System
- **Color Scheme**: Purple/blue gradient (#667eea to #764ba2) as primary brand colors
- **Typography**: Arial-based sans-serif stack
- **Layout**: CSS Grid and Flexbox for responsive design
- **Hover Effects**: Consistent transform animations (translateY(-2px to -5px))
- **Mobile**: Responsive breakpoint at 768px with collapsible navigation

### Content Management
- **Default Content**: Defined in `src/hooks/useContent.js` as fallback
- **CMS Integration**: Decap CMS with Git Gateway for content editing
- **Content Types**: Pages (home, trainingen-advies, over-mij) and blog posts
- **File Structure**: CMS expects content in `src/content/` directory

### Netlify Configuration
- **Build**: Optimized for Netlify with processing enabled
- **Security Headers**: X-Frame-Options, XSS Protection, Content-Type-Options configured
- **Redirects**: SPA routing and admin panel redirects configured
- **Identity**: Netlify Identity for CMS authentication

## File Organization

```
src/
├── components/          # Reusable UI components
├── pages/              # Route-based page components  
├── hooks/              # Custom React hooks (content management)
├── styles/             # Global CSS files
└── content/            # CMS-managed content files (when set up)
```

## Development Guidelines

- Use styled-components for all component styling
- Follow existing gradient color scheme and hover animations
- Keep content defaults in `useContent.js` hook
- Ensure mobile responsiveness at 768px breakpoint
- Test both local development and Netlify Dev for CMS functionality