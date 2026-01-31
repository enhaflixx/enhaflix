// DARK MOON Character Quiz Questions and Results
const MOON_QUIZ = {
    questions: [
        {
            question: "How would friends describe you?",
            image: "images/quiz/darkmoon/q1.jpg",
            options: [
                { text: "Strong but gentle", moon: "heli" },
                { text: "Stylish and confident", moon: "jaan" },
                { text: "Sweet and loyal", moon: "jino" },
                { text: "Calm and elegant", moon: "solon" },
                { text: "Bright and radiant", moon: "shion" },
                { text: "Quiet but observant", moon: "jakah" },
                { text: "Playful and fierce", moon: "noa" },
                { text: "Kind and brave", moon: "sooha" }
            ]
        },
        {
            question: "What type of power would you choose?",
            image: "images/quiz/darkmoon/q2.jpg",
            options: [
                { text: "Super strength", moon: "heli" },
                { text: "Fire manipulation", moon: "jaan" },
                { text: "Healing", moon: "jino" },
                { text: "Ice powers", moon: "solon" },
                { text: "Light & aura energy", moon: "shion" },
                { text: "Enhanced senses", moon: "jakah" },
                { text: "Shadow speed", moon: "noa" },
                { text: "Pure soul protection", moon: "sooha" }
            ]
        },
        {
             question: "Which setting feels most like home?",
            image: "images/quiz/darkmoon/q3.jpg",
            options: [
                { text: "Grand hall with warm lights", moon: "heli" },
                { text: "Luxurious modern mansion", moon: "jaan" },
                { text: "A cozy garden", moon: "jino" },
                { text: "A quiet snowy forest", moon: "solon" },
                { text: "A bright open field", moon: "shion" },
                { text: "A hidden library corner", moon: "jakah" },
                { text: "A rooftop under the moon", moon: "noa" },
                { text: "Anywhere with the people you love", moon: "sooha" }
            ]
        },
        {
             question: "How do you handle danger?",
            image: "images/quiz/darkmoon/q4.jpg",
            options: [
                { text: "Protect everyone instantly", moon: "heli" },
                { text: "Charge without fear", moon: "jaan" },
                { text: "Stay calm and think first", moon: "jino" },
                { text: "Observe quietly and strike precisely", moon: "solon" },
                { text: "Try to keep everyone together", moon: "shion" },
                { text: "Stay alert and analyze", moon: "jakah" },
                { text: "Move fast and confuse the enemy", moon: "noa" },
                { text: "Stand your ground even if you're scared", moon: "sooha" }
            ]
        },
        {
           question: "What do you value most?",
            image: "images/quiz/darkmoon/q5.jpg",
            options: [
                { text: "Strength and responsibility", moon: "heli" },
                { text: "Passion and identity", moon: "jaan" },
                { text: "Loyalty and warmth", moon: "jino" },
                { text: "Peace and self-control", moon: "solon" },
                { text: "Hope and positivity", moon: "shion" },
                { text: "Wisdom and patience", moon: "jakah" },
                { text: "Freedom and instinct", moon: "noa" },
                { text: "Love and courage", moon: "sooha" }
            ]
        },
        {
            question: "Choose a color:",
            image: "images/quiz/darkmoon/q6.jpg",
            options: [
                { text: "Gold", moon: "heli" },
                { text: "Red", moon: "jaan" },
                { text: "Green", moon: "jino" },
                { text: "White", character: "solon" },
                { text: "Yellow", moon: "shion" },
                { text: "Blue", moon: "jakah" },
                { text: "Black", moon: "noa" },
                { text: "Pink", moon: "sooha" }
            ]
        },
        {
            question: "Pick a hobby:",
            image: "images/quiz/darkmoon/q7.jpg",
            options: [
                { text: "Training or working out", moon: "heli" },
                { text: "Collecting stylish things", moon: "jaan" },
                { text: "Helping others", moon: "jino" },
                { text: "Skating or cold-weather sports", moon: "solon" },
                { text: "Taking selfies and smiling", moon: "shion" },
                { text: "Reading or studying", moon: "jakah" },
                { text: "Dancing or parkour", moon: "noa" },
                { text: "Drawing or journaling", moon: "sooha" }
            ]
        },
       {
           question: "What kind of friend are you?",
            image: "images/quiz/darkmoon/q8.jpg",
            options: [
                { text: "The protector", moon: "heli" },
                { text: "The confident leader", moon: "jaan" },
                { text: "The comforting one", moon: "jino" },
                { text: "The quiet supportive one", moon: "solon" },
                { text: "The cheerful one", moon: "shion" },
                { text: "The logical thinker", moon: "jakah" },
                { text: "The energetic troublemaker", moon: "noa" },
                { text: "The caring heart of the group", moon: "sooha" }
            ]
        },
       {
           question: "Choose a weapon or ability:",
            image: "images/quiz/darkmoon/q9.jpg",
            options: [
                { text: "Golden sword", moon: "heli" },
                { text: "Flame blast", moon: "jaan" },
                { text: "Healing touch", moon: "jino" },
                { text: "Ice crystals", moon: "solon" },
                { text: "Radiant beam of light", moon: "shion" },
                { text: "Enhanced instincts", moon: "jakah" },
                { text: "Shadow step", moon: "noa" },
                { text: "Barrier of pure soul energy", moon: "sooha" }
            ]
        },
       {
           question: "How do you act around someone you care about?",
            image: "images/quiz/darkmoon/q10.jpg",
            options: [
                { text: "Protective without even trying", moon: "heli" },
                { text: "Teasing but secretly caring", moon: "jaan" },
                { text: "Soft, patient, and gentle", moon: "jino" },
                { text: "Quiet but always present", moon: "solon" },
                { text: "Warm, bright, and encouraging", moon: "shion" },
                { text: "Awkward but thoughtful", moon: "jakah" },
                { text: "Playful and competitive", moon: "noa" },
                { text: "Loving and loyal", moon: "sooha" }
            ]
        }
    ],

    results: {
        "heli": {
            name: "HELI",
            image: "images/quiz/darkmoon/heli.jpg",
            description: "You're Heli - strong, dependable, and protective by nature. You carry a warmth that makes others feel safe without you even trying. You have a leader's heart and a gentle soul, balancing power with kindness. When you love, you love fiercely!"
        },
        "jaan": {
            name: "JAAN",
            image: "images/quiz/darkmoon/jaan.jpg",
            description: "You're Jaan - confident, bold, and fiery. You have a sharp mind and a passionate spirit that stands out everywhere you go. People admire your charisma, honesty, and unapologetic personality. You're unforgettable!"
        },
        "jino": {
            name: "JINO",
            image: "images/quiz/darkmoon/jino.jpg",
            description: "You're Jino - soft, loyal, and full of genuine warmth. You bring comfort to everyone around you, making people feel understood and cared for. You're the kind of person others trust with their whole heart!"
        },
        "solon": {
            name: "SOLON",
            image: "images/quiz/darkmoon/solon.jpg",
            description: "You're Solon — elegant, quiet, and strong on the inside. You appear calm, but your emotions run deep. You value peace, loyalty, and beauty. People feel calm just being near you!"
        },
        "shion": {
            name: "SHION",
            image: "images/quiz/darkmoon/shion.jpg",
            description: "You're Shion - bright, radiant, and full of charm. Your energy lights up every room, and your smile can change someone's entire day. You're soft yet powerful in your own way!"
        },
        "jakah": {
            name: "JAKAH",
            image: "images/quiz/darkmoon/jakah.jpg",
            description: "You're Jakah - thoughtful, patient, and wise beyond your age. You notice everything, understand people deeply, and choose your actions carefully. You are calm in chaos and strength in silence!"
        },
        "noa": {
            name: "NOA",
            image: "images/quiz/darkmoon/noa.jpg",
            description: "You're Noa - fast, fierce, and full of unstoppable energy. You follow your instincts, move with passion, and have a magnetic presence. People can't help but be drawn to your wild fire!"
        },
       "sooha": {
            name: "SOOHA",
            image: "images/quiz/darkmoon/sooha.jpg",
            description: "You're Sooha = brave, loving, and pure-hearted. You stand up for others even when you're afraid. Your kindness is powerful, and your courage comes from love. You change people simply by being yourself!"
        }
    }
};