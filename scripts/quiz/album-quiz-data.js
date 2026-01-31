// ENHYPEN Album Quiz Questions and Results
const ALBUM_QUIZ = {
    questions: [
        {
            question: "What's your usual vibe?",
            image: "images/quiz/album/q1.jpg",
            options: [
                { text: "Soft, curious, discovering myself", album: "border-day-one" },
                { text: "Playful, confident, full of excitement", album: "border-carnival" },
                { text: "Energetic, chaotic, figuring things out", album: "dimension-dilemma" },
                { text: "Bold, rebellious, ready to speak up", album: "manifesto" },
                { text: "Dark, emotional, deep-feeling", album: "dark-blood" },
                { text: "Youthful, bright, warm-hearted", album: "orange-blood" },
                { text: "Dreamy, romantic, soft elegance", album: "romance-untold" },
                { text: "Alluring, mysterious, intense", album: "desire-unleash" }
            ]
        },
        {
            question: "Pick a color palette:",
            image: "images/quiz/album/q2.jpg",
            options: [
                { text: "Soft pastels", album: "border-day-one" },
                { text: "Bright neons", album: "border-carnival" },
                { text: "Vibrant mixed colors", album: "dimension-dilemma" },
                { text: "Reds and blacks", album: "manifesto" },
                { text: "Deep purples & dark reds", album: "dark-blood" },
                { text: "Orange, peach, golden hues", album: "orange-blood" },
                { text: "Blush roses & warm pinks", album: "romance-untold" },
                { text: "Black, silver, midnight tones", album: "desire-unleash" }
            ]
        },
        {
             question: "What motivates you the most?",
            image: "images/quiz/album/q3.jpg",
            options: [
                { text: "Curiosity & new beginnings", album: "border-day-one" },
                { text: "Fun & adventure with friends", album: "border-carnival" },
                { text: "Growth & self-discovery", album: "dimension-dilemma" },
                { text: "Standing up for myself", album: "manifesto" },
                { text: "Emotions that run deep", album: "dark-blood" },
                { text: "Warm, uplifting moments", album: "orange-blood" },
                { text: "Love & connection", album: "romance-untold" },
                { text: "Desire, charisma & ambition", album: "desire-unleash" }
            ]
        },
        {
            question: "Choose a setting:",
            image: "images/quiz/album/q4.jpg",
            options: [
                { text: "A dreamy dawn morning", album: "border-day-one" },
                { text: "A fun carnival night", album: "border-carnival" },
                { text: "A busy colorful city", album: "dimension-dilemma" },
                { text: "A rooftop rebellion meetup", album: "manifesto" },
                { text: "A gothic cathedral or forest", album: "dark-blood" },
                { text: "A warm sunset beach", album: "orange-blood" },
                { text: "A romantic quiet café", album: "romance-untold" },
                { text: "A mysterious moonlit corridor", album: "desire-unleash" }
            ]
        },
        {
             question: "Your friends see you as someone who is:",
            image: "images/quiz/album/q5.jpg",
            options: [
                { text: "Sweet and innocent", album: "border-day-one" },
                { text: "Wild and entertaining", album: "border-carnival" },
                { text: "Chaotic but lovable", album: "dimension-dilemma" },
                { text: "Strong-willed and bold", album: "manifesto" },
                { text: "Mysterious and deep", album: "dark-blood" },
                { text: "Bright and uplifting", album: "orange-blood" },
                { text: "Soft and romantic", album: "romance-untold" },
                { text: "Magnetic and powerful", album: "desire-unleash" }
            ]
        },
        {
            question: "What type of storyline draws you in?",
            image: "images/quiz/album/q6.jpg",
            options: [
                { text: "Coming-of-age beginnings", album: "border-day-one" },
                { text: "Colorful adventures", album: "border-carnival" },
                { text: "Internal conflict & choices", album: "dimension-dilemma" },
                { text: "Rebellion & empowerment", album: "manifesto" },
                { text: "Dark romance & fate", album: "dark-blood" },
                { text: "Youth, comfort & hope", album: "orange-blood" },
                { text: "Romantic fairytale vibes", album: "romance-untold" },
                { text: "Temptation & irresistible allure", album: "desire-unleash" }
            ]
        },
        {
            question: "Pick a symbol:",
            image: "images/quiz/album/q7.jpg",
            options: [
                { text: "Dawn light", album: "border-day-one" },
                { text: "Neon carnival lights", album: "border-carnival" },
                { text: "A compass", album: "dimension-dilemma" },
                { text: "A megaphone", album: "manifesto" },
                { text: "A crimson rose", album: "dark-blood" },
                { text: "A glowing fruit", album: "orange-blood" },
                { text: "A handwritten letter", album: "romance-untold" },
                { text: "A locked door in the dark", album: "desire-unleash" }
            ]
        },
       {
           question: "Choose a quote:",
            image: "images/quiz/album/q8.jpg",
            options: [
                { text: "“Every beginning starts with a spark.”", album: "border-day-one" },
                { text: "“Life is a carnival—let’s enjoy it.”", album: "border-carnival" },
                { text: "“I’m figuring it all out step by step.”", album: "dimension-dilemma" },
                { text: "“No more silence—this is my voice.”", album: "manifesto" },
                { text: "“My heart beats in the shadows.”", album: "dark-blood" },
                { text: "“Warmth will always find its way back.”", album: "orange-blood" },
                { text: "“Love writes its own story.”", album: "romance-untold" },
                { text: "“Desire fuels destiny.”", album: "desire-unleash" }
            ]
        },
       {
           question: "Pick a mood for today:",
            image: "images/quiz/album/q9.jpg",
            options: [
                { text: "Soft & peaceful", album: "border-day-one" },
                { text: "Fun & goofy", album: "border-carnival" },
                { text: "Confused but trying", album: "dimension-dilemma" },
                { text: "Independent & powerful", album: "manifesto" },
                { text: "Emotional & intense", album: "dark-blood" },
                { text: "Chill & happy", album: "orange-blood" },
                { text: "Romantic & gentle", album: "romance-untold" },
                { text: "Bold & seductive", album: "desire-unleash" }
            ]
        },
       {
           question: "What energy do you naturally give off?",
            image: "images/quiz/album/q10.jpg",
            options: [
                { text: "Innocent beginnings", album: "border-day-one" },
                { text: "Vibrant joy", album: "border-carnival" },
                { text: "Youthful chaos", album: "dimension-dilemma" },
                { text: "Brave independence", album: "manifesto" },
                { text: "Dark enchantment", album: "dark-blood" },
                { text: "Warm positivity", album: "orange-blood" },
                { text: "Romantic softness", album: "romance-untold" },
                { text: "Irresistible intensity", album: "desire-unleash" }
            ]
        }
    ],

    results: {
        "border-day-one": {
            name: "BORDER : DAY ONE",
            image: "images/quiz/album/border-day-one.jpg",
            description: "You're BORDER DAY ONE - soft, youthful, and full of curiosity. You carry the energy of new beginnings, innocence, and quiet determination. Your gentle heart makes people feel safe and inspired."
        },
        "border-carnival": {
            name: "BORDER : CARNIVAL",
            image: "images/quiz/album/border-carnival.jpg",
            description: "You're BORDER CARNIVAL - vibrant, bold, and so much fun to be around! You light up every room with your playful charm and colorful personality. Life feels like a celebration when you're there."
        },
        "dimension-dilemma": {
            name: "DIMENSION : DILEMMA",
            image: "images/quiz/album/dimension-dilemma.jpg",
            description: "You're DIMENSION DILEMMA - energetic, chaotic, and endlessly growing. You're in your self discovery era, exploring who you are, what you want, and where you want to go next."
        },
        "manifesto": {
            name: "MANIFESTO : DAY 1",
            image: "images/quiz/album/manifesto.jpg",
            description: "You're MANIFESTO DAY 1 - bold, loud, and unapologetically yourself. You're done staying quiet, you speak your truth and live life on your own terms."
        },
        "dark-blood": {
            name: "DARK BLOOD",
            image: "images/quiz/album/dark-blood.jpg",
            description: "You're DARK BLOOD - enchanting, emotional, and deeply intense. You feel things strongly and love fiercely. Your energy is magnetic, mysterious, and unforgettable."
        },
        "orange-blood": {
            name: "ORANGE BLOOD",
            image: "images/quiz/album/orange-blood.jpg",
            description: "You're ORANGE BLOOD - warm, bright, and full of hope. You bring comfort wherever you go. Your presence feels like a soft sunset glow."
        },
        "romance-untold": {
            name: "ROMANCE : UNTOLD",
            image: "images/quiz/album/romance-untold.jpg",
            description: "You're ROMANCE UNTOLD - gentle, dreamy, and sentimental. You love deeply and express yourself through quiet emotions. You make simple moments feel magical."
        },
    "desire-unleash": {
            name: "DESIRE: UNLEASH",
            image: "images/quiz/album/desire-unleash.jpg",
            description: "You're DESIRE UNLEASH - passionate, powerful, and impossible to ignore. You radiate confidence and magnetic charm. When you want something, nothing can stop you."
        }
    }
};