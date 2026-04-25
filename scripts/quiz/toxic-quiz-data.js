// ENHYPEN Toxic Traits Quiz
const TOXIC_QUIZ = {
    questions: [
        {
            question: "What's your most toxic habit?",
            image: "images/quiz/toxic/q1.jpg",
            options: [
                { text: "Overthinking everything", song: "fever" },
                { text: "Pushing people away", song: "given-taken" },
                { text: "Getting attached too fast", song: "polaroid-love" },
                { text: "Acting like I don't care (but I do)", song: "bite-me" },
                { text: "Trust issues", song: "drunk-dazed" },
                { text: "Mood swings", song: "sacrifice" },
                { text: "Wanting control", song: "future-perfect" }
            ]
        },
        {
            question: "In relationships, you tend to:",
            image: "images/quiz/toxic/q2.jpg",
            options: [
                { text: "Overanalyze every little thing", song: "fever" },
                { text: "Pull away when it gets serious", song: "given-taken" },
                { text: "Fall too hard, too fast", song: "polaroid-love" },
                { text: "Act nonchalant", song: "bite-me" },
                { text: "Doubt everything", song: "drunk-dazed" },
                { text: "Go from 0 to 100 emotionally", song: "sacrifice" },
                { text: "Try to take control", song: "future-perfect" }
            ]
        },
        {
            question: "Pick a quote:",
            image: "images/quiz/toxic/q3.jpg",
            options: [
                { text: "“What if I mess everything up?”", song: "fever" },
                { text: "“I don’t need anyone.”", song: "given-taken" },
                { text: "“I fall too easily.”", song: "polaroid-love" },
                { text: "“I’m fine.” (you’re not)", song: "bite-me" },
                { text: "“Something feels off…”", song: "drunk-dazed" },
                { text: "“I can’t control my emotions.”", song: "sacrifice" },
                { text: "“I need things my way.”", song: "future-perfect" }
            ]
        },
        {
            question: "Your energy is closest to:",
            image: "images/quiz/toxic/q4.jpg",
            options: [
                { text: "Anxious and intense", song: "fever" },
                { text: "Cold but guarded", song: "given-taken" },
                { text: "Soft but overwhelming", song: "polaroid-love" },
                { text: "Chill but distant", song: "bite-me" },
                { text: "Confused and chaotic", song: "drunk-dazed" },
                { text: "Emotional rollercoaster", song: "sacrifice" },
                { text: "Dominant and strong", song: "future-perfect" }
            ]
        },
        {
            question: "What scares you most?",
            image: "images/quiz/toxic/q5.jpg",
            options: [
                { text: "Losing control of my thoughts", song: "fever" },
                { text: "Getting hurt", song: "given-taken" },
                { text: "Being alone", song: "polaroid-love" },
                { text: "Being vulnerable", song: "bite-me" },
                { text: "Not knowing the truth", song: "drunk-dazed" },
                { text: "My own emotions", song: "sacrifice" },
                { text: "Losing power", song: "future-perfect" }
            ]
        },
        {
            question: "How do you deal with conflict?",
            image: "images/quiz/toxic/q6.jpg",
            options: [
                { text: "Overthink it for days", song: "fever" },
                { text: "Avoid it completely", song: "given-taken" },
                { text: "Get emotional quickly", song: "polaroid-love" },
                { text: "Act unbothered", song: "bite-me" },
                { text: "Question everything", song: "drunk-dazed" },
                { text: "Explode then regret it", song: "sacrifice" },
                { text: "Take control of the situation", song: "future-perfect" }
            ]
        },
        {
            question: "Pick a vibe:",
            image: "images/quiz/toxic/q7.jpg",
            options: [
                { text: "Late night thoughts", song: "fever" },
                { text: "Walking alone in the dark", song: "given-taken" },
                { text: "Soft love but chaotic inside", song: "polaroid-love" },
                { text: "Cold silence", song: "bite-me" },
                { text: "Spinning thoughts", song: "drunk-dazed" },
                { text: "Crying at 3am", song: "sacrifice" },
                { text: "Power moves only", song: "future-perfect" }
            ]
        },
        {
            question: "What do people misunderstand about you?",
            image: "images/quiz/toxic/q8.jpg",
            options: [
                { text: "I care too much", song: "fever" },
                { text: "I push people away on purpose", song: "given-taken" },
                { text: "I feel things deeply", song: "polaroid-love" },
                { text: "I’m not as cold as I seem", song: "bite-me" },
                { text: "I’m always overthinking", song: "drunk-dazed" },
                { text: "I can’t control my feelings", song: "sacrifice" },
                { text: "I like being in control", song: "future-perfect" }
            ]
        },
        {
            question: "Pick a color:",
            image: "images/quiz/toxic/q9.jpg",
            options: [
                { text: "Deep red", song: "fever" },
                { text: "Black", song: "given-taken" },
                { text: "Soft pink", song: "polaroid-love" },
                { text: "Dark blue", song: "bite-me" },
                { text: "Neon chaos", song: "drunk-dazed" },
                { text: "Crimson", song: "sacrifice" },
                { text: "Silver", song: "future-perfect" }
            ]
        },
        {
            question: "Your toxic trait in one sentence:",
            image: "images/quiz/toxic/q10.jpg",
            options: [
                { text: "I think too much.", song: "fever" },
                { text: "I run away.", song: "given-taken" },
                { text: "I get attached too easily.", song: "polaroid-love" },
                { text: "I hide how I feel.", song: "bite-me" },
                { text: "I don’t trust easily.", song: "drunk-dazed" },
                { text: "I feel too much.", song: "sacrifice" },
                { text: "I need control.", song: "future-perfect" }
            ]
        }
    ],

    results: {
        "fever": {
            name: "FEVER",
            image: "images/quiz/toxic/fever.jpg",
            description: "You're FEVER - intense, emotional, and constantly overthinking. You feel everything deeply, sometimes too deeply, and your thoughts can consume you. Your biggest strength is also your weakness."
        },
        "given-taken": {
            name: "GIVEN-TAKEN",
            image: "images/quiz/toxic/given-taken.jpg",
            description: "You're GIVEN-TAKEN - guarded, distant, and hard to read. You push people away before they can hurt you. You crave connection, but fear it at the same time."
        },
        "polaroid-love": {
            name: "POLAROID LOVE",
            image: "images/quiz/toxic/polaroid-love.jpg",
            description: "You're POLAROID LOVE - soft, affectionate, and easily attached. You love deeply and quickly, sometimes ignoring red flags. Your heart leads everything you do."
        },
        "bite-me": {
            name: "BITE ME",
            image: "images/quiz/toxic/bite-me.jpg",
            description: "You're BITE ME - calm on the outside, distant on the inside. You act like nothing affects you, but you hide a lot beneath the surface. People can’t easily read you."
        },
        "drunk-dazed": {
            name: "DRUNK-DAZED",
            image: "images/quiz/toxic/drunk-dazed.jpg",
            description: "You're DRUNK-DAZED - chaotic, confused, and stuck in your own thoughts. You question everything and trust very little. Your mind never really rests."
        },
        "sacrifice": {
            name: "SACRIFICE (EAT ME UP)",
            image: "images/quiz/toxic/sacrifice.jpg",
            description: "You're SACRIFICE - emotional, intense, and overwhelming. You feel everything at 100%, which can be both beautiful and destructive. You struggle to control your emotions."
        },
        "future-perfect": {
            name: "FUTURE PERFECT (PASS THE MIC)",
            image: "images/quiz/toxic/future-perfect.jpg",
            description: "You're FUTURE PERFECT - strong, dominant, and control-driven. You like things your way and don’t easily give up control. Your confidence is powerful, but can be intimidating."
        }
    }
};
