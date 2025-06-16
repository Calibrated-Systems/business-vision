import { createSignal, For, Show } from 'solid-js';
import { A } from '@solidjs/router';
import styles from './holistic-vision.module.css';

const HolisticVision = () => {
  const [selectedVision, setSelectedVision] = createSignal<string | null>(null);
  const [selectedAffinity, setSelectedAffinity] = createSignal<string | null>(null);
  const [showAffinityTrap, setShowAffinityTrap] = createSignal<boolean>(false);

  const visionTypes = [
    {
      id: "experiential",
      title: "Experiential Vision",
      subtitle: "Winning Hearts Through Aspirational Clarity",
      color: "#e74c3c",
      lightColor: "#ffeaea",
      icon: "❤️",
      description: "The ability to perceive and articulate transformation and outcomes, what they look like and why they matter. This form of vision has traditionally dominated our understanding of business vision.",
      focusAreas: [
        "Connection & Cohesion: Creates emotional alignment toward possibilities",
        "Purpose & Meaning: Builds resonance through shared aspiration",
        "Experience & Feeling: Paints vivid pictures of desired states",
        "Hearts & Inspiration: Generates emotional buy-in through compelling narratives"
      ],
      language: "Results & outcomes, transformation & impact, qualities & experiences, stories & metaphors",
      questions: [
        "What will this create?",
        "Why does it matter?",
        "How will it feel when achieved?",
        "What's the meaningful narrative?"
      ],
      buyingExperiences: {
        outsourcedSpecialist: "Clearly articulate what technical excellence creates and why it matters to sophisticated buyers",
        outcomePartner: "Paint compelling pictures of the outcomes clients will achieve and why those outcomes matter",
        identityEnablement: "Create inspiring frameworks for value expression and authentic becoming"
      },
      developmentNeeds: [
        "Clarify the purpose, meaning, and transformative impact of your work",
        "Articulate what success looks like in experiential and outcome-based terms",
        "Develop messaging that connects emotionally with your intended audience",
        "Paint compelling pictures of the transformation you enable"
      ]
    },
    {
      id: "executional",
      title: "Executional Vision",
      subtitle: "Winning Minds Through Contextual Structure",
      color: "#3498db",
      lightColor: "#eaf4fd",
      icon: "🧠",
      description: "The ability to perceive and design how the vision serves different people and can be manifested across different contexts. This form of vision is essential for translating aspiration into systematic reality.",
      focusAreas: [
        "Context & Adaptation: Builds confidence through systematic pathways",
        "Delivery & Direction: Creates logical coherence across contexts",
        "Conceptual Landscape: Maps the terrain between current and future states",
        "Minds & Implementation: Generates logical buy-in through proven methods"
      ],
      language: "Systems & structure, processes & frameworks, patterns & architecture, models & methods",
      questions: [
        "How will this actually work?",
        "For whom specifically?",
        "What must be understood?",
        "How will we get there from here?"
      ],
      buyingExperiences: {
        outsourcedSpecialist: "Design systems that consistently deliver that excellence across different technical requirements",
        outcomePartner: "Build adaptive systems that can translate diverse client contexts into effective solutions",
        identityEnablement: "Design enabling ecosystems that support diverse paths of embodiment"
      },
      developmentNeeds: [
        "Map how your transformation unfolds across different contexts",
        "Design systems that can adapt to various stakeholder needs",
        "Build frameworks that maintain coherence while allowing flexibility",
        "Create pathways that systematically deliver what you envision"
      ]
    }
  ];

  const affinityScenarios = [
    {
      type: "same",
      title: "Same Affinity Advisors",
      description: "Validate your approach and help you go deeper into what you're already good at, but they can't offer the complementary perspective that would complete your vision.",
      icon: "🔄",
      color: "#f39c12"
    },
    {
      type: "opposite-no-dualism",
      title: "Opposite Affinity (No Dualism Understanding)",
      description: "Might dismiss your natural affinity as wrong or outdated rather than seeing it as one half of a complete picture.",
      examples: [
        "Executional thinker telling experiential entrepreneur to 'stop being so fluffy'",
        "Experiential thinker telling executional entrepreneur to 'stop splitting hairs or stop getting caught in semantics'"
      ],
      icon: "❌",
      color: "#e74c3c"
    },
    {
      type: "wrong-context",
      title: "Wrong Context Advisors",
      description: "Might share your affinity or even understand dual-nature of perception, but they're operating from a completely different buying experience framework.",
      icon: "🎯",
      color: "#9b59b6"
    },
    {
      type: "ideal",
      title: "Ideal Collaborator",
      description: "Understands there are two valid forms of perception, values and appreciates your natural affinity, and can articulate your vision through their complementary lens - all within the context of the same buying experience you're creating.",
      icon: "✨",
      color: "#27ae60"
    }
  ];

  const integrationPattern = [
    {
      step: 1,
      title: "Experiential Vision",
      description: "Identifies and articulates the 'worthy ideal' - winning hearts by imagining compelling experiences and meaningful outcomes",
      color: "#e74c3c"
    },
    {
      step: 2,
      title: "Executional Vision", 
      description: "Designs the systems for reliable manifestation - winning minds by creating intelligent, context-adaptive pathways to deliver that transformation",
      color: "#3498db"
    },
    {
      step: 3,
      title: "Complete Vision",
      description: "Ensures your systems and structures genuinely serve your purpose and outcomes, creating a foundation for sustainable success",
      color: "#27ae60"
    }
  ];

  return (
    <div class={styles.container}>
      <header class={styles.header}>
        <A href="/" class={styles.backLink}>← Back to Framework Overview</A>
        <h1 class={styles.title}>Holistic Vision</h1>
        <p class={styles.subtitle}>The Two Sides of Business Vision</p>
      </header>

      <div class={styles.introduction}>
        <p class={styles.introText}>
          Now that you've identified which buying experience you're creating, the next challenge is 
          ensuring you can correctly position and message your offering, and actually deliver it. 
          This requires developing complete vision - and most businesses unknowingly operate with only half the picture.
        </p>
        <p class={styles.introText}>
          The concept of "vision" has traditionally been applied to only one dimension of business success. 
          In reality, holistic vision encompasses two complementary sides that, when integrated, create 
          the foundation for delivering exceptional buying experiences.
        </p>
      </div>

      <div class={styles.visionTypesContainer}>
        <h2 class={styles.sectionTitle}>The Two Types of Business Vision</h2>
        
        <div class={styles.visionGrid}>
          <For each={visionTypes}>
            {(vision) => (
              <div 
                class={`${styles.visionCard} ${selectedVision() === vision.id ? styles.selectedCard : ''}`}
                style={{ "border-color": vision.color }}
                onClick={() => setSelectedVision(selectedVision() === vision.id ? null : vision.id)}
              >
                <div class={styles.cardHeader} style={{ "background-color": vision.lightColor }}>
                  <div class={styles.visionIcon}>{vision.icon}</div>
                  <h3 class={styles.visionTitle} style={{ "color": vision.color }}>
                    {vision.title}
                  </h3>
                  <p class={styles.visionSubtitle}>{vision.subtitle}</p>
                </div>
                
                <div class={styles.cardContent}>
                  <p class={styles.visionDescription}>{vision.description}</p>
                  
                  <Show when={selectedVision() === vision.id}>
                    <div class={styles.expandedContent}>
                      <div class={styles.detailSection}>
                        <h4 class={styles.detailTitle}>Focus Areas:</h4>
                        <ul class={styles.detailList}>
                          <For each={vision.focusAreas}>
                            {(area) => <li>{area}</li>}
                          </For>
                        </ul>
                      </div>

                      <div class={styles.detailSection}>
                        <h4 class={styles.detailTitle}>Language:</h4>
                        <p class={styles.languageText}>{vision.language}</p>
                      </div>

                      <div class={styles.detailSection}>
                        <h4 class={styles.detailTitle}>Questions Answered:</h4>
                        <ul class={styles.detailList}>
                          <For each={vision.questions}>
                            {(question) => <li>{question}</li>}
                          </For>
                        </ul>
                      </div>

                      <div class={styles.detailSection}>
                        <h4 class={styles.detailTitle}>Application Across Buying Experiences:</h4>
                        <div class={styles.buyingExperiencesList}>
                          <div class={styles.experienceItem}>
                            <span class={styles.experienceLabel}>Outsourced-Specialist:</span>
                            <span class={styles.experienceText}>{vision.buyingExperiences.outsourcedSpecialist}</span>
                          </div>
                          <div class={styles.experienceItem}>
                            <span class={styles.experienceLabel}>Outcome-Partner:</span>
                            <span class={styles.experienceText}>{vision.buyingExperiences.outcomePartner}</span>
                          </div>
                          <div class={styles.experienceItem}>
                            <span class={styles.experienceLabel}>Identity-Enablement:</span>
                            <span class={styles.experienceText}>{vision.buyingExperiences.identityEnablement}</span>
                          </div>
                        </div>
                      </div>

                      <div class={styles.detailSection}>
                        <h4 class={styles.detailTitle}>Development Focus:</h4>
                        <ul class={styles.detailList}>
                          <For each={vision.developmentNeeds}>
                            {(need) => <li>{need}</li>}
                          </For>
                        </ul>
                      </div>
                    </div>
                  </Show>
                </div>
              </div>
            )}
          </For>
        </div>

        <div class={styles.cardActions}>
          <p class={styles.actionHint}>Click on any card above to explore details</p>
        </div>
      </div>

      <div class={styles.whyBothMatter}>
        <h2 class={styles.sectionTitle}>Why Both Matter</h2>
        <div class={styles.matterGrid}>
          <div class={styles.matterCard} style={{ "border-color": "#e74c3c" }}>
            <h3 style={{ "color": "#e74c3c" }}>Without Experiential Vision</h3>
            <p>You get structure without soul - technically sound systems that fail to inspire commitment or create meaningful connection. Your positioning feels dry, your messaging lacks resonance, and customers struggle to understand why they should care.</p>
          </div>
          <div class={styles.matterCard} style={{ "border-color": "#3498db" }}>
            <h3 style={{ "color": "#3498db" }}>Without Executional Vision</h3>
            <p>You get inspiration without implementation - compelling visions that remain perpetually just out of reach. Your positioning sounds great but customers can't figure out how it actually works for their specific situation.</p>
          </div>
        </div>
      </div>

      <div class={styles.affinityTrapSection}>
        <h2 class={styles.sectionTitle}>The Affinity Trap</h2>
        <div class={styles.trapIntro}>
          <p class={styles.trapText}>
            Most business owners have a natural affinity for one type of vision or the other. But the real trap isn't just gravitating toward what feels familiar - it's assuming that everyone perceives reality the same way we do.
          </p>
          <button 
            class={styles.trapButton}
            onClick={() => setShowAffinityTrap(!showAffinityTrap())}
          >
            {showAffinityTrap() ? "Hide" : "Explore"} The Affinity Trap
          </button>
        </div>

        <Show when={showAffinityTrap()}>
          <div class={styles.affinityContent}>
            <p class={styles.affinityIntro}>
              The trap manifests in several ways when seeking advice or collaboration:
            </p>
            
            <div class={styles.scenarioGrid}>
              <For each={affinityScenarios}>
                {(scenario) => (
                  <div 
                    class={styles.scenarioCard}
                    style={{ "border-color": scenario.color }}
                  >
                    <div class={styles.scenarioHeader}>
                      <div class={styles.scenarioIcon}>{scenario.icon}</div>
                      <h4 class={styles.scenarioTitle} style={{ "color": scenario.color }}>
                        {scenario.title}
                      </h4>
                    </div>
                    <p class={styles.scenarioDescription}>{scenario.description}</p>
                    <Show when={scenario.examples}>
                      <div class={styles.scenarioExamples}>
                        <h5>Examples:</h5>
                        <ul>
                          <For each={scenario.examples}>
                            {(example) => <li>{example}</li>}
                          </For>
                        </ul>
                      </div>
                    </Show>
                  </div>
                )}
              </For>
            </div>

            <div class={styles.trapSolution}>
              <h3 class={styles.solutionTitle}>Breaking Free from the Trap</h3>
              <p class={styles.solutionText}>
                What you actually need is someone who understands there are two valid forms of perception, 
                values and appreciates your natural affinity, and can articulate your vision through their 
                complementary lens - all within the context of the same buying experience you're creating.
              </p>
              
              <div class={styles.partnershipTypes}>
                <div class={styles.partnershipCard} style={{ "border-color": "#e74c3c" }}>
                  <h4>Experiential-leaning entrepreneurs</h4>
                  <p>Need executional partners who can see the systematic beauty in their transformational vision and help design reliable pathways to deliver it.</p>
                </div>
                <div class={styles.partnershipCard} style={{ "border-color": "#3498db" }}>
                  <h4>Executional-leaning entrepreneurs</h4>
                  <p>Need experiential partners who can see the meaningful transformation their systems enable and help articulate why it matters to people.</p>
                </div>
              </div>
            </div>
          </div>
        </Show>
      </div>

      <div class={styles.integrationSection}>
        <h2 class={styles.sectionTitle}>Integration: Holistic Business Vision</h2>
        <p class={styles.integrationIntro}>
          When both forms of vision are integrated, you create businesses that are both deeply meaningful 
          and systematically deliverable. This integration follows a natural pattern:
        </p>
        
        <div class={styles.integrationFlow}>
          <For each={integrationPattern}>
            {(step, index) => (
              <>
                <div class={styles.integrationStep}>
                  <div 
                    class={styles.stepNumber}
                    style={{ "background-color": step.color }}
                  >
                    {step.step}
                  </div>
                  <div class={styles.stepContent}>
                    <h4 class={styles.stepTitle} style={{ "color": step.color }}>
                      {step.title}
                    </h4>
                    <p class={styles.stepDescription}>{step.description}</p>
                  </div>
                </div>
                <Show when={index() < integrationPattern.length - 1}>
                  <div class={styles.flowArrow}>↓</div>
                </Show>
              </>
            )}
          </For>
        </div>
      </div>

      <div class={styles.practicalImpact}>
        <h2 class={styles.sectionTitle}>The Practical Impact</h2>
        <p class={styles.impactIntro}>Holistic vision transforms how you operate:</p>
        
        <div class={styles.impactGrid}>
          <div class={styles.impactCard}>
            <h4 class={styles.impactTitle}>Positioning becomes clear</h4>
            <p>Because you understand both what you create and how you create it across different contexts.</p>
          </div>
          <div class={styles.impactCard}>
            <h4 class={styles.impactTitle}>Messaging becomes compelling</h4>
            <p>Because you can speak to both the emotional significance and the practical pathway.</p>
          </div>
          <div class={styles.impactCard}>
            <h4 class={styles.impactTitle}>Delivery becomes systematic</h4>
            <p>Because you've designed how the vision unfolds across different client situations, scenarios & circumstances.</p>
          </div>
          <div class={styles.impactCard}>
            <h4 class={styles.impactTitle}>Growth becomes sustainable</h4>
            <p>Because you're creating complete experiences that consistently transform how your customers see their possibilities.</p>
          </div>
        </div>
      </div>

      <div class={styles.conclusion}>
        <h2 class={styles.sectionTitle}>Becoming Truly Visionary</h2>
        <p class={styles.conclusionText}>
          Whether you naturally lean toward experiential or executional vision, fostering both sides 
          within your business creates the foundation for becoming truly visionary - able to both see 
          worthy ideals and design the pathways to manifest them systematically.
        </p>
        <div class={styles.conclusionActions}>
          <A href="/affinity-trap" class={styles.interactiveButton}>
            Take the Interactive Affinity Assessment
          </A>
          <A href="/implementation-guide" class={styles.guideButton}>
            Implementation Guide
          </A>
        </div>
      </div>
    </div>
  );
};

export default HolisticVision;