import { createSignal, For, Show } from 'solid-js';
import { A } from '@solidjs/router';
import styles from './niching-styles.module.css';

const NichingStyles = () => {
  const [selectedExperience, setSelectedExperience] = createSignal<number | null>(null);
  const [showExamples, setShowExamples] = createSignal<boolean>(false);

  const buyingExperiences = [
    {
      id: 1,
      title: "Outsourced-Specialist Experience",
      subtitle: '"I know exactly what I need - do you have the expertise to deliver it?"',
      color: "#3498db",
      lightColor: "#e3f2fd",
      icon: "🔧",
      description: "Your customer arrives as an informed buyer. They can articulate their requirements in technical terms, evaluate your credentials, and compare your methodology against competitors. They're shopping for competency, reliability, and value within clearly defined parameters.",
      expectations: [
        "Precise technical communication",
        "Clear demonstration of expertise",
        "Transparent processes and timelines",
        "Competitive pricing for defined scope",
        "Professional but bounded relationship"
      ],
      evaluation: [
        "Can you deliver what I've specified?",
        "Do your credentials match the complexity?",
        "Are your processes reliable and proven?",
        "Is your pricing competitive for this scope?"
      ],
      conversation: "Technical, efficient, focused on specifications and delivery. They want proof of capability, not education about their needs.",
      responsibility: "Technical excellence and reliable delivery within defined scope. Clients take responsibility for knowing what they need and how it fits their bigger picture.",
      examples: [
        "Software developer hired to integrate Stripe API",
        "Accountant preparing tax returns for established business",
        "Graphic designer creating logo variations in brand guidelines",
        "Electrician installing specified commercial lighting system"
      ]
    },
    {
      id: 2,
      title: "Outcome-Partner Experience",
      subtitle: '"I know what I want to achieve - can you help me figure out how to get there?"',
      color: "#e67e22",
      lightColor: "#fff3e0",
      icon: "🤝",
      description: "Your customer knows their desired end state but can't translate that vision into technical requirements. They need you to bridge the gap between their world and the solution world. They're evaluating your ability to understand their context and orchestrate the right approach.",
      expectations: [
        "Consultative conversation about their situation",
        "Translation between their language and technical solutions",
        "Collaborative planning and adaptation",
        "Accountability for results, not just delivery",
        "Partnership through the journey"
      ],
      evaluation: [
        "Do you understand my world and challenges?",
        "Can you see patterns I might miss?",
        "Will you take responsibility for outcomes?",
        "Can I trust you to guide this process?"
      ],
      conversation: "Exploratory, contextual, focused on understanding their situation and discussing outcomes. They want to feel heard and see your strategic thinking.",
      responsibility: "Understanding client context, translating needs into solutions, and ensuring those solutions work in their world. You share responsibility for success.",
      examples: [
        "Business consultant helping company improve team collaboration",
        "Wedding planner creating memorable celebration experience",
        "Marketing strategist developing brand positioning for startup",
        "Interior designer transforming home to reflect family lifestyle"
      ]
    },
    {
      id: 3,
      title: "Identity-Enablement Experience", 
      subtitle: '"I want to become someone who embodies these values - is this the path?"',
      color: "#9b59b6",
      lightColor: "#f3e5f5",
      icon: "✨",
      description: "Your customer is drawn to who they could become through working with you. They're not buying a solution to a problem - they're buying access to a new identity and way of being. They're evaluating alignment with your philosophy and the transformation they see in your community.",
      expectations: [
        "Inspiration and vision for who they could become",
        "Frameworks for living and expressing values",
        "Community of like-minded people on similar journeys",
        "Tools and support for ongoing embodiment",
        "Partnership in authentic self-expression"
      ],
      evaluation: [
        "Do your values align with mine?",
        "Can I see myself in your community?",
        "Will this help me become who I want to be?",
        "Does this feel authentic and sustainable?"
      ],
      conversation: "Values-driven, aspirational, focused on identity and community. They want to feel inspired and see proof of transformation in others.",
      responsibility: "Creating environments where values can be lived, providing frameworks for embodiment, and supporting ongoing community development. You partner in their becoming.",
      examples: [
        "Life coach helping clients embody authentic leadership",
        "Fitness brand creating community around healthy lifestyle",
        "Creative methodology teaching sustainable design thinking",
        "Business philosophy enabling conscious entrepreneurship"
      ]
    }
  ];

  const diagnosticQuestions = [
    {
      question: "What level of expertise do your clients need before working with you?",
      outsourcedSpecialist: "High - they must understand their technical requirements",
      outcomePartner: "Medium - they need to know their desired outcomes", 
      identityEnablement: "Low - they just need to resonate with the vision"
    },
    {
      question: "What language do you use in your marketing?",
      outsourcedSpecialist: "Technical specifications, methodologies, credentials",
      outcomePartner: "Outcomes, results, transformation of situations",
      identityEnablement: "Values, identity, community, way of being"
    },
    {
      question: "How do clients typically find you?",
      outsourcedSpecialist: "Searching for specific solutions or skill sets",
      outcomePartner: "Referrals based on similar challenges solved",
      identityEnablement: "Resonance with content, values, or community"
    },
    {
      question: "What's your primary competitive advantage?",
      outsourcedSpecialist: "Superior technical execution and reliability",
      outcomePartner: "Deep understanding of client context and outcomes",
      identityEnablement: "Unique philosophy and community transformation"
    }
  ];

  return (
    <div class={styles.container}>
      <header class={styles.header}>
        <A href="/" class={styles.backLink}>← Back to Framework Overview</A>
        <h1 class={styles.title}>Niching Styles</h1>
        <p class={styles.subtitle}>Understanding the Three Buying Experiences</p>
      </header>

      <div class={styles.introduction}>
        <p class={styles.introText}>
          Most businesses haven't identified which buying experience they're creating, so they either try to appeal to all three simultaneously or implement strategies designed for a completely different type of customer interaction.
        </p>
        <p class={styles.introText}>
          Understanding which experience you're creating helps you set appropriate expectations, build suitable systems, create aligned communication, and price appropriately.
        </p>
      </div>

      <div class={styles.experiencesContainer}>
        <h2 class={styles.sectionTitle}>The Three Buying Experiences</h2>
        
        <div class={styles.experienceGrid}>
          <For each={buyingExperiences}>
            {(experience) => (
              <div 
                class={`${styles.experienceCard} ${selectedExperience() === experience.id ? styles.selectedCard : ''}`}
                style={{ "border-color": experience.color }}
                onClick={() => setSelectedExperience(selectedExperience() === experience.id ? null : experience.id)}
              >
                <div class={styles.cardHeader} style={{ "background-color": experience.lightColor }}>
                  <div class={styles.experienceIcon}>{experience.icon}</div>
                  <h3 class={styles.experienceTitle} style={{ "color": experience.color }}>
                    {experience.title}
                  </h3>
                  <p class={styles.experienceSubtitle}>{experience.subtitle}</p>
                </div>
                
                <div class={styles.cardContent}>
                  <p class={styles.experienceDescription}>{experience.description}</p>
                  
                  <Show when={selectedExperience() === experience.id}>
                    <div class={styles.expandedContent}>
                      <div class={styles.detailSection}>
                        <h4 class={styles.detailTitle}>What they expect:</h4>
                        <ul class={styles.detailList}>
                          <For each={experience.expectations}>
                            {(expectation) => <li>{expectation}</li>}
                          </For>
                        </ul>
                      </div>

                      <div class={styles.detailSection}>
                        <h4 class={styles.detailTitle}>How they evaluate you:</h4>
                        <ul class={styles.detailList}>
                          <For each={experience.evaluation}>
                            {(criterion) => <li>{criterion}</li>}
                          </For>
                        </ul>
                      </div>

                      <div class={styles.detailSection}>
                        <h4 class={styles.detailTitle}>The buying conversation:</h4>
                        <p class={styles.conversationText}>{experience.conversation}</p>
                      </div>

                      <div class={styles.detailSection}>
                        <h4 class={styles.detailTitle}>Your responsibility:</h4>
                        <p class={styles.responsibilityText}>{experience.responsibility}</p>
                      </div>

                      <Show when={showExamples()}>
                        <div class={styles.detailSection}>
                          <h4 class={styles.detailTitle}>Examples:</h4>
                          <ul class={styles.detailList}>
                            <For each={experience.examples}>
                              {(example) => <li>{example}</li>}
                            </For>
                          </ul>
                        </div>
                      </Show>
                    </div>
                  </Show>
                </div>
              </div>
            )}
          </For>
        </div>

        <div class={styles.cardActions}>
          <p class={styles.actionHint}>Click on any card above to explore details</p>
          <button 
            class={styles.examplesButton}
            onClick={() => setShowExamples(!showExamples())}
          >
            {showExamples() ? "Hide Examples" : "Show Examples"}
          </button>
        </div>
      </div>

      <div class={styles.diagnosticSection}>
        <h2 class={styles.sectionTitle}>Diagnostic Questions</h2>
        <p class={styles.diagnosticIntro}>
          Use these questions to identify which buying experience you're currently creating:
        </p>
        
        <div class={styles.diagnosticTable}>
          <div class={styles.tableHeader}>
            <div class={styles.questionColumn}>Question</div>
            <div class={styles.answerColumn} style={{ "color": buyingExperiences[0].color }}>
              Outsourced-Specialist
            </div>
            <div class={styles.answerColumn} style={{ "color": buyingExperiences[1].color }}>
              Outcome-Partner
            </div>
            <div class={styles.answerColumn} style={{ "color": buyingExperiences[2].color }}>
              Identity-Enablement
            </div>
          </div>
          
          <For each={diagnosticQuestions}>
            {(item) => (
              <div class={styles.tableRow}>
                <div class={styles.questionCell}>{item.question}</div>
                <div class={styles.answerCell}>{item.outsourcedSpecialist}</div>
                <div class={styles.answerCell}>{item.outcomePartner}</div>
                <div class={styles.answerCell}>{item.identityEnablement}</div>
              </div>
            )}
          </For>
        </div>
      </div>

      <div class={styles.responsibilitySpectrum}>
        <h2 class={styles.sectionTitle}>The Responsibility Spectrum</h2>
        <p class={styles.spectrumIntro}>
          Each buying experience implies a different level of responsibility you're taking on:
        </p>
        
        <div class={styles.spectrumContainer}>
          <div class={styles.spectrumLine}></div>
          <For each={buyingExperiences}>
            {(experience, index) => (
              <div class={styles.spectrumPoint}>
                <div 
                  class={styles.spectrumDot}
                  style={{ "background-color": experience.color }}
                ></div>
                <div class={styles.spectrumLabel}>
                  <h4 style={{ "color": experience.color }}>{experience.title}</h4>
                  <p class={styles.spectrumDescription}>{experience.responsibility}</p>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>

      <div class={styles.integrationNote}>
        <h2 class={styles.sectionTitle}>The Integration Challenge</h2>
        <p class={styles.noteText}>
          These experiences build upon rather than replace each other. Technical excellence remains 
          vital even when focused on outcomes or transformation. The key isn't choosing the "best" 
          experience - it's choosing the one that aligns with the value you want to create, the 
          responsibility you're ready to take, and the systems you're prepared to build.
        </p>
      </div>

      <div class={styles.nextSteps}>
        <h2 class={styles.sectionTitle}>What's Next?</h2>
        <p class={styles.nextStepsText}>
          Once you've identified which buying experience you're creating, the next challenge is 
          ensuring you have complete vision to deliver it effectively.
        </p>
        <div class={styles.nextStepsActions}>
          <A href="/holistic-vision" class={styles.nextButton}>
            Continue to Holistic Vision →
          </A>
          <A href="/assessment" class={styles.assessmentLink}>
            Take the Full Assessment
          </A>
        </div>
      </div>
    </div>
  );
};

export default NichingStyles;