// ENHYPEN Song Mood Quiz Questions and Results
const SONG_QUIZ = {
    questions: [
        {
            question: "How are you feeling right now?",
            image: "images/quiz/song/feeling.jpg",
            options: [
                { text: "Emotional and reflective", song: "given-taken" },
                { text: "Warm and full of longing", song: "fever" },
                { text: "Chaotic but excited", song: "go-big-or-go-home" },
                { text: "Free, happy, and peaceful", song: "shout-out" },
                { text: "A little stressed or tired", song: "bills" },
                { text: "Flirty and playful", song: "sweet-venom" },
                { text: "Romantic and dreamy", song: "moonstruck" },
                { text: "Energetic and unstoppable", song: "helium" }
            ]
        },
        {
            question: "Pick the vibe of your day:",
            image: "images/quiz/song/day-vibe.jpg",
            options: [
                { text: "Heavy but meaningful", song: "given-taken" },
                { text: "Slow-burning and emotional", song: "fever" },
                { text: "Loud, bright, and fun", song: "go-big-or-go-home" },
                { text: "Relaxed and grateful", song: "shout-out" },
                { text: "Chaotic adulting energy", song: "bills" },
                { text: "Sweet and charming", song: "sweet-venom" },
                { text: "Soft and romantic", song: "moonstruck" },
                { text: "Hyped and confident", song: "helium" }
            ]
        },
        {
             question: "What type of song do you need right now?",
            image: "images/quiz/song/music-type.jpg",
            options: [
                { text: "Deep, emotional storytelling", song: "given-taken" },
                { text: "A passionate slow-burning track", song: "fever" },
                { text: "A hype party anthem", song: "go-big-or-go-home" },
                { text: "A comforting, positive track", song: "shout-out" },
                { text: "A relatable, everyday mood song", song: "bills" },
                { text: "A cute + addictive bop", song: "sweet-venom" },
                { text: "A dreamy romantic song", song: "moonstruck" },
                { text: "A boost of pure energy", song: "helium" }
            ]
        },
        {
            question: "Choose an aesthetic:",
            image: "images/quiz/song/aesthetic.jpg",
            options: [
                { text: "Blue + dark emotional elegance", song: "given-taken" },
                { text: "Deep reds + longing vibes", song: "fever" },
                { text: "Neon lights + party chaos", song: "go-big-or-go-home" },
                { text: "Soft sunshine + freedom", song: "shout-out" },
                { text: "Messy desk + real-life stress", song: "bills" },
                { text: "Peachy pinks + sweetness", song: "sweet-venom" },
                { text: "Moonlight + romance", song: "moonstruck" },
                { text: "Metallic brightness + energy", song: "helium" }
            ]
        },
        {
           question: "Pick the emotion you feel strongest:",
            image: "images/quiz/song/emotion.jpg",
            options: [
                { text: "Confusion mixed with hope", song: "given-taken" },
                { text: "Longing and desire", song: "fever" },
                { text: "Excitement and thrill", song: "go-big-or-go-home" },
                { text: "Love for your people", song: "shout-out" },
                { text: "Frustration or stress", song: "bills" },
                { text: "Playfulness", song: "sweet-venom" },
                { text: "Romantic softness", song: "moonstruck" },
                { text: "Confidence and hype", song: "helium" }
            ]
        },
        {
            question: "What do you want your day to feel like?",
            image: "images/quiz/song/day-feel.jpg",
            options: [
                { text: "Meaningful and intense", song: "given-taken" },
                { text: "Slow and emotional", song: "fever" },
                { text: "Fun and explosive", song: "go-big-or-go-home" },
                { text: "Calm and happy", song: "shout-out" },
                { text: "Realistic but manageable", song: "bills" },
                { text: "Flirty and cute", song: "sweet-venom" },
                { text: "Romantic and magical", song: "moonstruck" },
                { text: "Hyped and energetic", song: "helium" }
            ]
        },
        {
            question: "Choose a color that matches your mood:",
            image: "images/quiz/song/color.jpg",
            options: [
                { text: "Navy blue", song: "given-taken" },
                { text: "Deep red", song: "fever" },
                { text: "Hot pink", song: "go-big-or-go-home" },
                { text: "Soft yellow", song: "shout-out" },
                { text: "Dark green", song: "bills" },
                { text: "Peach", song: "sweet-venom" },
                { text: "Silver or moon white", song: "moonstruck" },
                { text: "Electric purple", song: "helium" }
            ]
        },
       {
           question: "Which scenario fits you the most today?",
            image: "images/quiz/song/scenario.jpg",
            options: [
                { text: "Reflecting on past choices", song: "given-taken" },
                { text: "Missing someone deeply", song: "fever" },
                { text: "Going out and having fun", song: "go-big-or-go-home" },
                { text: "Feeling grateful for friends", song: "shout-out" },
                { text: "Trying to get your life together", song: "bills" },
                { text: "Flirting or crushing on someone", song: "sweet-venom" },
                { text: "Daydreaming in silence", song: "moonstruck" },
                { text: "Feeling unstoppable", song: "helium" }
            ]
        },
       {
           question: "What kind of energy do you want your song to have?",
            image: "images/quiz/song/energy.jpg",
            options: [
                { text: "Dark and emotional", song: "given-taken" },
                { text: "Sensual and longing", song: "fever" },
                { text: "Hype and explosive", song: "go-big-or-go-home" },
                { text: "Bright and freeing", song: "shout-out" },
                { text: "Relatable and real", song: "bills" },
                { text: "Sweet and catchy", song: "sweet-venom" },
                { text: "Dreamy and soft", song: "moonstruck" },
                { text: "High-energy adrenaline", song: "helium" }
            ]
        },
       {
           question: "Pick a setting that matches your mood:",
            image: "images/quiz/song/setting.jpg",
            options: [
                { text: "A dark hallway with echoes", song: "given-taken" },
                { text: "A dim red room full of emotion", song: "fever" },
                { text: "A neon-lit party", song: "go-big-or-go-home" },
                { text: "A rooftop sunset with friends", song: "shout-out" },
                { text: "Your messy room while you stress", song: "bills" },
                { text: "A cute café flirting session", song: "sweet-venom" },
                { text: "A quiet night under the moon", song: "moonstruck" },
                { text: "A loud stage with lights", song: "helium" }
            ]
        }
    ],

    results: {
        "given-taken": {
            name: "GIVEN : TAKEN",
            image: "images/quiz/song/given-taken.jpg",
            description: "You're GIVEN TAKEN - emotional, reflective, and full of depth. You're in a phase where you're trying to understand yourself better. This song matches your thoughtful vibe perfectly, capturing the feeling of beginning something new while dealing with inner conflict!"
        },
        "fever": {
            name: "FEVER",
            image: "images/quiz/song/fever.jpg",
            description: "You're FEVER - warm, longing, and beautifully emotional. Your mood is full of slow-burning feelings and quiet intensity. This song reflects your soft passion, hidden desires, and heart-deep thoughts you can't always express out loud!"
        },
        "go-big-or-go-home": {
            name: "GO BIG OR GO HOME",
            image: "images/quiz/song/go-big-or-go-home.jpg",
            description: "You're GO BIG OR GO HOME - bold, chaotic, fun, and full of energy! You want excitement, bright lights, and the feeling of being unstoppable. This song matches your craving for thrill, hype, and vibrant confidence!"
        },
        "shout-out": {
            name: "SHOUT : OUT",
            image: "images/quiz/song/shout-out.jpg",
            description: "You're SHOUT OUT - peaceful, grateful, and free-spirited. You're in a mood where you appreciate the little things and the people around you. This song mirrors your calm happiness and the comforting feeling of belonging!"
        },
        "bills": {
            name: "BILLS",
            image: "images/quiz/song/bills.jpg",
            description: "You're BILLS - tired, overwhelmed, but also real and relatable. Life might be chaotic right now, but you're doing your best. This song fits your 'I'm handling it somehow' energy perfectly - honest, raw, and human!"
        },
        "sweet-venom": {
            name: "SWEET VENOM",
            image: "images/quiz/song/sweet-venom.jpg",
            description: "You're SWEET VENOM - flirty, playful, and irresistibly charming. Your mood is full of sweetness with a hint of mischief. This song matches your lighthearted confidence and the cute, addictive energy you carry!"
        },
        "moonstruck": {
            name: "MOONSTRUCK",
            image: "images/quiz/song/moonstruck.jpg",
            description: "You're MOONSTRUCK - romantic, dreamy, and soft. You feel everything gently and beautifully. This song fits your quiet longing, your love for calm moments, and your heart full of moonlit emotions!"
        },
    "helium": {
            name: "HELIUM",
            image: "images/quiz/song/helium.jpg",
            description: "You're HELIUM - hyped, energetic, and unstoppable. You want to rise, push forward, and glow brightly. This song fits your boost of adrenaline and the powerful feeling of being lifted above everything holding you back!"
        }
    }
};