// ENHYPEN Quiz Questions and Results
const ENHYPEN_QUIZ = {
    questions: [
        {
            question: "What's your ideal weekend activity?",
            image: "images/quiz/weekend.jpg",
            options: [
                { text: "Practicing dance or learning new skills", member: "heeseung" },
                { text: "Working out and staying active", member: "jay" },
                { text: "Exploring new cafes and taking photos", member: "jake" },
                { text: "Ice skating or sports", member: "sunghoon" },
                { text: "Shopping and trying new fashion", member: "sunoo" },
                { text: "Leading group activities with friends", member: "jungwon" },
                { text: "Gaming and watching videos", member: "niki" }
            ]
        },
        {
            question: "Which superpower would you choose?",
            image: "images/quiz/superpower.jpg",
            options: [
                { text: "Perfect vocal control", member: "heeseung" },
                { text: "Endless energy and strength", member: "jay" },
                { text: "Ability to speak all languages", member: "jake" },
                { text: "Ice and snow manipulation", member: "sunghoon" },
                { text: "Making everyone smile instantly", member: "sunoo" },
                { text: "Natural leadership aura", member: "jungwon" },
                { text: "Super flexibility and dance skills", member: "niki" }
            ]
        },
        {
            question: "What's your go-to snack?",
            image: "images/quiz/snack.jpg",
            options: [
                { text: "Something sweet like chocolate", member: "heeseung" },
                { text: "Protein bar or healthy snack", member: "jay" },
                { text: "Australian snacks (Tim Tams!)", member: "jake" },
                { text: "Cold desserts like ice cream", member: "sunghoon" },
                { text: "Cute and colorful treats", member: "sunoo" },
                { text: "Traditional Korean snacks", member: "jungwon" },
                { text: "Japanese snacks and ramen", member: "niki" }
            ]
        },
        {
            question: "How do you handle stress?",
            image: "images/quiz/stress.jpg",
            options: [
                { text: "Practice until I perfect it", member: "heeseung" },
                { text: "Work out and push through", member: "jay" },
                { text: "Talk to friends and share feelings", member: "jake" },
                { text: "Stay calm and composed", member: "sunghoon" },
                { text: "Make jokes and lighten the mood", member: "sunoo" },
                { text: "Organize and make a plan", member: "jungwon" },
                { text: "Dance it out", member: "niki" }
            ]
        },
        {
            question: "What's your fashion style?",
            image: "images/quiz/fashion.jpg",
            options: [
                { text: "Comfortable and casual", member: "heeseung" },
                { text: "Sporty and practical", member: "jay" },
                { text: "Trendy and cool", member: "jake" },
                { text: "Elegant and sophisticated", member: "sunghoon" },
                { text: "Colorful and expressive", member: "sunoo" },
                { text: "Clean and neat", member: "jungwon" },
                { text: "Edgy and unique", member: "niki" }
            ]
        },
        {
            question: "Which animal represents you best?",
            image: "images/quiz/animals.jpg",
            options: [
                { text: "Hamster - quick", member: "heeseung" },
                { text: "Eagle - strong", member: "jay" },
                { text: "Puppy - friendly", member: "jake" },
                { text: "Penguin - graceful", member: "sunghoon" },
                { text: "Fox - charming", member: "sunoo" },
                { text: "Cat - independent", member: "jungwon" },
                { text: "Duck - playful", member: "niki" }
            ]
        },
        {
            question: "What's your favorite type of music?",
            image: "images/quiz/music.jpg",
            options: [
                { text: "R&B and soulful ballads", member: "heeseung" },
                { text: "Energetic hip-hop", member: "jay" },
                { text: "Chill pop and indie", member: "jake" },
                { text: "Classical and elegant tunes", member: "sunghoon" },
                { text: "Bright and happy pop", member: "sunoo" },
                { text: "Well-produced K-pop", member: "jungwon" },
                { text: "Dynamic dance tracks", member: "niki" }
            ]
        },
        {
            question: "How would your friends describe you?",
            image: "images/quiz/friends.jpg",
            options: [
                { text: "The talented all-rounder", member: "heeseung" },
                { text: "The reliable and strong one", member: "jay" },
                { text: "The warm and friendly one", member: "jake" },
                { text: "The cool and graceful one", member: "sunghoon" },
                { text: "The mood-maker and cute one", member: "sunoo" },
                { text: "The natural leader", member: "jungwon" },
                { text: "The energetic and playful one", member: "niki" }
            ]
        }
    ],

    results: {
        heeseung: {
            name: "HEESEUNG",
            image: "images/quiz/heeseung-result.jpg",
            description: "You're Heeseung - the talented all-rounder and reliable hyung! Like Heeseung, you're naturally gifted and work hard to perfect your skills. You're the person everyone looks up to for guidance and inspiration. Your calm demeanor hides a passionate heart that strives for excellence in everything you do!"
        },
        jay: {
            name: "JAY",
            image: "images/quiz/jay-result.jpg",
            description: "You're Jay - the strong and passionate one! With your determined spirit and reliable nature, you're the rock that others depend on. Like Jay, you have a cool exterior but a warm heart that cares deeply for your friends. Your dedication and hard work inspire everyone around you!"
        },
        jake: {
            name: "JAKE",
            image: "images/quiz/jake-result.jpg",
            description: "You're Jake - the sunshine of the group! Your warm and friendly personality makes everyone feel comfortable around you. Like Jake, you have a natural charm and positive energy that lights up any room. You're the friend everyone loves to have - reliable, kind, and always there with encouraging words!"
        },
        sunghoon: {
            name: "SUNGHOON",
            image: "images/quiz/sunghoon-result.jpg",
            description: "You're Sunghoon - the elegant and cool one! With your graceful presence and calm demeanor, you bring a sense of sophistication everywhere you go. Like Sunghoon, you might seem reserved at first, but you have a warm and funny side that surprises people. Your dedication and perseverance are truly admirable!"
        },
        sunoo: {
            name: "SUNOO",
            image: "images/quiz/sunoo-result.jpg",
            description: "You're Sunoo - the adorable mood-maker! Your bright energy and cute personality bring joy to everyone around you. Like Sunoo, you have a special talent for making people smile and feel comfortable. Behind your cheerful exterior is a thoughtful person who cares deeply about others' feelings!"
        },
        jungwon: {
            name: "JUNGWON",
            image: "images/quiz/jungwon-result.jpg",
            description: "You're Jungwon - the natural leader! Despite your young age, you have incredible maturity and leadership skills that inspire respect. Like Jungwon, you're responsible, hardworking, and have a cute side that contrasts with your strong leadership. You're the perfect balance of professional and adorable!"
        },
        niki: {
            name: "NI-KI",
            image: "images/quiz/niki-result.jpg",
            description: "You're Ni-ki - the talented maknae with amazing energy! Your incredible dance skills and youthful energy make you stand out in any crowd. Like Ni-ki, you're passionate about your interests and constantly working to improve. Your playful nature and dedication make you an inspiration to others!"
        }
    }
};