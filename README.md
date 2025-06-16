# Creator Brand Journey Documentation Site

This project is a documentation site for the "Creator Brand Journey of Influence Lifecycles and model". It's built using SolidJS, TypeScript, and Vite.

## Overview

The site presents a comprehensive framework for mapping creator brand evolution, integrating four critical dimensions:
- The creator's personal development
- Brand recognition lifecycle
- Community transformation
- Organizational structure evolution

## Creating a Similar Site for Journeys of Influence

This guide will help you create a similar documentation site for other model.

## Project Setup

1. **Create a new SolidJS project with TypeScript using degit**

```bash
# Using npx
npx degit solidjs/templates/ts creator-brand-journey

# Using pnpx
pnpx degit solidjs/templates/ts creator-brand-journey

# Using yarn
yarn dlx degit solidjs/templates/ts creator-brand-journey
```

2. **Navigate to the project directory and install dependencies**

```bash
cd creator-brand-journey
npm install # or pnpm install or yarn install

# Install additional dependencies
npm install @solidjs/router @solidjs/meta solid-styled-components
```

3. **Set up GitHub Pages deployment (optional)**

```bash
npm install --save-dev gh-pages
```

Update the `package.json` file with the following scripts:

```json
"scripts": {
  "start": "vite",
  "dev": "vite",
  "build": "vite build && copy dist\\index.html dist\\404.html",
  "serve": "vite preview",
  "predeploy": "vite build && copy dist\\index.html dist\\404.html",
  "deploy": "gh-pages -d dist",
  "publish": "gh-pages -d dist"
}
```

## Project Structure

Create the following directory structure:

```
creator-brand-journey/
├── src/
│   ├── assets/
│   │   └── favicon.ico
│   ├── components/
│   │   ├── layout.tsx
│   │   ├── layout.module.css
│   │   ├── navigation.tsx
│   │   ├── navigation.module.css
│   │   └── page-title.tsx
│   ├── pages/
│   │   ├── home.tsx
│   │   ├── home.module.css
│   │   └── [other pages].tsx
│   ├── styles/
│   │   ├── global.css
│   │   └── theme.ts
│   ├── index.css
│   └── index.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Key Components Implementation

### 1. Main Entry Point (src/index.tsx)

```tsx
/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from '@solidjs/router';

import './index.css';

import Layout from './components/layout';
import Home from './pages/home';
import CreatorJourney from './pages/creator-journey';
import AudienceEngagement from './pages/audience-engagement';
import CreativeEvolution from './pages/creative-evolution';
import BrandDevelopment from './pages/brand-development';
import CreativeOutcomes from './pages/creative-outcomes';
import TransformationPoints from './pages/transformation-points';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (
  <Router base="/creator-brand" root={Layout}>
      <Route path="/" component={Home} />
      <Route path="/creator-journey" component={CreatorJourney} />
      <Route path="/audience-engagement" component={AudienceEngagement} />
      <Route path="/creative-evolution" component={CreativeEvolution} />
      <Route path="/brand-development" component={BrandDevelopment} />
      <Route path="/creative-outcomes" component={CreativeOutcomes} />
      <Route path="/transformation-points" component={TransformationPoints} />
  </Router>
), root!);
```

### 2. Layout Component (src/components/layout.tsx)

```tsx
import { createSignal, JSX } from 'solid-js';
import { MetaProvider, Title } from '@solidjs/meta';

import Navigation from './navigation';
import styles from './layout.module.css';

interface LayoutProps {
  children?: JSX.Element;
}

