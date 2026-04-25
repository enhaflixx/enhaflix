// ENHYPEN Role Quiz Questions and Results
const ROLE_QUIZ = {
    questions: [
        {
            question: "What's your strongest trait?",
            image: "images/quiz/role/q1.jpg",
            options: [
                { text: "Leadership & responsibility", role: "leader" },
                { text: "Confidence & stage presence", role: "center" },
                { text: "Emotion & expression", role: "main-vocal" },
                { text: "Energy & movement", role: "main-dancer" },
                { text: "Charisma & visuals", role: "visual" },
                { text: "Humor & chaos", role: "variety-king" },
                { text: "Quiet strength & support", role: "all-rounder" }
            ]
        },
        {
            question: "In a group project, you are:",
            image: "images/quiz/role/q2.jpg",
            options: [
                { text: "The one organizing everything", role: "leader" },
                { text: "The one everyone notices first", role: "center" },
                { text: "The one adding emotional depth", role: "main-vocal" },
                { text: "The one doing the most active work", role: "main-dancer" },
                { text: "The one making it look aesthetic", role: "visual" },
                { text: "The one making everyone laugh", role: "variety-king" },
                { text: "The one helping everywhere quietly", role: "all-rounder" }
            ]
        },
        {
            question: "Pick a stage vibe:",
            image: "images/quiz/role/q3.jpg",
            options: [
                { text: "Powerful and controlled", role: "leader" },
                { text: "Eye-catching and magnetic", role: "center" },
                { text: "Emotional and soulful", role: "main-vocal" },
                { text: "Sharp and energetic", role: "main-dancer" },
                { text: "Elegant and captivating", role: "visual" },
                { text: "Fun and unpredictable", role: "variety-king" },
                { text: "Balanced and versatile", role: "all-rounder" }
            ]
        },
        {
            question: "Your friends describe you as:",
            image: "images/quiz/role/q4.jpg",
            options: [
                { text: "Reliable and mature", role: "leader" },
                { text: "Charming and popular", role: "center" },
                { text: "Sensitive and expressive", role: "main-vocal" },
                { text: "Hyper and active", role: "main-dancer" },
                { text: "Beautiful and aesthetic", role: "visual" },
                { text: "Crackhead energy", role: "variety-king" },
                { text: "Good at everything", role: "all-rounder" }
            ]
        },
        {
            question: "What motivates you most?",
            image: "images/quiz/role/q5.jpg",
            options: [
                { text: "Taking care of others", role: "leader" },
                { text: "Being admired", role: "center" },
                { text: "Expressing feelings", role: "main-vocal" },
                { text: "Performing perfectly", role: "main-dancer" },
                { text: "Looking your best", role: "visual" },
                { text: "Having fun", role: "variety-king" },
                { text: "Improving constantly", role: "all-rounder" }
            ]
        },
        {
            question: "Pick a concept:",
            image: "images/quiz/role/q6.jpg",
            options: [
                { text: "Strong leader aura", role: "leader" },
                { text: "Main character energy", role: "center" },
                { text: "Emotional storytelling", role: "main-vocal" },
                { text: "Dance-focused performance", role: "main-dancer" },
                { text: "Visual masterpiece", role: "visual" },
                { text: "Chaotic variety show", role: "variety-king" },
                { text: "All concepts suit me", role: "all-rounder" }
            ]
        },
        {
            question: "Your biggest strength is:",
            image: "images/quiz/role/q7.jpg",
            options: [
                { text: "Decision making", role: "leader" },
                { text: "Confidence", role: "center" },
                { text: "Voice/emotion", role: "main-vocal" },
                { text: "Body control", role: "main-dancer" },
                { text: "Appearance/aura", role: "visual" },
                { text: "Humor", role: "variety-king" },
                { text: "Versatility", role: "all-rounder" }
            ]
        },
        {
            question: "Pick a quote:",
            image: "images/quiz/role/q8.jpg",
            options: [
                { text: "“I’ll lead us forward.”", role: "leader" },
                { text: "“All eyes on me.”", role: "center" },
                { text: "“Feel every moment.”", role: "main-vocal" },
                { text: "“Watch my moves.”", role: "main-dancer" },
                { text: "“Beauty is power.”", role: "visual" },
                { text: "“Let’s make it fun.”", role: "variety-king" },
                { text: "“I can do it all.”", role: "all-rounder" }
            ]
        },
        {
            question: "What role do you naturally take?",
            image: "images/quiz/role/q9.jpg",
            options: [
                { text: "Guiding others", role: "leader" },
                { text: "Standing out", role: "center" },
                { text: "Expressing emotions", role: "main-vocal" },
                { text: "Performing", role: "main-dancer" },
                { text: "Being admired", role: "visual" },
                { text: "Entertaining", role: "variety-king" },
                { text: "Adapting everywhere", role: "all-rounder" }
            ]
        },
        {
            question: "What energy do you give off?",
            image: "images/quiz/role/q10.jpg",
            options: [
                { text: "Calm leader energy", role: "leader" },
                { text: "Main character energy", role: "center" },
                { text: "Emotional depth", role: "main-vocal" },
                { text: "Explosive energy", role: "main-dancer" },
                { text: "Visual aura", role: "visual" },
                { text: "Chaotic fun", role: "variety-king" },
                { text: "Balanced energy", role: "all-rounder" }
            ]
        }
    ],

    results: {
        "leader": {
            name: "LEADER",
            image: "images/quiz/role/leader.jpg",
            description: "You're the LEADER - responsible, calm, and someone people naturally rely on. You guide others with quiet strength and always think about the team before yourself. Your presence keeps everything stable."
        },
        "center": {
            name: "CENTER",
            image: "images/quiz/role/center.jpg",
            description: "You're the CENTER - confident, magnetic, and impossible to ignore. You naturally draw attention and shine in every situation. People are drawn to your energy without you even trying."
        },
        "main-vocal": {
            name: "MAIN VOCAL",
            image: "images/quiz/role/main-vocal.jpg",
            description: "You're the MAIN VOCAL - emotional, expressive, and deeply connected to your feelings. You bring meaning and depth to everything you do. Your energy touches people’s hearts."
        },
        "main-dancer": {
            name: "MAIN DANCER",
            image: "images/quiz/role/main-dancer.jpg",
            description: "You're the MAIN DANCER - energetic, sharp, and full of passion. You express yourself through movement and action. Your energy is powerful and impossible to miss."
        },
        "visual": {
            name: "VISUAL",
            image: "images/quiz/role/visual.jpg",
            description: "You're the VISUAL - elegant, captivating, and naturally attractive. Your aura draws people in, and you leave a lasting impression wherever you go."
        },
        "variety-king": {
            name: "VARIETY KING",
            image: "images/quiz/role/variety-king.jpg",
            description: "You're the VARIETY KING - chaotic, funny, and the life of every group. You bring joy and laughter everywhere, making even the most boring moments entertaining."
        },
        "all-rounder": {
            name: "ALL-ROUNDER",
            image: "images/quiz/role/all-rounder.jpg",
            description: "You're the ALL-ROUNDER - adaptable, talented, and good at everything. You can handle any situation and shine in every role. You're the backbone of the team."
        }
    }
};
