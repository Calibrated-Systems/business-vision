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
          <A href="/niching-styles" class={styles.navLink} activeClass={styles.active}>
            <span class={styles.icon}>🎯</span>
            <Show when={props.isExpanded}>
              <span class={styles.linkText}>Niching Styles</span>
            </Show>
          </A>
        </li>
        <li class={styles.navItem}>
          <A href="/holistic-vision" class={styles.navLink} activeClass={styles.active}>
            <span class={styles.icon}>👁️</span>
            <Show when={props.isExpanded}>
              <span class={styles.linkText}>Holistic Vision</span>
            </Show>
          </A>
        </li>
        <li class={styles.navItem}>
          <A href="/affinity-trap" class={styles.navLink} activeClass={styles.active}>
            <span class={styles.icon}>⚡</span>
            <Show when={props.isExpanded}>
              <span class={styles.linkText}>Affinity Trap</span>
            </Show>
          </A>
        </li>
        <li class={styles.navItem}>
          <A href="/assessment" class={styles.navLink} activeClass={styles.active}>
            <span class={styles.icon}>📝</span>
            <Show when={props.isExpanded}>
              <span class={styles.linkText}>Assessment</span>
            </Show>
          </A>
        </li>
        <li class={styles.navItem}>
          <A href="/implementation-guide" class={styles.navLink} activeClass={styles.active}>
            <span class={styles.icon}>🛠️</span>
            <Show when={props.isExpanded}>
              <span class={styles.linkText}>Implementation</span>
            </Show>
          </A>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;