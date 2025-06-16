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
      <Title>Business Vision</Title>
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
              <h1 class={styles.headerTitle}>Business Vision</h1>
            </header>

            {/* Main Content */}
            <main class={styles.content}>
              {props.children}
            </main>
          </div>
        </div>

        {/* Footer */}
        <footer class={styles.footer}>
          <p>&copy; {new Date().getFullYear()} Calibrated Systems. All rights reserved.</p>
        </footer>
      </div>
    </MetaProvider>
  );
};

export default Layout;