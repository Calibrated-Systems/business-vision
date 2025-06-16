import { createSignal, For, Show } from 'solid-js';
import { A } from '@solidjs/router';
import styles from './affinity-trap.module.css';

const AffinityTrap = () => {
  const [currentStep, setCurrentStep] = createSignal<number>(0);
  const [answers, setAnswers] = createSignal<{ [key: number]: string }>({});
  const [result, setResult] = createSignal<string | null>(null);
  const [showScenario, setShowScenario] = createSignal<string | null>(null);

  const assessmentQuestions = [
    {
      id: 1,
      question: "When describing your business to someone new, what do you naturally emphasize first?",
      options: [
        { value: "experiential", text: "The transformation and impact it creates for people" },
        { value: "executional", text: "The systems and processes that make it work effectively" },
        { value: "mixed", text: "I struggle to know which to lead with" }
      ]
    },
    {
      id: 2,
      question: "When you're excited about a business idea, what gets you most energized?",
      options: [
        { value: "experiential", text: "Imagining how it will feel and what it will mean for people" },
        { value: "executional", text: "Figuring out how to make it work systematically and reliably" },
        { value: "mixed", text: "Both aspects excite me equally" }
      ]
    },
    {
      id: 3,
      question: "When seeking business advice, which type of content resonates most with you?",
      options: [
        { value: "experiential", text: "Vision-casting, purpose-driven, inspirational content" },
        { value: "executional", text: "Systems, frameworks, step-by-step methodologies" },
        { value: "mixed", text: "I consume both but struggle to apply either consistently" }
      ]
    },
    {
      id: 4,
      question: "When a business strategy doesn't work as expected, where do you first look for problems?",
      options: [
        { value: "experiential", text: "Whether the vision is compelling enough or the messaging resonates" },
        { value: "executional", text: "Whether the systems are designed properly or executed consistently" },
        { value: "mixed", text: "I'm not sure where to look first" }
      ]
    },
    {
      id: 5,
      question: "Which business advice tends to frustrate you most?",
      options: [
        { value: "experiential", text: "'Just focus on systems and processes' - it feels soulless" },
        { value: "executional", text: "'Just follow your passion and vision' - it feels impractical" },
        { value: "mixed", text: "Most advice feels like it's missing something important" }
      ]
    }
  ];

  const scenarios = [
    {
      id: "experiential-same",
      title: "Experiential Seeking Experiential Advice",
      situation: "Sarah, a life coach with strong experiential vision, seeks advice from another visionary coach about growing her practice.",
      advisor: "Inspirational business coach focused on 'following your passion and trusting the universe'",
      advice: "'Just keep putting your authentic self out there. The right people will find you. Focus on your why and the how will follow.'",
      outcome: "Sarah feels validated but remains stuck. She has a compelling vision but can't systematically convert interest into clients or scale her delivery.",
      lesson: "Same-affinity advice deepens what you're already good at but doesn't provide the missing piece.",
      color: "#e74c3c"
    },
    {
      id: "executional-same", 
      title: "Executional Seeking Executional Advice",
      situation: "Marcus, a software consultant with strong executional skills, seeks advice from a systems-focused business coach about positioning.",
      advisor: "Operations expert focused on efficiency and systematization",
      advice: "'You need better sales funnels and more systematic lead generation. Here's a 12-step process for converting prospects.'",
      outcome: "Marcus gets better systems but his messaging still doesn't resonate. He can deliver excellently but struggles to communicate why prospects should care.",
      lesson: "Technical solutions won't solve positioning problems that require emotional connection and meaning-making.",
      color: "#3498db"
    },
    {
      id: "experiential-opposite-no-dualism",
      title: "Experiential Seeking Executional (No Dualism)",
      situation: "Emma, a creative entrepreneur with strong vision, seeks advice from a systems-focused business consultant about scaling.",
      advisor: "Efficiency expert who doesn't understand or value experiential vision",
      advice: "'Stop being so fluffy and focus on the numbers. Your vision doesn't matter if you can't systematize delivery.'",
      outcome: "Emma feels invalidated and tries to suppress her natural strengths. She builds systems that work but lose the essence of what made her unique.",
      lesson: "Opposite-affinity advice without dualism understanding dismisses rather than complements your natural strengths.",
      color: "#e67e22"
    },
    {
      id: "executional-opposite-no-dualism",
      title: "Executional Seeking Experiential (No Dualism)", 
      situation: "David, a process-oriented consultant, seeks advice from a vision-focused coach about marketing and positioning.",
      advisor: "Inspirational marketer who doesn't value systematic thinking",
      advice: "'Stop getting caught in semantics and just tell your story from the heart. Don't overthink it - people buy emotions, not logic.'",
      outcome: "David feels his analytical nature is wrong and tries to force inspirational messaging that feels inauthentic and doesn't leverage his systematic strengths.",
      lesson: "Dismissing your natural affinity rather than building upon it creates internal conflict and inauthentic positioning.",
      color: "#9b59b6"
    },
    {
      id: "wrong-context",
      title: "Right Affinity, Wrong Context",
      situation: "Lisa, an outcome-partner business owner, seeks advice from a transformation-guide expert about community building.",
      advisor: "Expert in transformation-guide businesses who understands both vision types",
      advice: "'Build a movement around your values. Create content that inspires identity transformation and develop community rituals.'",
      outcome: "Lisa applies transformation-guide strategies to an outcome-partner business, confusing her audience and diluting her positioning.",
      lesson: "Even good advice becomes counterproductive when applied to the wrong buying experience context.",
      color: "#f39c12"
    },
    {
      id: "ideal-collaboration",
      title: "Ideal Collaboration",
      situation: "Alex, experiential-leaning transformation-guide business owner, partners with Jordan, executional-leaning operations expert who also works with transformation businesses.",
      collaboration: "Jordan understands Alex's vision is the foundation and helps design systems that amplify rather than constrain the transformational experience.",
      approach: "They develop community platforms that facilitate authentic connection, systematic onboarding that maintains the inspirational journey, and measurement systems that track transformation rather than just engagement.",
      outcome: "Alex's vision reaches more people through systematic delivery while maintaining its transformational essence. Jordan's systems enable scalable impact rather than just efficiency.",
      lesson: "Ideal collaboration happens when both affinities are valued and applied within the correct business context.",
      color: "#27ae60"
    }
  ];

  const handleAnswer = (questionId: number, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    if (questionId < assessmentQuestions.length) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 300);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const answerValues = Object.values(answers());
    const experientialCount = answerValues.filter(v => v === 'experiential').length;
    const executionalCount = answerValues.filter(v => v === 'executional').length;
    const mixedCount = answerValues.filter(v => v === 'mixed').length;

    if (experientialCount >= 3) {
      setResult('experiential');
    } else if (executionalCount >= 3) {
      setResult('executional');
    } else {
      setResult('mixed');
    }
  };

  const resetAssessment = () => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
  };

  const getResultContent = () => {
    const resultType = result();
    switch (resultType) {
      case 'experiential':
        return {
          title: "Experiential Affinity",
          description: "You naturally see business through the lens of vision, transformation, and meaning. You're energized by imagining what's possible and inspiring others toward compelling futures.",
          strengths: [
            "Creating compelling visions that inspire action",
            "Connecting with people's deeper motivations and values", 
            "Building emotional resonance and meaning",
            "Seeing transformational possibilities others miss"
          ],
          challenges: [
            "Translating vision into systematic, scalable delivery",
            "Building reliable processes that maintain quality",
            "Measuring and optimizing for consistent outcomes",
            "Creating frameworks others can implement effectively"
          ],
          trap: "You likely gravitate toward inspirational business advice that validates your vision but doesn't help you build the systematic foundation needed to deliver on that vision reliably.",
          solution: "Seek executional partners who appreciate your vision and can help design systems that amplify rather than constrain your transformational work.",
          color: "#e74c3c"
        };
      case 'executional':
        return {
          title: "Executional Affinity", 
          description: "You naturally see business through the lens of systems, processes, and reliable implementation. You're energized by figuring out how to make things work effectively and consistently.",
          strengths: [
            "Designing systems that deliver consistent results",
            "Seeing implementation challenges and solutions",
            "Building scalable, reliable processes",
            "Creating frameworks that others can follow"
          ],
          challenges: [
            "Articulating why your work matters beyond efficiency",
            "Creating emotional connection and resonance",
            "Communicating value in inspiring, meaningful terms",
            "Building brand identity that attracts ideal clients"
          ],
          trap: "You likely seek advice focused on better systems and processes, but struggle with positioning and messaging because technical excellence alone doesn't create market differentiation.",
          solution: "Seek experiential partners who can see the meaningful transformation your systems enable and help articulate why it matters to people.",
          color: "#3498db"
        };
      case 'mixed':
        return {
          title: "Mixed or Developing Affinity",
          description: "You may be developing both vision types, or you might be unclear about your natural affinity. This is common when building business skills or transitioning between different approaches.",
          strengths: [
            "Awareness that both vision and systems matter",
            "Openness to different perspectives and approaches",
            "Potential to develop truly holistic business vision",
            "Recognition that something is missing in current approaches"
          ],
          challenges: [
            "Inconsistent application of either approach",
            "Difficulty knowing which advice to follow",
            "Potential paralysis from seeing too many options",
            "Risk of trying to do everything without depth"
          ],
          trap: "You might cycle between different types of advice without developing depth in either, or feel overwhelmed by conflicting approaches that each seem partially right.",
          solution: "Focus on identifying and developing your natural affinity first, then systematically develop the complementary vision type through targeted collaboration or learning.",
          color: "#9b59b6"
        };
      default:
        return null;
    }
  };

  return (
    <div class={styles.container}>
      <header class={styles.header}>
        <A href="/holistic-vision" class={styles.backLink}>← Back to Holistic Vision</A>
        <h1 class={styles.title}>The Affinity Trap</h1>
        <p class={styles.subtitle}>Interactive Assessment & Scenario Explorer</p>
      </header>

      <div class={styles.introduction}>
        <p class={styles.introText}>
          Most business owners have a natural affinity for either experiential or executional vision. 
          But the real trap isn't just gravitating toward what feels familiar - it's assuming that 
          everyone perceives reality the same way we do.
        </p>
        <p class={styles.introText}>
          This assessment helps you identify your natural affinity and understand how it might be 
          limiting your growth through the advice and collaboration patterns you unconsciously choose.
        </p>
      </div>

      <Show when={!result()}>
        <div class={styles.assessmentContainer}>
          <div class={styles.progressBar}>
            <div 
              class={styles.progressFill}
              style={{ "width": `${(currentStep() / assessmentQuestions.length) * 100}%` }}
            ></div>
          </div>
          
          <div class={styles.questionCounter}>
            Question {Math.min(currentStep() + 1, assessmentQuestions.length)} of {assessmentQuestions.length}
          </div>

          <Show when={currentStep() < assessmentQuestions.length}>
            <div class={styles.questionCard}>
              <h3 class={styles.questionText}>
                {assessmentQuestions[currentStep()].question}
              </h3>
              
              <div class={styles.optionsContainer}>
                <For each={assessmentQuestions[currentStep()].options}>
                  {(option) => (
                    <button
                      class={styles.optionButton}
                      onClick={() => handleAnswer(assessmentQuestions[currentStep()].id, option.value)}
                    >
                      {option.text}
                    </button>
                  )}
                </For>
              </div>
            </div>
          </Show>
        </div>
      </Show>

      <Show when={result()}>
        <div class={styles.resultContainer}>
          <div 
            class={styles.resultCard}
            style={{ "border-color": getResultContent()?.color }}
          >
            <h2 class={styles.resultTitle} style={{ "color": getResultContent()?.color }}>
              Your Affinity: {getResultContent()?.title}
            </h2>
            <p class={styles.resultDescription}>{getResultContent()?.description}</p>
            
            <div class={styles.resultGrid}>
              <div class={styles.resultSection}>
                <h4 class={styles.sectionTitle}>Your Strengths</h4>
                <ul class={styles.resultList}>
                  <For each={getResultContent()?.strengths}>
                    {(strength) => <li>{strength}</li>}
                  </For>
                </ul>
              </div>
              
              <div class={styles.resultSection}>
                <h4 class={styles.sectionTitle}>Common Challenges</h4>
                <ul class={styles.resultList}>
                  <For each={getResultContent()?.challenges}>
                    {(challenge) => <li>{challenge}</li>}
                  </For>
                </ul>
              </div>
            </div>
            
            <div class={styles.trapSection}>
              <h4 class={styles.sectionTitle}>Your Affinity Trap</h4>
              <p class={styles.trapText}>{getResultContent()?.trap}</p>
            </div>
            
            <div class={styles.solutionSection}>
              <h4 class={styles.sectionTitle}>Breaking Free</h4>
              <p class={styles.solutionText}>{getResultContent()?.solution}</p>
            </div>
            
            <div class={styles.resultActions}>
              <button class={styles.retakeButton} onClick={resetAssessment}>
                Retake Assessment
              </button>
              <A href="/implementation-guide" class={styles.guideButton}>
                Get Implementation Guide
              </A>
            </div>
          </div>
        </div>
      </Show>

      <div class={styles.scenariosSection}>
        <h2 class={styles.sectionTitle}>Explore Common Scenarios</h2>
        <p class={styles.scenariosIntro}>
          See how the affinity trap plays out in real business situations:
        </p>
        
        <div class={styles.scenarioGrid}>
          <For each={scenarios}>
            {(scenario) => (
              <div 
                class={`${styles.scenarioCard} ${showScenario() === scenario.id ? styles.activeScenario : ''}`}
                style={{ "border-color": scenario.color }}
                onClick={() => setShowScenario(showScenario() === scenario.id ? null : scenario.id)}
              >
                <div class={styles.scenarioHeader}>
                  <h4 class={styles.scenarioTitle} style={{ "color": scenario.color }}>
                    {scenario.title}
                  </h4>
                  <div class={styles.expandIcon}>
                    {showScenario() === scenario.id ? "−" : "+"}
                  </div>
                </div>
                
                <Show when={showScenario() === scenario.id}>
                  <div class={styles.scenarioContent}>
                    <div class={styles.scenarioDetail}>
                      <h5>Situation:</h5>
                      <p>{scenario.situation}</p>
                    </div>
                    
                    <Show when={scenario.advisor}>
                      <div class={styles.scenarioDetail}>
                        <h5>Advisor:</h5>
                        <p>{scenario.advisor}</p>
                      </div>
                    </Show>
                    
                    <Show when={scenario.advice}>
                      <div class={styles.scenarioDetail}>
                        <h5>Advice Given:</h5>
                        <p class={styles.adviceText}>"{scenario.advice}"</p>
                      </div>
                    </Show>
                    
                    <Show when={scenario.collaboration}>
                      <div class={styles.scenarioDetail}>
                        <h5>Collaboration Approach:</h5>
                        <p>{scenario.collaboration}</p>
                      </div>
                    </Show>
                    
                    <Show when={scenario.approach}>
                      <div class={styles.scenarioDetail}>
                        <h5>How They Work Together:</h5>
                        <p>{scenario.approach}</p>
                      </div>
                    </Show>
                    
                    <div class={styles.scenarioDetail}>
                      <h5>Outcome:</h5>
                      <p>{scenario.outcome}</p>
                    </div>
                    
                    <div class={styles.scenarioLesson}>
                      <h5>Key Lesson:</h5>
                      <p>{scenario.lesson}</p>
                    </div>
                  </div>
                </Show>
              </div>
            )}
          </For>
        </div>
      </div>

      <div class={styles.nextSteps}>
        <h2 class={styles.sectionTitle}>What's Next?</h2>
        <p class={styles.nextStepsText}>
          Understanding your affinity is the first step. Now learn how to build complete vision 
          by developing both sides or finding the right collaborative partnerships.
        </p>
        <div class={styles.nextStepsActions}>
          <A href="/implementation-guide" class={styles.primaryButton}>
            Get Your Implementation Guide
          </A>
          <A href="/" class={styles.secondaryButton}>
            Return to Framework Overview
          </A>
        </div>
      </div>
    </div>
  );
};

export default AffinityTrap;