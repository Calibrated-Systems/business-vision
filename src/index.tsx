/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route } from '@solidjs/router';
import NichingStyles from './pages/niching-styles';
import AffinityTrap from './pages/affinity-trap';
import HolisticVision from './pages/holistic-vision';
import Assessment from './pages/assessment';
import ImplementationGuide from './pages/implementation-guide';

import './index.css';

import Layout from './components/layout';
import Home from './pages/home';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => (
  <Router base="/business-vision" root={Layout}>
      <Route path="/" component={Home} />
      <Route path="/niching-styles" component={NichingStyles} />
      <Route path="/affinity-trap" component={AffinityTrap} />
      <Route path="/holistic-vision" component={HolisticVision} />
      <Route path="/assessment" component={Assessment} />
      <Route path="/implementation-guide" component={ImplementationGuide} />
  </Router>
), root!);