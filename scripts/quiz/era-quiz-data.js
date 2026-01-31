// ENHYPEN Era Quiz Questions and Results
const ERA_QUIZ = {
    questions: [
        {
            question: "What's your ideal weekend activity?",
            image: "images/quiz/era/weekend.jpg",
            options: [
                { text: "Relaxing in your room with music", era: "border-day-one" },
                { text: "Exploring new places and adventures", era: "border-carnival" },
                { text: "Creative projects and making art", era: "dimension-dilemma" },
                { text: "Intense workouts and challenges", era: "manifesto" },
                { text: "Elegant dinners with mysterious vibes", era: "dark-blood" },
                { text: "Bright festivals with friends", era: "orange-blood" },
                { text: "Deep conversations and romance", era: "romance-untold" },
                { text: "Doing something bold and thrilling", era: "desire-unleash" }
            ]
        },
        {
            question: "Which superpower would you choose?",
            image: "images/quiz/era/superpower.jpg",
            options: [
                { text: "Resetting time or starting fresh", era: "border-day-one" },
                { text: "Teleporting anywhere instantly", era: "border-carnival" },
                { text: "Time manipulation and decision control", era: "dimension-dilemma" },
                { text: "Super strength and fearlessness", era: "manifesto" },
                { text: "Vampire abilities and immortality", era: "dark-blood" },
                { text: "Creating warmth, joy, and light", era: "orange-blood" },
                { text: "Love empathy and emotional reading", era: "romance-untold" },
                { text: "Manifesting your desires into reality", era: "desire-unleash" }
            ]
        },
        {
             question: "Which vibe describes you best?",
            image: "images/quiz/era/vibe.jpg",
            options: [
                { text: "Soft, shy, comforting energy", era: "border-day-one" },
                { text: "Playful, bright, chaotic fun", era: "border-carnival" },
                { text: "Conflicted but artistic and deep", era: "dimension-dilemma" },
                { text: "Bold, loud, and rebellious", era: "manifesto" },
                { text: "Mysterious, elegant, alluring", era: "dark-blood" },
                { text: "Sunny, cheerful, friendly", era: "orange-blood" },
                { text: "Dreamy, romantic, aesthetic", era: "romance-untold" },
                { text: "Intense, passionate, magnetic", era: "desire-unleash" }
            ]
        },
        {
            question: "Pick an aesthetic:",
            image: "images/quiz/era/aesthetic.jpg",
            options: [
                { text: "Soft blue + youth nostalgia", era: "border-day-one" },
                { text: "Neon lights + carnival energy", era: "border-carnival" },
                { text: "Green mirrors + duality themes", era: "dimension-dilemma" },
                { text: "Graffiti + street rebellion", era: "manifesto" },
                { text: "Crimson gothic elegance", era: "dark-blood" },
                { text: "Warm oranges & playful glow", era: "orange-blood" },
                { text: "Pink florals & gentle romance", era: "romance-untold" },
                { text: "Black-gold allure & temptation", era: "desire-unleash" }
            ]
        },
        {
            question: "What motivates you the most?",
            image: "images/quiz/era/motivation.jpg",
            options: [
                { text: "Starting a new chapter", era: "border-day-one" },
                { text: "Adventure and curiosity", era: "border-carnival" },
                { text: "Understanding your inner self", era: "dimension-dilemma" },
                { text: "Proving your power & courage", era: "manifesto" },
                { text: "Love, loyalty, deep bonds", era: "dark-blood" },
                { text: "Spreading joy & positivity", era: "orange-blood" },
                { text: "Emotions, beauty, connection", era: "romance-untold" },
                { text: "Desire, ambition, passion", era: "desire-unleash" }
            ]
        },
        {
            question: "Choose a concept for your photoshoot:",
            image: "images/quiz/era/photoshoot.jpg",
            options: [
                { text: "Soft, natural lighting & comfort", era: "border-day-one" },
                { text: "Fun carnival lights & candid shots", era: "border-carnival" },
                { text: "Mirror reflections & dual themes", era: "dimension-dilemma" },
                { text: "Street style rebellion", era: "manifesto" },
                { text: "Dark gothic fantasy", era: "dark-blood" },
                { text: "Sunny, bright, spring-like warmth", era: "orange-blood" },
                { text: "Romantic pastels & dreamy tones", era: "romance-untold" },
                { text: "Sultry, intense, alluring aesthetics", era: "desire-unleash" }
            ]
        },
        {
            question: "Pick a music vibe:",
            image: "images/quiz/era/music.jpg",
            options: [
                { text: "Soft pop with youthful innocence", era: "border-day-one" },
                { text: "Energetic EDM & fun beats", era: "border-carnival" },
                { text: "Moody, emotional, thoughtful", era: "dimension-dilemma" },
                { text: "Loud, powerful, confident", era: "manifesto" },
                { text: "Dark, haunting, dramatic", era: "dark-blood" },
                { text: "Bright, funky, uplifting", era: "orange-blood" },
                { text: "Romantic, gentle, emotional", era: "romance-untold" },
                { text: "Seductive, intense, bold", era: "desire-unleash" }
            ]
        },
       {
           question: "Which outfit fits your personality?",
            image: "images/quiz/era/outfit.jpg",
            options: [
                { text: "Soft sweaters + comfy jeans", era: "border-day-one" },
                { text: "Colorful streetwear + accessories", era: "border-carnival" },
                { text: "Neutral outfits with layered details", era: "dimension-dilemma" },
                { text: "All black, bold, and edgy", era: "manifesto" },
                { text: "Royal, elegant, gothic clothes", era: "dark-blood" },
                { text: "Warm toned, casual bright looks", era: "orange-blood" },
                { text: "Soft romantic dresses or pastels", era: "romance-untold" },
                { text: "Sleek, seductive, dramatic style", era: "desire-unleash" }
            ]
        },
       {
           question: "What kind of story defines you?",
            image: "images/quiz/era/story.jpg",
            options: [
                { text: "A sweet beginning of self-discovery", era: "border-day-one" },
                { text: "A fun adventure with unexpected twists", era: "border-carnival" },
                { text: "A deep journey to understand yourself", era: "dimension-dilemma" },
                { text: "A rebellion where you find your strength", era: "manifesto" },
                { text: "A dark fantasy full of loyalty and fate", era: "dark-blood" },
                { text: "A warm story of joy & friendship", era: "orange-blood" },
                { text: "A romantic tale full of emotion", era: "romance-untold" },
                { text: "A passionate story of desire & ambition", era: "desire-unleash" }
            ]
        },
       {
           question: "How do you handle challenges?",
            image: "images/quiz/era/challenges.jpg",
            options: [
                { text: "Stay calm and try your best", era: "border-day-one" },
                { text: "Laugh it off and keep moving", era: "border-carnival" },
                { text: "Overthink but eventually grow from it", era: "dimension-dilemma" },
                { text: "Face it head-on with confidence", era: "manifesto" },
                { text: "Stay mysterious and strategic", era: "dark-blood" },
                { text: "Stay positive and spread warmth", era: "orange-blood" },
                { text: "Follow your heart and emotions", era: "romance-untold" },
                { text: "Go all in with passion and intensity", era: "desire-unleash" }
            ]
        }
    ],

    results: {
        "border-day-one": {
            name: "BORDER : DAY ONE",
            image: "images/quiz/era/border-day-one.jpg",
            description: "You're BORDER : DAY ONE - the beginning of an incredible journey! Like ENHYPEN's debut era, you're full of potential and starting an amazing adventure. You have a fresh, youthful energy that draws people in, and you're not afraid to step into new territories. Your journey is just beginning, and great things are ahead!"
        },
        "border-carnival": {
            name: "BORDER : CARNIVAL",
            image: "images/quiz/era/border-carnival.jpg",
            description: "You're BORDER : CARNIVAL - full of vibrant energy and playful charm! Like this colorful era, you bring excitement and joy wherever you go. You know how to turn ordinary moments into extraordinary celebrations. Your energetic personality and ability to adapt make you the life of any party!"
        },
        "dimension-dilemma": {
            name: "DIMENSION : DILEMMA",
            image: "images/quiz/era/dimension-dilemma.jpg",
            description: "You're DIMENSION : DILEMMA - complex, thoughtful, and full of depth! Like this conceptual era, you're always thinking about the bigger picture and exploring different perspectives. You have a futuristic mindset and aren't afraid to question the world around you. Your intellectual curiosity and unique outlook set you apart!"
        },
        "manifesto": {
            name: "MANIFESTO : DAY 1",
            image: "images/quiz/era/manifesto.jpg",
            description: "You're MANIFESTO : DAY 1 - confident, powerful, and unapologetically yourself! Like this bold era, you stand strong in your beliefs and aren't afraid to take charge. You have a rebellious spirit combined with a clear sense of purpose. Your determination and strength inspire those around you!"
        },
        "dark-blood": {
            name: "DARK BLOOD",
            image: "images/quiz/era/dark-blood.jpg",
            description: "You're DARK BLOOD - mysterious, elegant, and intensely passionate! Like this vampire-themed era, you have a captivating aura that draws people in. There's depth to your personality that others find intriguing. You embrace the darker, more intense aspects of life with sophistication and grace!"
        },
        "orange-blood": {
            name: "ORANGE BLOOD",
            image: "images/quiz/era/orange-blood.jpg",
            description: "You're ORANGE BLOOD - warm, bright, and full of positive energy! Like this sunny era, you radiate warmth and happiness that comforts everyone around you. You believe in the power of connection and spreading joy. Your optimistic outlook and genuine care for others make you a true source of light!"
        },
        "romance-untold": {
            name: "ROMANCE : UNTOLD",
            image: "images/quiz/era/romance-untold.jpg",
            description: "You're ROMANCE : UNTOLD – gentle, dreamy, and full of quiet magic. Just like this soft, emotional era, you carry a warmth that draws people in. You feel things deeply and express them beautifully, whether through your words, actions, or presence. Your romantic nature turns simple moments into meaningful memories, and your kindness makes others feel truly seen!"
        },
    "desire-unleash": {
            name: "DESIRE: UNLEASH",
            image: "images/quiz/era/desire-unleash.jpg",
            description: "You're DESIRE : UNLEASH – intense, passionate, and impossible to ignore. Like this bold, alluring era, you have a powerful presence that captivates everyone around you. You know what you want and you're not afraid to chase it with full force. Your confidence, ambition, and magnetic energy make you unforgettable, leaving a lasting impression wherever you go!"
        }
    }
};