const Layout = (props: LayoutProps) => {
  const [isMenuExpanded, setIsMenuExpanded] = createSignal(true);

  const toggleMenu = () => {
    setIsMenuExpanded(!isMenuExpanded());
  };

  return (
    <MetaProvider>
      <Title>Creator Brand - Artistic Journey</Title>
      <div class={styles.layoutContainer}>
        <div class={styles.mainWrapper}>
          {/* Left Navigation */}
          <nav class={`${styles.sideNav} ${isMenuExpanded() ? styles.expanded : styles.collapsed}`}>
            <div class={styles.navHeader}>
              <button class={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle menu">
                <div class={styles.hamburgerIcon}>
                  <span class={styles.hamburgerBar}></span>
                  <span class={styles.hamburgerBar}></span>
                  <span class={styles.hamburgerBar}></span>
                </div>
              </button>
            </div>
            <div class={styles.navContent}>
              <Navigation isExpanded={isMenuExpanded()} />
            </div>
          </nav>

          <div class={styles.mainContainer}>
            {/* Header */}
            <header class={styles.header}>
              <h1 class={styles.headerTitle}>Creator Brand - Artistic Journey</h1>
            </header>

            {/* Main Content */}
            <main class={styles.content}>
              {props.children}
            </main>
          </div>
        </div>

        {/* Footer */}
        <footer class={styles.footer}>
          <p>&copy; {new Date().getFullYear()} Your Organization. All rights reserved.</p>
        </footer>
      </div>
    </MetaProvider>
  );
};

export default Layout;
```

### 3. Navigation Component (src/components/navigation.tsx)

```tsx
import { A } from '@solidjs/router';
import { Show } from 'solid-js';
import styles from './navigation.module.css';

interface NavigationProps {
  isExpanded: boolean;
}

const Navigation = (props: NavigationProps) => {
  return (
    <nav class={`${styles.nav} ${props.isExpanded ? styles.expanded : styles.collapsed}`}>
      <ul class={styles.navMenu}>
        <li class={styles.navItem}>
          <A href="/" class={styles.navLink} activeClass={styles.active} end={true}>
            <span class={styles.icon}>🏠</span>
            <Show when={props.isExpanded}>
              <span class={styles.linkText}>Home</span>
            </Show>
          </A>
        </li>
        <li class={styles.navItem}>
          <A href="/creator-journey" class={styles.navLink} activeClass={styles.active}>
            <span class={styles.icon}>🎨</span>
            <Show when={props.isExpanded}>
              <span class={styles.linkText}>Creator Journey</span>
            </Show>
          </A>
        </li>
        <li class={styles.navItem}>
          <A href="/audience-engagement" class={styles.navLink} activeClass={styles.active}>
            <span class={styles.icon}>👥</span>
            <Show when={props.isExpanded}>
              <span class={styles.linkText}>Audience Engagement</span>
            </Show>
          </A>
        </li>
        <li class={styles.navItem}>
          <A href="/creative-evolution" class={styles.navLink} activeClass={styles.active}>
            <span class={styles.icon}>🚀</span>
            <Show when={props.isExpanded}>
              <span class={styles.linkText}>Creative Evolution</span>
            </Show>
          </A>
        </li>
        <li class={styles.navItem}>
          <A href="/brand-development" class={styles.navLink} activeClass={styles.active}>
            <span class={styles.icon}>✨</span>
            <Show when={props.isExpanded}>
              <span class={styles.linkText}>Brand Development</span>
            </Show>
          </A>
        </li>
        <li class={styles.navItem}>
          <A href="/creative-outcomes" class={styles.navLink} activeClass={styles.active}>
            <span class={styles.icon}>📊</span>
            <Show when={props.isExpanded}>
              <span class={styles.linkText}>Creative Outcomes</span>
            </Show>
          </A>
        </li>
        <li class={styles.navItem}>
          <A href="/transformation-points" class={styles.navLink} activeClass={styles.active}>
            <span class={styles.icon}>🔄</span>
            <Show when={props.isExpanded}>
              <span class={styles.linkText}>Transformation Points</span>
            </Show>
          </A>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
```

### 4. Home Page (src/pages/home.tsx)

```tsx
import { A } from '@solidjs/router';
import styles from './home.module.css';

const Home = () => {
  return (
    <div class={styles.container}>
      <h1 class={styles.title}>Creator Brand - Artistic Journey</h1>
      <p class={styles.subtitle}>A comprehensive framework for mapping the artistic creator's evolution</p>
      
      <p class={styles.intro}>
        This framework maps the complete evolution of artistic creators from initial creative expression to lasting cultural impact.
        It integrates four critical dimensions: the creator's artistic development, brand recognition lifecycle,
        audience engagement, and creative business evolution.
      </p>
      
      <div class={styles.cardContainer}>
        <A href="/creator-journey" class={styles.card}>
          <h2 class={styles.cardTitle} style={{"color": "#4F46E5"}}>Creator Journey</h2>
          <p>
            An experiential framework mapping the journey from creative expression to cultural integration, focused on the lived experience of embodying artistic values.
          </p>
        </A>
        <A href="/audience-engagement" class={styles.card}>
          <h2 class={styles.cardTitle} style={{"color": "#d35400"}}>Audience Engagement</h2>
          <p>
            How audiences evolve from casual observers to passionate advocates and collaborators across five phases of engagement.
          </p>
        </A>
        
        <A href="/creative-evolution" class={styles.card}>
          <h2 class={styles.cardTitle} style={{"color": "#e67e22"}}>Creative Evolution</h2>
          <p>
            The personal evolution of a creator through ten distinct stages from Explorer to Cultural Icon.
          </p>
        </A>
        
        <A href="/brand-development" class={styles.card}>
          <h2 class={styles.cardTitle} style={{"color": "#d35400"}}>Brand Development</h2>
          <p>
            How market perception progresses from unknown to cultural phenomenon with specific signals at each level.
          </p>
        </A>
        
        <A href="/creative-outcomes" class={styles.card}>
          <h2 class={styles.cardTitle} style={{"color": "#3C87D7"}}>Creative Outcomes</h2>
          <p>
            The specific traction-based outcomes that signal progression through each phase of the Creator Brand Journey.
          </p>
        </A>
        
        <A href="/transformation-points" class={styles.card}>
          <h2 class={styles.cardTitle} style={{"color": "#673AB7"}}>Transformation Points</h2>
          <p>
            Critical thresholds that fundamentally alter how creators operate, scale, and create impact.
          </p>
        </A>
      </div>
    </div>
  );
};

export default Home;
```

### 5. Content Page Template (e.g., src/pages/creator-journey.tsx)

```tsx
import { createSignal, For, Show } from 'solid-js';
import styles from './creator-journey.module.css';
import PageTitle from '../components/page-title';

const CreatorJourney = () => {
  const [selectedPhase, setSelectedPhase] = createSignal<number | null>(null);
  const [showPersona, setShowPersona] = createSignal<boolean>(false);

  // Define the phases with their data
  const phases = [
    {
      id: 1,
      name: "CREATIVE EXPRESSION",
      subtitle: "The experiential emergence of distinctive artistic voice",
      color: "#FFF2CC",
      darkColor: "#F1C232",
      textColor: "#5B4421",
      iconName: "🎨",
      persona: "Maya the Emerging Artist",
      livedExperience: [
        "Initial creative expression that feels authentic and distinctive",
        "Intuitive exploration of artistic mediums and styles",
        "Moments of creative flow that feel personally significant",
        "Tentative sharing of work in safe environments"
      ],
      valueExpression: [
        "Authenticity in artistic expression",
        "Courage in exploring uncharted creative territory",
        "Curiosity that drives artistic experimentation"
      ],
      communityExperience: [
        "Finding kindred creators with similar aesthetic sensibilities",
        "Early validation from others who appreciate your unique perspective",
        "Shared excitement about creative possibilities"
      ],
      threshold: "From private creation to public sharing",
      personaStory: "Maya spent years working in commercial design, increasingly frustrated with how traditional approaches limited her creative expression. While everyone focused on market trends, she kept exploring more personal and distinctive artistic directions that resonated with her authentic voice.\n\nCurrently, Maya finds herself creating work in her private studio that doesn't fit conventional commercial expectations. She experiences moments of excitement when her authentic expression resonates with early viewers, followed by uncertainty when considering how to share this work more broadly. She's started a small online portfolio where she tentatively shares some of her creations, finding unexpected resonance with viewers from diverse backgrounds.\n\nMaya embodies authenticity by acknowledging when commercial frameworks don't match her creative vision, rather than forcing her work to fit existing expectations. Her curiosity drives her to experiment with unconventional techniques and materials, even when they don't immediately apply to her paid work.\n\nHer community is still nascent—a few like-minded creators who comment on her portfolio, a mentor who encourages her \"unique perspective,\" and a small online group where she shares her creative process. These connections provide crucial validation that her distinctive approach has value.\n\nMaya struggles with impostor syndrome, questioning whether her creative expression is truly original or valuable. She worries about professional credibility if she pursues her authentic voice too publicly. Yet she feels increasingly compelled to develop her distinctive style further.\n\nShe's beginning to experiment with different platforms and contexts to share her work more broadly, collecting feedback and refining her presentation—the first steps toward crossing the threshold to Artistic Articulation."
    },
    // Add more phases here...
  ];

  // Component implementation similar to embodied-influence.tsx
  // ...

  return (
    <>
      <PageTitle>Creator Journey</PageTitle>
      <div class={styles.container}>
        <header class={styles.header}>
          <h1 class={styles.title}>The Creator Journey</h1>
          <p class={styles.subtitle}>
            An experiential framework mapping the journey from initial creative expression to cultural integration,
            focused on the lived experience of embodying and expressing authentic artistic values.
          </p>
        </header>

        {/* Implement journey map, phase details, etc. similar to embodied-influence.tsx */}
        {/* ... */}
      </div>
    </>
  );
};

export default CreatorJourney;
```

### 6. PageTitle Component (src/components/page-title.tsx)

```tsx
import { Title } from "@solidjs/meta";
import { createMemo } from "solid-js";

export default function PageTitle(props: any) {
  const titleText = createMemo(() => `${props.children} | Creator Brand`);

  return <Title>{titleText()}</Title>;
}
```

## Content Structure Guidelines

When creating your Creator Brand documentation site, follow these guidelines for structuring your content:

1. **Define Your Framework Dimensions**
   - Identify 4-6 key dimensions of the Creator Brand model
   - Create a dedicated page for each dimension

2. **For Each Dimension Page**:
   - Create a clear visual representation (timeline, journey map, etc.)
   - Define phases/stages with consistent attributes:
     - Name and subtitle
     - Color scheme
     - Icon or visual representation
     - Description of lived experience
     - Value expressions
     - Community experience
     - Transition thresholds
     - Persona stories (optional)

3. **Home Page**:
   - Provide a concise overview of the entire framework
   - Create cards linking to each dimension page
   - Use consistent visual language across all cards

4. **Implementation Section**:
   - Add a practical implementation section to each page
   - Include tools, frameworks, or resources for applying the concepts

## Styling Guidelines

1. **Create a Consistent Color Scheme**:
   - Define a primary color for your brand
   - Create a color palette for different phases/stages
   - Ensure sufficient contrast for readability

2. **Responsive Design**:
   - Implement responsive layouts for all pages
   - Ensure the navigation works well on mobile devices
   - Adapt visualizations for smaller screens

3. **Visual Hierarchy**:
   - Use consistent typography for headings and body text
   - Maintain consistent spacing throughout the site
   - Use visual cues (icons, colors) to guide users through the content

## Development Workflow

1. **Local Development**:
   ```bash
   npm run dev
   ```
   This will start a development server at http://localhost:3000

2. **Building for Production**:
   ```bash
   npm run build
   ```
   This will create a production build in the `dist` folder

3. **Deploying to GitHub Pages** (if configured):
   ```bash
   npm run deploy
   ```
   This will deploy your site to GitHub Pages

## Customization Tips

1. **Content Adaptation**:
   - Replace the Thought Leader Journey content with Creator Brand content
   - Adapt the phases, stages, and terminology to fit the artistic creator context
   - Create new persona stories that reflect the creator's journey

2. **Visual Identity**:
   - Update colors, icons, and visual elements to reflect the Creator Brand identity
   - Consider using more artistic or creative visual elements

3. **Additional Features**:
   - Add case studies of successful creator brands
   - Include interactive tools for self-assessment
   - Provide downloadable resources or templates

## Conclusion

By following this guide, you can create a comprehensive documentation site for the Creator Brand (Artistic Creator) model that parallels the structure and functionality of the Thought Leader Journey site. The modular approach allows for easy customization and extension as your framework evolves.
