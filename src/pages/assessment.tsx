import { createSignal, For, Show } from 'solid-js';
import { A } from '@solidjs/router';
import styles from './assessment.module.css';

const Assessment = () => {
  const [currentSection, setCurrentSection] = createSignal<number>(0);
  const [answers, setAnswers] = createSignal<{ [key: string]: string }>({});
  const [results, setResults] = createSignal<any>(null);
  const [showResults, setShowResults] = createSignal<boolean>(false);

  const assessmentSections = [
    {
      id: 0,
      title: "Current Business Situation",
      description: "Help us understand where you are in your business journey",
      questions: [
        {
          id: "business_stage",
          question: "What stage is your business in?",
          type: "single",
          options: [
            { value: "idea", text: "Idea stage - planning but not yet launched" },
            { value: "early", text: "Early stage - launched but seeking clarity" },
            { value: "growth", text: "Growth stage - scaling but facing positioning challenges" },
            { value: "established", text: "Established - looking to optimize or pivot approach" }
          ]
        },
        {
          id: "main_challenge",
          question: "What's your biggest challenge right now?",
          type: "single",
          options: [
            { value: "positioning", text: "Unclear positioning - can't articulate value clearly" },
            { value: "messaging", text: "Messaging doesn't resonate with audience" },
            { value: "delivery", text: "Struggle to deliver consistently on promises" },
            { value: "growth", text: "Difficulty scaling while maintaining quality" },
            { value: "clarity", text: "Generally feeling scattered and unfocused" }
          ]
        },
        {
          id: "advice_frustration",
          question: "Which type of business advice tends to frustrate you most?",
          type: "single",
          options: [
            { value: "too_tactical", text: "'Just focus on systems and processes' - feels soulless" },
            { value: "too_visionary", text: "'Follow your passion and vision' - feels impractical" },
            { value: "generic", text: "Generic advice that doesn't fit my specific situation" },
            { value: "conflicting", text: "Conflicting advice that leaves me more confused" }
          ]
        }
      ]
    },
    {
      id: 1,
      title: "Your Buying Experience",
      description: "Identify which type of buying experience you're creating for customers",
      questions: [
        {
          id: "client_expertise",
          question: "What level of expertise do your clients typically have before working with you?",
          type: "single",
          options: [
            { value: "high", text: "High - they know exactly what they need and can specify requirements" },
            { value: "medium", text: "Medium - they know their desired outcomes but not the technical details" },
            { value: "low", text: "Low - they're drawn to the vision but need guidance on everything" }
          ]
        },
        {
          id: "marketing_language",
          question: "Which best describes the language you naturally use in marketing?",
          type: "single",
          options: [
            { value: "technical", text: "Technical specifications, methodologies, credentials, proven processes" },
            { value: "outcomes", text: "Results, transformations, problem-solving, situational improvements" },
            { value: "values", text: "Vision, identity, community, values, way of being, personal growth" }
          ]
        },
        {
          id: "client_journey",
          question: "How do clients typically discover and choose you?",
          type: "single",
          options: [
            { value: "search", text: "They search for specific solutions or skill sets" },
            { value: "referral", text: "Referrals based on similar challenges you've solved" },
            { value: "resonance", text: "They resonate with your content, values, or community" }
          ]
        },
        {
          id: "value_proposition",
          question: "What's your primary competitive advantage?",
          type: "single",
          options: [
            { value: "execution", text: "Superior technical execution and reliability" },
            { value: "understanding", text: "Deep understanding of client context and challenges" },
            { value: "transformation", text: "Unique philosophy and approach to personal/business transformation" }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Your Vision Affinity",
      description: "Discover your natural approach to business vision and planning",
      questions: [
        {
          id: "business_description",
          question: "When describing your business to someone new, what do you naturally emphasize first?",
          type: "single",
          options: [
            { value: "impact", text: "The transformation and impact it creates for people" },
            { value: "systems", text: "The systems and processes that make it work effectively" },
            { value: "struggle", text: "I struggle to know which to lead with" }
          ]
        },
        {
          id: "excitement_source",
          question: "When you're excited about a business idea, what energizes you most?",
          type: "single",
          options: [
            { value: "vision", text: "Imagining how it will feel and what it will mean for people" },
            { value: "implementation", text: "Figuring out how to make it work systematically and reliably" },
            { value: "both", text: "Both aspects excite me equally" }
          ]
        },
        {
          id: "problem_solving",
          question: "When a business strategy doesn't work as expected, where do you first look for problems?",
          type: "single",
          options: [
            { value: "messaging", text: "Whether the vision is compelling enough or the messaging resonates" },
            { value: "execution", text: "Whether the systems are designed properly or executed consistently" },
            { value: "unsure", text: "I'm not sure where to look first" }
          ]
        },
        {
          id: "content_preference",
          question: "Which type of business content resonates most with you?",
          type: "single",
          options: [
            { value: "inspirational", text: "Vision-casting, purpose-driven, inspirational content" },
            { value: "systematic", text: "Systems, frameworks, step-by-step methodologies" },
            { value: "mixed", text: "I consume both but struggle to apply either consistently" }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Current Gaps & Needs",
      description: "Identify what's missing in your current approach",
      questions: [
        {
          id: "biggest_struggle",
          question: "Which statement best describes your biggest current struggle?",
          type: "single",
          options: [
            { value: "vision_to_systems", text: "I have a compelling vision but struggle to build reliable systems" },
            { value: "systems_to_meaning", text: "I can deliver well but struggle to articulate why it matters" },
            { value: "both_unclear", text: "Both my vision and systems need work" },
            { value: "application_struggle", text: "I understand both but struggle to apply them consistently" }
          ]
        },
        {
          id: "collaboration_history",
          question: "When you've sought business advice or collaboration in the past, what typically happened?",
          type: "single",
          options: [
            { value: "same_thinking", text: "I found people who think like me but didn't get the missing piece" },
            { value: "dismissed", text: "I found experts who dismissed my natural strengths" },
            { value: "wrong_context", text: "I got good advice that didn't fit my specific business model" },
            { value: "helpful", text: "I've found helpful guidance that moved me forward" }
          ]
        },
        {
          id: "ideal_outcome",
          question: "What would success look like for you right now?",
          type: "single",
          options: [
            { value: "clear_positioning", text: "Crystal clear positioning and messaging that attracts ideal clients" },
            { value: "systematic_delivery", text: "Reliable systems that deliver consistently on my promises" },
            { value: "integrated_approach", text: "An integrated approach that's both meaningful and systematic" },
            { value: "confident_scaling", text: "Confidence to scale without losing what makes me unique" }
          ]
        }
      ]
    }
  ];

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const nextSection = () => {
    if (currentSection() < assessmentSections.length - 1) {
      setCurrentSection(prev => prev + 1);
    } else {
      calculateResults();
    }
  };

  const prevSection = () => {
    if (currentSection() > 0) {
      setCurrentSection(prev => prev - 1);
    }
  };

  const calculateResults = () => {
    const userAnswers = answers();
    
    // Determine buying experience
    let buyingExperience = "mixed";
    const clientExpertise = userAnswers.client_expertise;
    const marketingLanguage = userAnswers.marketing_language;
    const clientJourney = userAnswers.client_journey;
    const valueProp = userAnswers.value_proposition;
    
    const outsourcedSpecialistScore = [clientExpertise === "high", marketingLanguage === "technical", clientJourney === "search", valueProp === "execution"].filter(Boolean).length;
    const outcomePartnerScore = [clientExpertise === "medium", marketingLanguage === "outcomes", clientJourney === "referral", valueProp === "understanding"].filter(Boolean).length;
    const identityEnablementScore = [clientExpertise === "low", marketingLanguage === "values", clientJourney === "resonance", valueProp === "transformation"].filter(Boolean).length;
    
    if (outsourcedSpecialistScore >= 2) buyingExperience = "outsourced-specialist";
    else if (outcomePartnerScore >= 2) buyingExperience = "outcome-partner";
    else if (identityEnablementScore >= 2) buyingExperience = "identity-enablement";
    
    // Determine vision affinity
    let visionAffinity = "mixed";
    const businessDesc = userAnswers.business_description;
    const excitement = userAnswers.excitement_source;
    const problemSolving = userAnswers.problem_solving;
    const contentPref = userAnswers.content_preference;
    
    const experientialScore = [businessDesc === "impact", excitement === "vision", problemSolving === "messaging", contentPref === "inspirational"].filter(Boolean).length;
    const executionalScore = [businessDesc === "systems", excitement === "implementation", problemSolving === "execution", contentPref === "systematic"].filter(Boolean).length;
    
    if (experientialScore >= 3) visionAffinity = "experiential";
    else if (executionalScore >= 3) visionAffinity = "executional";
    
    // Determine primary recommendations
    const primaryChallenge = userAnswers.main_challenge;
    const biggestStruggle = userAnswers.biggest_struggle;
    const collaborationHistory = userAnswers.collaboration_history;
    
    const results = {
      buyingExperience,
      visionAffinity,
      primaryChallenge,
      biggestStruggle,
      collaborationHistory,
      recommendations: generateRecommendations(buyingExperience, visionAffinity, primaryChallenge, biggestStruggle, collaborationHistory)
    };
    
    setResults(results);
    setShowResults(true);
  };

  const generateRecommendations = (buyingExp: string, visionAff: string, challenge: string, struggle: string, collaboration: string) => {
    const recommendations = {
      immediate: [] as string[],
      development: [] as string[],
      collaboration: [] as string[],
      resources: [] as string[]
    };
    
    // Immediate actions based on buying experience clarity
    if (buyingExp === "mixed") {
      recommendations.immediate.push("Take the detailed Niching Styles assessment to clarify which buying experience you're creating");
      recommendations.immediate.push("Review your current marketing messages and client feedback to identify patterns");
    } else {
      recommendations.immediate.push(`Focus on optimizing your ${buyingExp.replace("-", " ")} approach`);
      recommendations.immediate.push("Audit your current messaging to ensure it aligns with your identified buying experience");
    }
    
    // Development focus based on vision affinity and struggles
    if (visionAff === "experiential" && (struggle === "vision_to_systems" || challenge === "delivery")) {
      recommendations.development.push("Develop executional vision by mapping how your transformation unfolds across contexts");
      recommendations.development.push("Create systematic frameworks for delivering your experiential outcomes");
    } else if (visionAff === "executional" && (struggle === "systems_to_meaning" || challenge === "messaging")) {
      recommendations.development.push("Develop experiential vision by clarifying the transformation your systems enable");
      recommendations.development.push("Practice articulating why your systematic approach matters to people");
    } else if (visionAff === "mixed") {
      recommendations.development.push("Take the Affinity Trap assessment to identify your natural vision affinity");
      recommendations.development.push("Focus on developing one vision type before attempting to integrate both");
    }
    
    // Collaboration recommendations
    if (collaboration === "same_thinking") {
      recommendations.collaboration.push("Seek advisors with complementary vision affinity who understand dual-vision importance");
      recommendations.collaboration.push("Look for collaborators who work within your buying experience but think differently");
    } else if (collaboration === "dismissed") {
      recommendations.collaboration.push("Find advisors who understand both vision types and can build on your strengths");
      recommendations.collaboration.push("Avoid advisors who dismiss your natural affinity as 'wrong'");
    } else if (collaboration === "wrong_context") {
      recommendations.collaboration.push("Ensure advisors understand your specific buying experience before accepting guidance");
      recommendations.collaboration.push("Look for case studies in your buying experience context");
    }
    
    // Resource recommendations
    recommendations.resources.push("Complete the detailed framework assessments for personalized guidance");
    if (visionAff !== "mixed") {
      recommendations.resources.push("Explore case studies of businesses with your vision affinity");
    }
    recommendations.resources.push("Access implementation guides specific to your buying experience and vision combination");
    
    return recommendations;
  };

  const resetAssessment = () => {
    setCurrentSection(0);
    setAnswers({});
    setResults(null);
    setShowResults(false);
  };

  const getProgressPercentage = () => {
    return ((currentSection() + 1) / assessmentSections.length) * 100;
  };

  const isCurrentSectionComplete = () => {
    const currentQuestions = assessmentSections[currentSection()].questions;
    return currentQuestions.every(q => answers()[q.id]);
  };

  const getBuyingExperienceDetails = (type: string) => {
    switch (type) {
      case "outsourced-specialist":
        return {
          title: "Outsourced-Specialest Experience",
          description: "Your customers are informed buyers who know exactly what they need and can evaluate your technical expertise.",
          color: "#3498db"
        };
      case "outcome-partner":
        return {
          title: "Outcome-Partner Experience", 
          description: "Your customers know their desired outcomes but need you to bridge the gap between their vision and technical reality.",
          color: "#e67e22"
        };
      case "identity-enablement":
        return {
          title: "Identity-Enablement Experience",
          description: "Your customers are drawn to who they could become through working with you and your community.",
          color: "#9b59b6"
        };
      default:
        return {
          title: "Mixed or Unclear",
          description: "Your responses suggest you may be serving multiple buying experiences or need clarity on your primary focus.",
          color: "#95a5a6"
        };
    }
  };

  const getVisionAffinityDetails = (type: string) => {
    switch (type) {
      case "experiential":
        return {
          title: "Experiential Vision Affinity",
          description: "You naturally see business through the lens of transformation, meaning, and inspirational outcomes.",
          color: "#e74c3c"
        };
      case "executional":
        return {
          title: "Executional Vision Affinity",
          description: "You naturally see business through the lens of systems, processes, and reliable implementation.",
          color: "#3498db"
        };
      default:
        return {
          title: "Mixed or Developing Affinity",
          description: "You may be developing both vision types or need more clarity on your natural approach.",
          color: "#9b59b6"
        };
    }
  };

  return (
    <div class={styles.container}>
      <header class={styles.header}>
        <A href="/" class={styles.backLink}>← Back to Framework Overview</A>
        <h1 class={styles.title}>Business Vision Assessment</h1>
        <p class={styles.subtitle}>Discover your buying experience and vision affinity</p>
      </header>

      <Show when={!showResults()}>
        <div class={styles.assessmentContainer}>
          <div class={styles.progressSection}>
            <div class={styles.progressBar}>
              <div 
                class={styles.progressFill}
                style={{ "width": `${getProgressPercentage()}%` }}
              ></div>
            </div>
            <div class={styles.progressText}>
              Section {currentSection() + 1} of {assessmentSections.length}
            </div>
          </div>

          <div class={styles.sectionCard}>
            <div class={styles.sectionHeader}>
              <h2 class={styles.sectionTitle}>{assessmentSections[currentSection()].title}</h2>
              <p class={styles.sectionDescription}>{assessmentSections[currentSection()].description}</p>
            </div>

            <div class={styles.questionsContainer}>
              <For each={assessmentSections[currentSection()].questions}>
                {(question) => (
                  <div class={styles.questionCard}>
                    <h3 class={styles.questionText}>{question.question}</h3>
                    <div class={styles.optionsGrid}>
                      <For each={question.options}>
                        {(option) => (
                          <button
                            class={`${styles.optionButton} ${answers()[question.id] === option.value ? styles.selectedOption : ''}`}
                            onClick={() => handleAnswer(question.id, option.value)}
                          >
                            {option.text}
                          </button>
                        )}
                      </For>
                    </div>
                  </div>
                )}
              </For>
            </div>

            <div class={styles.navigationButtons}>
              <Show when={currentSection() > 0}>
                <button class={styles.prevButton} onClick={prevSection}>
                  ← Previous Section
                </button>
              </Show>
              
              <button 
                class={styles.nextButton}
                onClick={nextSection}
                disabled={!isCurrentSectionComplete()}
              >
                {currentSection() < assessmentSections.length - 1 ? "Next Section →" : "Get Results →"}
              </button>
            </div>
          </div>
        </div>
      </Show>

      <Show when={showResults() && results()}>
        <div class={styles.resultsContainer}>
          <h2 class={styles.resultsTitle}>Your Assessment Results</h2>
          
          <div class={styles.resultsGrid}>
            <div 
              class={styles.resultCard}
              style={{ "border-color": getBuyingExperienceDetails(results().buyingExperience).color }}
            >
              <h3 class={styles.resultCardTitle} style={{ "color": getBuyingExperienceDetails(results().buyingExperience).color }}>
                Your Buying Experience
              </h3>
              <h4 class={styles.resultType}>{getBuyingExperienceDetails(results().buyingExperience).title}</h4>
              <p class={styles.resultDescription}>{getBuyingExperienceDetails(results().buyingExperience).description}</p>
              <A href="/niching-styles" class={styles.exploreButton}>
                Explore Niching Styles →
              </A>
            </div>

            <div 
              class={styles.resultCard}
              style={{ "border-color": getVisionAffinityDetails(results().visionAffinity).color }}
            >
              <h3 class={styles.resultCardTitle} style={{ "color": getVisionAffinityDetails(results().visionAffinity).color }}>
                Your Vision Affinity
              </h3>
              <h4 class={styles.resultType}>{getVisionAffinityDetails(results().visionAffinity).title}</h4>
              <p class={styles.resultDescription}>{getVisionAffinityDetails(results().visionAffinity).description}</p>
              <A href="/holistic-vision" class={styles.exploreButton}>
                Explore Holistic Vision →
              </A>
            </div>
          </div>

          <div class={styles.recommendationsSection}>
            <h3 class={styles.recommendationsTitle}>Your Personalized Recommendations</h3>
            
            <div class={styles.recommendationsGrid}>
              <div class={styles.recommendationCard}>
                <h4 class={styles.recommendationCardTitle}>Immediate Actions</h4>
                <ul class={styles.recommendationList}>
                  <For each={results().recommendations.immediate}>
                    {(item) => <li>{item}</li>}
                  </For>
                </ul>
              </div>

              <div class={styles.recommendationCard}>
                <h4 class={styles.recommendationCardTitle}>Development Focus</h4>
                <ul class={styles.recommendationList}>
                  <For each={results().recommendations.development}>
                    {(item) => <li>{item}</li>}
                  </For>
                </ul>
              </div>

              <div class={styles.recommendationCard}>
                <h4 class={styles.recommendationCardTitle}>Collaboration Strategy</h4>
                <ul class={styles.recommendationList}>
                  <For each={results().recommendations.collaboration}>
                    {(item) => <li>{item}</li>}
                  </For>
                </ul>
              </div>

              <div class={styles.recommendationCard}>
                <h4 class={styles.recommendationCardTitle}>Recommended Resources</h4>
                <ul class={styles.recommendationList}>
                  <For each={results().recommendations.resources}>
                    {(item) => <li>{item}</li>}
                  </For>
                </ul>
              </div>
            </div>
          </div>

          <div class={styles.nextStepsSection}>
            <h3 class={styles.nextStepsTitle}>Continue Your Journey</h3>
            <div class={styles.nextStepsActions}>
              <A href="/affinity-trap" class={styles.affinityButton}>
                Take Affinity Trap Assessment
              </A>
              <A href="/implementation-guide" class={styles.implementationButton}>
                Get Implementation Guide
              </A>
              <button class={styles.retakeButton} onClick={resetAssessment}>
                Retake Assessment
              </button>
            </div>
          </div>
        </div>
      </Show>
    </div>
  );
};

export default Assessment;