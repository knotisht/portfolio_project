# Portfolio Website

A clean, modular, and scalable portfolio website structure designed for easy maintenance and modification.

## 📁 Project Structure

```
portfolio/
├── index.html                 # Main HTML file
├── css/
│   ├── style.css             # Main stylesheet (imports all CSS modules)
│   ├── _variables.css        # CSS custom properties and theme colors
│   ├── _reset.css            # Browser reset and base styles
│   ├── _typography.css       # Font families, sizes, and text styles
│   ├── _animations.css       # Keyframe animations and transitions
│   ├── _footer.css           # Footer component styles
│   ├── _responsive.css       # Media queries for responsive design
│   ├── layout/
│   │   ├── _grid.css         # Main grid layout
│   │   ├── _sidebar.css      # Sidebar component
│   │   └── _main.css         # Main content area
│   ├── components/
│   │   ├── _buttons.css      # Button components (primary, secondary, contact)
│   │   ├── _cards.css        # Card components (project, school, cert, etc.)
│   │   ├── _tags.css         # Tags and badges
│   │   └── _nav.css          # Navigation and social links
│   └── sections/
│       ├── _hero.css         # Hero section styles
│       ├── _about.css        # About section styles
│       ├── _experience.css   # Experience timeline styles
│       ├── _tech-stack.css   # Tech stack grid styles
│       ├── _projects.css     # School projects grid styles
│       ├── _certifications.css # Certifications grid styles
│       └── _recommendations.css # Recommendations section styles
├── js/
│   ├── app.js                # Main app initialization
│   ├── typed-hero.js         # Typing animation for hero section
│   └── active-nav.js         # Navigation highlight on scroll
└── assets/
    └── images/               # Image assets folder
```

## 🎨 CSS Organization

The CSS is organized using a modular approach:

- **Variables** - All colors, spacing, fonts, and transitions defined as CSS custom properties
- **Base** - Reset, typography, and fundamental styles
- **Layout** - Grid system and major layout components
- **Components** - Reusable components (buttons, cards, tags, nav)
- **Sections** - Specific section styling for each portfolio section
- **Utilities** - Animations, responsive design

## 🔧 How to Modify

### Changing Colors/Theme
Edit `css/_variables.css` to update all colors and theme variables throughout the site.

### Updating a Specific Section
Each section has its own CSS file:
- Hero/About → `css/sections/_hero.css` and `css/sections/_about.css`
- Experience → `css/sections/_experience.css`
- Tech Stack → `css/sections/_tech-stack.css`
- Projects → `css/sections/_projects.css`
- Certifications → `css/sections/_certifications.css`
- Recommendations → `css/sections/_recommendations.css`

### Modifying Components
Reusable components are in `css/components/`:
- Buttons → `_buttons.css`
- Cards → `_cards.css`
- Tags → `_tags.css`
- Navigation → `_nav.css`

### Layout Changes
Layout is in `css/layout/`:
- Grid system → `_grid.css`
- Sidebar → `_sidebar.css`
- Main content → `_main.css`

## 📱 Responsive Design

Media queries are centralized in `css/_responsive.css` for easy mobile optimization:
- Desktop (default)
- Tablet (max-width: 900px)
- Mobile (max-width: 600px)

## 🎬 JavaScript

JavaScript is split into focused modules:

- **app.js** - Main app initialization and global setup
- **typed-hero.js** - Typing animation effect in hero section
- **active-nav.js** - Navigation link highlighting based on scroll position

## 🚀 Getting Started

1. Update the hero title, name, and contact info in `index.html`
2. Modify colors in `css/_variables.css` to match your brand
3. Add your social links and profile information
4. Replace placeholder content with your actual portfolio data
5. Add images to `assets/images/` folder

## 💡 Features

- ✨ Clean, modern design
- 📱 Fully responsive
- ⚡ Fast loading (modular CSS)
- 🎨 Easy to customize (CSS variables)
- 🔍 SEO friendly
- ♿ Accessible structure
- 🎬 Smooth animations and transitions

## 📝 Notes

- All CSS files are imported through `css/style.css`
- Underscore prefix (`_`) indicates partial files that are imported, not used directly
- Use CSS custom properties for consistency across the site
- Keep HTML structure clean and semantic

---

**Last Updated:** May 3, 2026
