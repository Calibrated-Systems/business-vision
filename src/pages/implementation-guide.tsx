import { createSignal, For, Show } from 'solid-js';
import { A } from '@solidjs/router';
import styles from './implementation-guide.module.css';

const ImplementationGuide = () => {
  const [selectedPath, setSelectedPath] = createSignal<string | null>(null);
  const [expandedSection, setExpandedSection] = createSignal<string | null>(null);

  const implementationPaths = [
    {
      id: "clarity-first",
      title: "Start with Clarity",
      subtitle: "For businesses unsure of their direction",
      description: "You're feeling scattered or unclear about your positioning and need fundamental clarity before building systems.",
      color: "#9b59b6",
      icon: "🎯",
      indicators: [
        "Struggle to articulate your value proposition clearly",
        "Get conflicting advice that all seems partially right",
        "Feel like you're trying to serve everyone",
        "Have mixed results from the assessment",
        "Can't decide which framework to focus on first"
      ],
      phases: [
        {
          title: "Phase 1: Foundation Assessment (Week 1-2)",
          actions: [
            "Complete the full Business Vision Assessment if you haven't already",
            "Take the detailed Niching Styles quiz to identify your buying experience",
            "Review your last 10 client interactions to identify patterns",
            "Audit your current marketing messages for consistency",
            "Gather feedback from recent clients about how they describe your value"
          ],
          deliverable: "Clear identification of your primary buying experience and initial vision affinity"
        },
        {
          title: "Phase 2: Buying Experience Alignment (Week 3-4)", 
          actions: [
            "Choose one buying experience to focus on for the next 90 days",
            "Rewrite your core messaging to align with that experience",
            "Identify 3-5 businesses that excel at your chosen buying experience",
            "Create a simple client onboarding process that matches the experience",
            "Test your new messaging with your network for clarity"
          ],
          deliverable: "Consistent messaging aligned with your chosen buying experience"
        },
        {
          title: "Phase 3: Vision Development (Week 5-8)",
          actions: [
            "Take the Affinity Trap assessment to understand your natural vision affinity", 
            "Identify 2-3 advisors or collaborators with complementary vision affinity",
            "Document your current approach in both experiential and executional terms",
            "Create a simple framework for how you deliver value",
            "Begin developing the vision type that's currently weaker"
          ],
          deliverable: "Basic competency in both experiential and executional vision"
        },
        {
          title: "Phase 4: Integration & Testing (Week 9-12)",
          actions: [
            "Launch your aligned approach with a small test group",
            "Measure both positioning clarity and delivery consistency",
            "Gather feedback on both the appeal and the execution",
            "Refine your approach based on real-world results",
            "Plan your next phase of development"
          ],
          deliverable: "Validated approach ready for scaling"
        }
      ]
    },
    {
      id: "experiential-to-systems",
      title: "From Vision to Systems",
      subtitle: "For experiential visionaries needing execution",
      description: "You have a compelling vision and can inspire people, but struggle to build reliable systems that deliver consistently.",
      color: "#e74c3c",
      icon: "⚡",
      indicators: [
        "Strong experiential vision affinity from assessment",
        "Can articulate inspiring outcomes but struggle with systematic delivery",
        "Clients love your vision but experience inconsistent execution",
        "Feel constrained by operational requirements",
        "Avoid 'boring' business systems but know you need them"
      ],
      phases: [
        {
          title: "Phase 1: Vision Documentation (Week 1-2)",
          actions: [
            "Create a comprehensive vision document articulating your desired outcomes",
            "Map the transformation journey you want clients to experience",
            "Identify the core values and principles that drive your work",
            "Document the experiential elements that must be preserved",
            "Define success metrics that honor both experience and outcomes"
          ],
          deliverable: "Clear vision framework that guides all systematic development"
        },
        {
          title: "Phase 2: Process Archaeology (Week 3-4)",
          actions: [
            "Analyze your most successful client engagements to identify patterns",
            "Map the informal processes you already use successfully",
            "Identify the minimum viable structure needed to maintain quality",
            "Find an executional thinking partner for collaboration",
            "Begin documenting your 'invisible' delivery systems"
          ],
          deliverable: "Understanding of your current informal systems and success patterns"
        },
        {
          title: "Phase 3: System Design (Week 5-8)",
          actions: [
            "Design simple systems that amplify rather than constrain your vision",
            "Create quality control mechanisms that preserve experiential integrity",
            "Build systematic onboarding that maintains inspirational elements",
            "Develop measurement systems that track transformation, not just completion",
            "Test systems with willing clients while gathering experiential feedback"
          ],
          deliverable: "Initial systematic approach that maintains visionary elements"
        },
        {
          title: "Phase 4: Scale & Refine (Week 9-16)",
          actions: [
            "Gradually implement systems across your entire client base",
            "Train any team members on maintaining experiential quality within systems",
            "Create feedback loops that ensure systems enhance rather than diminish vision",
            "Develop delegation frameworks that preserve your unique experiential elements",
            "Build advanced systems for scaling while maintaining transformation focus"
          ],
          deliverable: "Scalable systems that consistently deliver your visionary outcomes"
        }
      ]
    },
    {
      id: "systems-to-meaning",
      title: "From Systems to Meaning",
      subtitle: "For executional experts needing inspiration",
      description: "You can deliver excellent results systematically, but struggle to articulate why it matters or create emotional connection.",
      color: "#3498db", 
      icon: "💡",
      indicators: [
        "Strong executional vision affinity from assessment",
        "Can build reliable systems but struggle with positioning/messaging",
        "Clients appreciate your delivery but you're seen as a commodity",
        "Feel frustrated when advised to 'just tell your story'",
        "Know your work creates value but can't articulate the transformation"
      ],
      phases: [
        {
          title: "Phase 1: Impact Archaeology (Week 1-2)",
          actions: [
            "Interview recent clients about the transformation they experienced",
            "Document the before/after states your work creates",
            "Identify the emotional and practical changes your systems enable",
            "Map the broader context and meaning of the problems you solve",
            "Find an experiential thinking partner for collaboration"
          ],
          deliverable: "Clear understanding of the meaningful transformation your systems create"
        },
        {
          title: "Phase 2: Story Development (Week 3-4)",
          actions: [
            "Develop compelling narratives around the transformations you enable",
            "Create case studies that highlight both systematic excellence and meaningful outcomes",
            "Practice articulating 'why it matters' in addition to 'how it works'",
            "Connect your systematic approach to larger values and purposes",
            "Test your new messaging with trusted advisors and past clients"
          ],
          deliverable: "Compelling stories that connect systematic delivery to meaningful outcomes"
        },
        {
          title: "Phase 3: Experiential Integration (Week 5-8)",
          actions: [
            "Redesign your marketing to lead with transformation, supported by systematic proof",
            "Create experiential touchpoints within your systematic delivery",
            "Develop onboarding that helps clients understand the journey, not just the process",
            "Build celebration and recognition moments into your systematic workflow",
            "Practice presenting your work in experiential terms while maintaining systematic integrity"
          ],
          deliverable: "Integrated approach that honors both systematic excellence and experiential meaning"
        },
        {
          title: "Phase 4: Market Positioning (Week 9-12)",
          actions: [
            "Launch your meaning-integrated approach in the market",
            "Develop thought leadership content that combines systematic insights with transformational vision",
            "Create premium offerings that emphasize both reliability and transformation",
            "Build relationships with referral sources who value your integrated approach",
            "Measure both systematic delivery metrics and experiential satisfaction"
          ],
          deliverable: "Market position that commands premium pricing through meaningful systematic delivery"
        }
      ]
    },
    {
      id: "collaboration-focused",
      title: "Partnership Development",
      subtitle: "For those needing complementary collaboration",
      description: "You understand your affinity but need to find the right partners who can provide the complementary vision type.",
      color: "#27ae60",
      icon: "🤝",
      indicators: [
        "Clear results from both framework assessments",
        "History of working with advisors who think like you",
        "Recognition that you need complementary perspective",
        "Understanding of the Affinity Trap concept",
        "Ready to invest in collaborative relationships"
      ],
      phases: [
        {
          title: "Phase 1: Partner Profiling (Week 1-2)",
          actions: [
            "Define the specific complementary vision affinity you need",
            "Create a profile of ideal collaborative partners",
            "Identify businesses in your buying experience that demonstrate both vision types",
            "Research potential advisors, consultants, or team members",
            "Develop criteria for evaluating collaborative fit beyond just expertise"
          ],
          deliverable: "Clear profile of the collaborative partnership you need"
        },
        {
          title: "Phase 2: Network Development (Week 3-6)",
          actions: [
            "Reach out to potential partners with specific collaboration proposals",
            "Join communities where your complementary affinity type gathers",
            "Create content that attracts your needed collaboration type",
            "Test small projects with potential partners before major commitments",
            "Build relationships gradually while evaluating collaborative fit"
          ],
          deliverable: "Active network of potential complementary collaborators"
        },
        {
          title: "Phase 3: Collaboration Design (Week 7-10)",
          actions: [
            "Structure collaborative relationships with clear roles and expectations",
            "Create frameworks for integrating both vision types effectively",
            "Develop communication protocols that honor both affinities",
            "Design projects that leverage each partner's natural strengths",
            "Establish feedback systems for improving collaborative effectiveness"
          ],
          deliverable: "Structured collaborative relationships with clear integration frameworks"
        },
        {
          title: "Phase 4: Integrated Implementation (Week 11-16)",
          actions: [
            "Launch integrated projects that demonstrate complete vision",
            "Refine collaborative processes based on real-world results",
            "Develop systematic approaches for ongoing collaborative work",
            "Create case studies of successful integrated approaches",
            "Scale collaborative model across larger projects or longer timeframes"
          ],
          deliverable: "Proven collaborative model that consistently delivers holistic vision"
        }
      ]
    }
  ];

  const getPathRecommendation = () => {
    // This would normally come from assessment results or user selection
    return "If you're unsure which path fits you best, start with the Business Vision Assessment to get personalized recommendations.";
  };

  return (
    <div class={styles.container}>
      <header class={styles.header}>
        <A href="/" class={styles.backLink}>← Back to Framework Overview</A>
        <h1 class={styles.title}>Implementation Guide</h1>
        <p class={styles.subtitle}>Step-by-step pathways to complete business vision</p>
      </header>

      <div class={styles.introduction}>
        <p class={styles.introText}>
          Understanding the frameworks is just the beginning. This implementation guide provides 
          specific, actionable pathways based on your current situation and natural affinity. 
          Each path is designed as a 12-16 week journey with clear phases, actions, and deliverables.
        </p>
        <div class={styles.recommendationBox}>
          <h3 class={styles.recommendationTitle}>Not sure which path is right for you?</h3>
          <p class={styles.recommendationText}>{getPathRecommendation()}</p>
          <A href="/assessment" class={styles.assessmentButton}>
            Take the Assessment
          </A>
        </div>
      </div>

      <div class={styles.pathsContainer}>
        <h2 class={styles.sectionTitle}>Choose Your Implementation Path</h2>
        
        <div class={styles.pathsGrid}>
          <For each={implementationPaths}>
            {(path) => (
              <div 
                class={`${styles.pathCard} ${selectedPath() === path.id ? styles.selectedPath : ''}`}
                style={{ "border-color": path.color }}
                onClick={() => setSelectedPath(selectedPath() === path.id ? null : path.id)}
              >
                <div class={styles.pathHeader} style={{ "background-color": `${path.color}15` }}>
                  <div class={styles.pathIcon}>{path.icon}</div>
                  <h3 class={styles.pathTitle} style={{ "color": path.color }}>
                    {path.title}
                  </h3>
                  <p class={styles.pathSubtitle}>{path.subtitle}</p>
                </div>
                
                <div class={styles.pathContent}>
                  <p class={styles.pathDescription}>{path.description}</p>
                  
                  <div class={styles.indicatorsSection}>
                    <h4 class={styles.indicatorsTitle}>This path is right for you if:</h4>
                    <ul class={styles.indicatorsList}>
                      <For each={path.indicators.slice(0, 3)}>
                        {(indicator) => <li>{indicator}</li>}
                      </For>
                    </ul>
                    <Show when={!selectedPath() || selectedPath() !== path.id}>
                      <button class={styles.expandButton}>
                        Click to see full implementation plan →
                      </button>
                    </Show>
                  </div>

                  <Show when={selectedPath() === path.id}>
                    <div class={styles.fullIndicators}>
                      <h4 class={styles.indicatorsTitle}>Complete indicators list:</h4>
                      <ul class={styles.indicatorsList}>
                        <For each={path.indicators}>
                          {(indicator) => <li>{indicator}</li>}
                        </For>
                      </ul>
                    </div>

                    <div class={styles.phasesContainer}>
                      <h4 class={styles.phasesTitle}>Implementation Timeline</h4>
                      <div class={styles.phasesList}>
                        <For each={path.phases}>
                          {(phase, index) => (
                            <div 
                              class={styles.phaseCard}
                              onClick={(e) => {
                                e.stopPropagation();
                                setExpandedSection(expandedSection() === `${path.id}-${index()}` ? null : `${path.id}-${index()}`);
                              }}
                            >
                              <div class={styles.phaseHeader}>
                                <div class={styles.phaseNumber} style={{ "background-color": path.color }}>
                                  {index() + 1}
                                </div>
                                <h5 class={styles.phaseTitle}>{phase.title}</h5>
                                <div class={styles.phaseExpand}>
                                  {expandedSection() === `${path.id}-${index()}` ? "−" : "+"}
                                </div>
                              </div>
                              
                              <Show when={expandedSection() === `${path.id}-${index()}`}>
                                <div class={styles.phaseContent}>
                                  <h6 class={styles.actionsTitle}>Key Actions:</h6>
                                  <ul class={styles.actionsList}>
                                    <For each={phase.actions}>
                                      {(action) => <li>{action}</li>}
                                    </For>
                                  </ul>
                                  <div class={styles.deliverable}>
                                    <h6 class={styles.deliverableTitle}>Phase Deliverable:</h6>
                                    <p class={styles.deliverableText}>{phase.deliverable}</p>
                                  </div>
                                </div>
                              </Show>
                            </div>
                          )}
                        </For>
                      </div>
                    </div>

                    <div class={styles.pathActions}>
                      <button 
                        class={styles.startButton}
                        style={{ "background-color": path.color }}
                      >
                        Start This Path
                      </button>
                      <button 
                        class={styles.downloadButton}
                        style={{ "color": path.color, "border-color": path.color }}
                      >
                        Download PDF Guide
                      </button>
                    </div>
                  </Show>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>

      <div class={styles.supportSection}>
        <h2 class={styles.sectionTitle}>Implementation Support</h2>
        <div class={styles.supportGrid}>
          <div class={styles.supportCard}>
            <h3 class={styles.supportTitle}>Weekly Check-ins</h3>
            <p class={styles.supportDescription}>
              Join our weekly implementation calls where you can ask questions, share progress, 
              and get guidance from others on the same journey.
            </p>
            <button class={styles.supportButton}>
              Join Community
            </button>
          </div>

          <div class={styles.supportCard}>
            <h3 class={styles.supportTitle}>Resource Library</h3>
            <p class={styles.supportDescription}>
              Access templates, worksheets, and examples for each phase of implementation 
              to accelerate your progress.
            </p>
            <button class={styles.supportButton}>
              Browse Resources
            </button>
          </div>

          <div class={styles.supportCard}>
            <h3 class={styles.supportTitle}>Expert Matching</h3>
            <p class={styles.supportDescription}>
              Connect with vetted advisors and collaborators who understand the frameworks 
              and can provide complementary vision affinity.
            </p>
            <button class={styles.supportButton}>
              Find Collaborators
            </button>
          </div>
        </div>
      </div>

      <div class={styles.successStories}>
        <h2 class={styles.sectionTitle}>Success Stories</h2>
        <p class={styles.storiesIntro}>
          See how others have successfully implemented these frameworks to achieve clarity and growth:
        </p>
        <div class={styles.storiesGrid}>
          <For each={[
            {
              path: "From Vision to Systems",
              business: "Creative Agency",
              result: "Scaled from $200K to $800K while maintaining creative excellence",
              quote: "The systematic approach actually enhanced our creativity by removing the chaos."
            },
            {
              path: "From Systems to Meaning", 
              business: "Technical Consulting",
              result: "Increased average project value by 150% through transformational positioning",
              quote: "Clients now see us as transformation partners, not just technical resources."
            },
            {
              path: "Partnership Development",
              business: "Business Coaching",
              result: "Built integrated offering combining strategy and implementation",
              quote: "Our partnership creates complete value that neither of us could deliver alone."
            }
          ]}>
            {(story) => (
              <div class={styles.storyCard}>
                <div class={styles.storyPath}>{story.path}</div>
                <h4 class={styles.storyBusiness}>{story.business}</h4>
                <p class={styles.storyResult}>{story.result}</p>
                <blockquote class={styles.storyQuote}>"{story.quote}"</blockquote>
              </div>
            )}
          </For>
        </div>
      </div>

      <div class={styles.nextSteps}>
        <h2 class={styles.sectionTitle}>Ready to Begin?</h2>
        <p class={styles.nextStepsText}>
          Choose your implementation path and start building complete business vision today.
        </p>
        <div class={styles.nextStepsActions}>
          <A href="/assessment" class={styles.assessmentCTA}>
            Take Assessment for Personalized Path
          </A>
          <A href="/affinity-trap" class={styles.affinityCTA}>
            Explore Affinity Trap Assessment
          </A>
        </div>
      </div>
    </div>
  );
};

export default ImplementationGuide;