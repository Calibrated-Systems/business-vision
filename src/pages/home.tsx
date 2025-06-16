import { A } from '@solidjs/router';
import styles from './home.module.css';

const Home = () => {
  return (
    <div class={styles.container}>
      <header class={styles.header}>
        <h1 class={styles.title}>Business Vision Framework</h1>
        <p class={styles.subtitle}>Clear positioning, compelling messaging, and systematic delivery</p>
      </header>
      
      <div class={styles.intro}>
        <p class={styles.introText}>
          Every day, entrepreneurs struggle with positioning that feels scattered, messaging that doesn't land, 
          and the nagging sense that they're not quite hitting product-market fit. They know they're good at 
          what they do and have a clear vision for their business, but translating that into compelling value 
          propositions feels impossibly complex.
        </p>
        <p class={styles.introText}>
          This framework provides clarity through two complementary approaches: first identifying which buying 
          experience you're creating, then ensuring you have complete vision to deliver it effectively.
        </p>
      </div>
      
      <div class={styles.frameworksContainer}>
        <div class={styles.frameworkCard}>
          <div class={styles.cardHeader}>
            <h2 class={styles.cardTitle} style={{"color": "#3498db"}}>Step 1: Niching Styles</h2>
            <p class={styles.cardSubtitle}>Identify Your Buying Experience</p>
          </div>
          <p class={styles.cardDescription}>
            Discover which of the three fundamental buying experiences you're creating and learn how 
            to position and message accordingly.
          </p>
          <div class={styles.cardLinks}>
            <A href="/niching-styles" class={styles.primaryLink}>
              Explore Niching Styles
            </A>
          </div>
        </div>

        <div class={styles.frameworkCard}>
          <div class={styles.cardHeader}>
            <h2 class={styles.cardTitle} style={{"color": "#e74c3c"}}>Step 2: Holistic Vision</h2>
            <p class={styles.cardSubtitle}>Complete Your Business Vision</p>
          </div>
          <p class={styles.cardDescription}>
            Develop both experiential and executional vision to create businesses that can both 
            inspire and deliver systematically.
          </p>
          <div class={styles.cardLinks}>
            <A href="/holistic-vision" class={styles.primaryLink}>
              Explore Holistic Vision
            </A>
          </div>
        </div>
      </div>

      <div class={styles.connectionSection}>
        <h2 class={styles.connectionTitle}>How These Frameworks Connect</h2>
        <div class={styles.connectionFlow}>
          <div class={styles.flowStep}>
            <div class={styles.flowNumber}>1</div>
            <div class={styles.flowContent}>
              <h3 class={styles.flowTitle}>Identify Your Game</h3>
              <p>Discover which buying experience you're creating and understand the unique rules of that game</p>
            </div>
          </div>
          <div class={styles.flowArrow}>→</div>
          <div class={styles.flowStep}>
            <div class={styles.flowNumber}>2</div>
            <div class={styles.flowContent}>
              <h3 class={styles.flowTitle}>Complete Your Vision</h3>
              <p>Develop both sides of business vision to play your chosen game effectively</p>
            </div>
          </div>
          <div class={styles.flowArrow}>→</div>
          <div class={styles.flowStep}>
            <div class={styles.flowNumber}>3</div>
            <div class={styles.flowContent}>
              <h3 class={styles.flowTitle}>Achieve Alignment</h3>
              <p>Create coherent businesses that both inspire and deliver consistently</p>
            </div>
          </div>
        </div>
      </div>

      <div class={styles.quickStart}>
        <h2 class={styles.quickStartTitle}>Not Sure Where to Start?</h2>
        <p class={styles.quickStartDescription}>
          Take our quick assessment to identify your current situation and get personalized next steps.
        </p>
        <div class={styles.quickStartButtons}>
          <A href="/assessment" class={styles.assessmentButton}>
            Take the Assessment
          </A>
          <A href="/niching-styles" class={styles.secondaryButton}>
            Start with Niching Styles
          </A>
        </div>
      </div>

      <div class={styles.additionalResources}>
        <h2 class={styles.resourcesTitle}>Additional Resources</h2>
        <div class={styles.resourceGrid}>
          <A href="/affinity-trap" class={styles.resourceCard}>
            <h3 class={styles.resourceCardTitle}>The Affinity Trap</h3>
            <p class={styles.resourceCardDescription}>
              Interactive exploration of why businesses get stuck seeking advice from those who think like them
            </p>
          </A>
          
          <A href="/holistic-vision" class={styles.resourceCard}>
            <h3 class={styles.resourceCardTitle}>Holistic Vision Framework</h3>
            <p class={styles.resourceCardDescription}>
              Develop both experiential and executional vision to create complete business clarity
            </p>
          </A>
          
          <A href="/implementation-guide" class={styles.resourceCard}>
            <h3 class={styles.resourceCardTitle}>Implementation Guide</h3>
            <p class={styles.resourceCardDescription}>
              Step-by-step guidance for applying these frameworks to your specific business context
            </p>
          </A>
        </div>
      </div>
    </div>
  );
};

export default Home;