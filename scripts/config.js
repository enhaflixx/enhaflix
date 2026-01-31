// ===== ENHA-FLIX CONFIGURATION =====
// EDIT THIS FILE TO CUSTOMIZE YOUR CONTENT

const CONFIG = {
    websiteTitle: "ENHA-FLIX",
    
    // Profile images (add your images to images/profiles/)
    profileImages: {
        engene: "images/profiles/engene-profile.jpg",
        about: "images/profiles/about-profile.jpg",
        support: "images/profiles/support-profile.jpg"
    },

    // Font settings
    fonts: {
        heading: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        body: "'Inter', 'Helvetica Neue', Arial, sans-serif"
    },
    
    // Hero banner configuration - NOW FULLY CUSTOMIZABLE!
    banners: [
        {
            type: "image", // "color" or "image"
            background: "images/thumbnails/hero-banner.jpg", // or use image URL
            title: "ENHYPEN THE SIN : VANISH",
            description: "Experience the ultimate new comeback",
            buttonText: "Watch Now",
            youtubeId: "https://youtu.be/R6e4tBWxIxE?si=62pgG6JTLupuuvWG",
            textColor: "#ffffff" // Custom text color
        },
        {
            type: "image",
            background: "images/thumbnails/hero-banner2.jpg", // Your banner image path
            title: "ENHYPEN New Album",
            description: "Check out their latest release with exclusive content",
            buttonText: "Watch Now", 
            youtubeId: "https://www.youtube.com/watch?v=wXFLzODIdUI&list=RDwXFLzODIdUI&start_radio=1",
            textColor: "#ffffff"
        }
        // Add more banners here as needed
    ]
};


// ===== NEW SIMPLIFIED CATEGORIES CONFIG =====
// MUCH EASIER TO EDIT AND ORGANIZE!

const categoriesConfig = {
    "Music Catalog": {
        "Albums": [
            { 
                name: "DIMENSION : DILEMMA", 
                url: "https://open.spotify.com/album/5jGRqioNCSWZGBl3QmyuFI?si=Z-8jdhgGTGyQgGIf1-5DIw", 
                thumbnail: "images/thumbnails/album-dimension-dilemma.jpg",
                description: "2021.Album"
            },
           { 
                name: "DIMENSION : ANSWER", 
                url: "https://open.spotify.com/album/3nOj9hsnptBEDt9ie2lra5?si=-0OU_92YQ2GYPZnoTVyuFA", 
                thumbnail: "images/thumbnails/album-dimension-answer.jpg",
                description: "2022.Album"
            },
{ 
                name: "Sadame", 
                url: "https://open.spotify.com/album/58Rn6sczqcudAs9bryXXBv?si=upwQzwzZRgKtlcFJgZ07mQ", 
                thumbnail: "images/thumbnails/album-sadame.jpg",
                description: "2022.Album"
            },
{ 
                name: "-YOU-", 
                url: "https://open.spotify.com/album/6mPOqqTNfS3p7BlDMCy07r?si=2xITYaSLRImKEMybos_l7g", 
                thumbnail: "images/thumbnails/album-you.jpg",
                description: "2023.Album"
            },
{ 
                name: "ORANGE BLOOD", 
                url: "https://open.spotify.com/album/7dsAlxH9cMgyREm8OLdWWT?si=5DEvSoIpT9GbtBIZv7t07g", 
                thumbnail: "images/thumbnails/album-orange-blood.jpg",
                description: "2023.Album"
            },
{ 
                name: "ROMANCE : UNTOLD", 
                url: "https://open.spotify.com/album/05I8FltCMnGa3kE38mpOkL?si=DxdspL6YTYWN_dgYRiUSQA", 
                thumbnail: "images/thumbnails/album-romance.jpg",
                description: "2024.Album"
            },
{ 
                name: "ROMANCE : UNTOLD -daydream-", 
                url: "https://open.spotify.com/album/380UbSJnNQ9SioALGRB0Cf?si=wKmXJK-cRd2UcTPbojNHbA", 
                thumbnail: "images/thumbnails/album-romance-daydream.jpg",
                description: "2024.Album"
            },
{ 
                name: "DESIRE : UNLEASH", 
                url: "https://open.spotify.com/album/5nskZ8CFMrSNiOrceMHr4B?si=G9MEL5f2TmKe9UWE5Iwc4Q", 
                thumbnail: "images/thumbnails/album-desire.jpg",
                description: "2025.Album"
            },
{ 
                name: "THE SIN : VANISH", 
                url: "https://open.spotify.com/album/62K0QHi2SjuhMe94kfYxq3?si=Phev-MOERY-yol7t4LlElg", 
                thumbnail: "images/thumbnails/album-thesin.jpg",
                description: "2026.Album"
            },
            // ADD MORE ALBUMS HERE
        ],
        "Singles": [
            { 
                name: "BORDER : Hakanai", 
                url: "https://open.spotify.com/album/05UNmVxVeG3XwkfrcXls5g?si=P2v_iBF4SH27x3m7Lcp5Kw", 
                thumbnail: "images/thumbnails/single-border-hakanai.jpg",
                description: "2021.Single"
            },
{ 
                name: "HEY TAYO", 
                url: "https://open.spotify.com/album/0sW7ZTSzrDjOzlP5MJ7CEL?si=AB0uAOAfS8-fwbd_QAsDPA", 
                thumbnail: "images/thumbnails/single-hey-tayo.jpg",
                description: "2021. Single"
            },
{ 
                name: "BILLY POCO", 
                url: "https://open.spotify.com/album/2C6uMX2tzh4LjsxdxOC5D7?si=kHnr5AeuTKmD-hnHP5bulw", 
                thumbnail: "images/thumbnails/single-billy-poco.jpg",
                description: "2021.Single"
            },
{ 
                name: "ALWAYS", 
                url: "https://open.spotify.com/album/0kwAgLzLnzQxaKcdubyaMh?si=0f-uzFU_TdWrJXyYlAavmA", 
                thumbnail: "images/thumbnails/single-always.jpg",
                description: "2022.Single"
            },
 { 
                name: "DIMENSION : Senkou", 
                url: "https://open.spotify.com/album/0hTSBwSbvXgDSUxtSLBYcw?si=2yqbcO_XRc-5pAFIF7I_ZA", 
                thumbnail: "images/thumbnails/single-dimension-senkou.jpg",
                description: "2022.Single"
            },
 { 
                name: "A Kind Of Magic (Coke Studio Session)", 
                url: "https://open.spotify.com/album/47oy52LyIbbzC0qLKQH16Z?si=lys2jCaNRTen3pkckO4zjg", 
                thumbnail: "images/thumbnails/single-magic.jpg",
                description: "2022.Single"
            },
 { 
                name: "I Need The Light", 
                url: "https://open.spotify.com/album/4RAx28on33NHM5FQiFhyvZ?si=9jKY5tgERf2gjJ8judYiDg", 
                thumbnail: "images/thumbnails/single-light.jpg",
                description: "2022.Single"
            },
 { 
                name: "One In A Billion", 
                url: "https://open.spotify.com/album/19Jm8Jk0zQYs6zMaxhYJFd?si=nnNzKFhSQ4SOSPUjrT9rbw", 
                thumbnail: "images/thumbnails/single-billion.jpg",
                description: "2022.Single"
            },
 { 
                name: "Make the Change", 
                url: "https://open.spotify.com/album/2wJfsH5ol2YVGq2biNphzY?si=0hMiaOYBTlW9LxBccCZZWA", 
                thumbnail: "images/thumbnails/single-change.jpg",
                description: "2022.Single"
            },
 { 
                name: "Summer Strike, Pt.4 (Original Soundtrack)", 
                url: "https://open.spotify.com/album/6kAXwLPooprklH4fTIDu3D?si=tixKelgnSi2LnzIR8aD_ZQ", 
                thumbnail: "images/thumbnails/single-zero-moment.jpg",
                description: "2022.Single"
            },
 { 
                name: "One and Only", 
                url: "https://open.spotify.com/album/5LGe47qZJTNwtM8gUfT7Mx?si=wqAFuZbrRjKuCQxNXJnPVQ", 
                thumbnail: "images/thumbnails/single-only.jpg",
                description: "2023.Single"
            },
 { 
                name: "Criminal Love", 
                url: "https://open.spotify.com/album/6S8BCiVrtzm5TEOnjyyCfJ?si=ESGB6saxQEOVgTpQvB4nIg", 
                thumbnail: "images/thumbnails/single-criminal-love.jpg",
                description: "2023.Single"
            },
 { 
                name: "BLOSSOM", 
                url: "https://open.spotify.com/album/0mRRG2TuM20kCjhR4h1op4?si=T4h4WTHOQe-xa8QyfLPjZg", 
                thumbnail: "images/thumbnails/single-blossom.jpg",
                description: "2023.Single"
            },
{ 
                name: "Keep Swimmin' Through", 
                url: "https://open.spotify.com/album/3DuL4EFBmwfcEle2TTQNY2?si=-W5IcmzTTMqEBMFTnBAzpg", 
                thumbnail: "images/thumbnails/single-baby-shark.jpg",
                description: "2023.Single"
            },
{ 
                name: "I NEED U-Spotify Singles", 
                url: "https://open.spotify.com/album/2eUqvZveGueUYsQBRd4NVi?si=wlg4kO_pTXq0nGFKN04Kcg", 
                thumbnail: "images/thumbnails/single-need-you.jpg",
                description: "2024.Single"
            },
{ 
                name: "What Makes You Beautiful", 
                url: "https://open.spotify.com/album/3RvguzRz56wqZ9fNldExgn?si=Ap58ezV1SvWkoL1_gBXZmg", 
                thumbnail: "images/thumbnails/single-beautiful.jpg",
                description: "2024.Single"
            },
{ 
                name: "Sweet Venom (Seeb Remix)", 
                url: "https://open.spotify.com/album/1VpLHUZOodpgXh69HNu4nC?si=CTQ8snUER3mn2KjYBfbM9Q", 
                thumbnail: "images/thumbnails/single-seeb.jpg",
                description: "2024.Single"
            },
{ 
                name: "Home", 
                url: "https://open.spotify.com/album/3dkYdURDlDxd8uhsyS09Dv?si=SXMtT7kMQmiC1PT9_XT-kw", 
                thumbnail: "images/thumbnails/single-home.jpg",
                description: "2024.Single"
            },
{ 
                name: "ROMANCE : UNTOLD -daydream- (JAPAN Edition)", 
                url: "https://open.spotify.com/album/2k58zfsAwrvH8OfHx9RXd7?si=VmfRsHRoTW6xmE3XMcZbeA", 
                thumbnail: "images/thumbnails/single-romance-daydream.jpg",
                description: "2024.Single"
            },
{ 
                name: "Confessions", 
                url: "https://open.spotify.com/album/4XDPyXqtap7qc0AJwz1bs9?si=thAPDOdATseavo9hHf5Reg", 
                thumbnail: "images/thumbnails/single-confessions.jpg",
                description: "2025.Single"
            },
{ 
                name: "Loose", 
                url: "https://open.spotify.com/track/3YNjvUXgfQznx5IZHAXk6i?si=939dc418fdb14b91", 
                thumbnail: "images/thumbnails/single-loose.jpg",
                description: "2025.Single"
            },
{ 
                name: "Demons", 
                url: "https://open.spotify.com/track/30oEeJE3bxNMODjscH9Scl?si=1fc9f8fcd523490e", 
                thumbnail: "images/thumbnails/single-demons.jpg",
                description: "2025.Single"
            },
{ 
                name: "Shine On Me", 
                url: "https://open.spotify.com/track/00HpVPqakPoslGmkcnXAFI?si=f63318764bcb47ed", 
                thumbnail: "images/thumbnails/single-shine.jpg",
                description: "2025.Single"
            },
            // ADD MORE SINGLES HERE
        ],
        "EPs": [
            { 
                name: "BORDER : DAY ONE", 
                url: "https://open.spotify.com/album/3YxF7jTnpdNepWbO42f8lH?si=P8raQDyeTeGhljmpyVFchQ", 
                thumbnail: "images/thumbnails/ep-border-day-one.jpg",
                description: "2020. EP"
            },
{ 
                name: "BORDER : CARNIVAL", 
                url: "https://open.spotify.com/album/4LGYBcRsteiXjcPD4QQvxv?si=-LC8GiimTwKky9ol-UYMFg", 
                thumbnail: "images/thumbnails/ep-border-carnival.jpg",
                description: "2021. EP"
            },
{ 
                name: "MANIFESTO : DAY 1", 
                url: "https://open.spotify.com/album/5J8MNLLViH5zqM6VoGErz8?si=-1N3P87ARhCFmVSXTC1tqw", 
                thumbnail: "images/thumbnails/ep-manifesto.jpg",
                description: "2022.EP"
            },
 { 
                name: "DARK BLOOD", 
                url: "https://open.spotify.com/album/7q65W5gVANjh1j1KXLeU0f?si=-toIIJUdSX6K8t2wi6-jcw", 
                thumbnail: "images/thumbnails/ep-dark-blood.jpg",
                description: "2023. EP"
            },
 { 
                name: "MEMORABILIA", 
                url: "https://open.spotify.com/album/0OhJwEzXbK9Km6GQSPdmPU?si=gotJ054KQHaXa35Ay23x2g", 
                thumbnail: "images/thumbnails/ep-memorabilia.jpg",
                description: "2024. EP"
            },
 { 
                name: "XO (Only If You Say Yes)(Remixes)", 
                url: "https://open.spotify.com/album/5eKOTos1nsON4Xsivllgw8?si=i66PuNOGT3WW_WA3JvnKAw", 
                thumbnail: "images/thumbnails/ep-xo.jpg",
                description: "2024. EP"
            },
 { 
                name: "-YOI-", 
                url: "https://open.spotify.com/album/3SbFks7Ke2crP3O0RpfDEF?si=FyrfWCLORW2WnNfoppu4VA", 
                thumbnail: "images/thumbnails/ep-yoi.jpg",
                description: "2025. EP"
            },

            // ADD MORE EPS HERE
        ]
    },
    
    "Music Videos": {
        "Title Tracks": [
             { 
            name: "Given Taken", 
            url: "https://www.youtube.com/watch?v=nQ6wLuYvGd4&list=PLMQ4WMltba-GshOjhZBypZnY-e9E2iUfU&index=35", 
            thumbnail: "images/thumbnails/mv-given-taken.jpg",
            description: "Official Music Video"
        },
{ 
            name: "Drunk-Dazed", 
            url: "https://www.youtube.com/watch?v=Fc7-Oe0tj5k&list=RDFc7-Oe0tj5k&start_radio=1", 
            thumbnail: "images/thumbnails/mv-drunk-dazed.jpg",
            description: "Official Music Video"
        },
{ 
            name: "Tamed-Dashed", 
            url: "https://www.youtube.com/watch?v=6IRsW_TkyVA&list=PLMQ4WMltba-GshOjhZBypZnY-e9E2iUfU&index=30", 
            thumbnail: "images/thumbnails/mv-tamed-dashed.jpg",
            description: "Official Music Video"
        },
{ 
            name: "Blessed-Cursed", 
            url: "https://www.youtube.com/watch?v=osmHArcf_aE&list=PLMQ4WMltba-GshOjhZBypZnY-e9E2iUfU&index=29", 
            thumbnail: "images/thumbnails/mv-blessed-cursed.jpg",
            description: "Official Music Video"
        },
{ 
            name: "Future Perfect (Pass the MIC)", 
            url: "https://www.youtube.com/watch?v=QMlNLo74mOw&list=PLMQ4WMltba-GshOjhZBypZnY-e9E2iUfU&index=26", 
            thumbnail: "images/thumbnails/mv-future-perfect.jpg",
            description: "Official Music Video"
        },
{ 
            name: "Bite Me", 
            url: "https://www.youtube.com/watch?v=wXFLzODIdUI&list=PLMQ4WMltba-GshOjhZBypZnY-e9E2iUfU&index=20", 
            thumbnail: "images/thumbnails/mv-bite-me.jpg",
            description: "Official Music Video"
        },
{ 
            name: "Sweet Venom", 
            url: "https://www.youtube.com/watch?v=qedonJosQ3g&list=PLMQ4WMltba-GshOjhZBypZnY-e9E2iUfU&index=17", 
            thumbnail: "images/thumbnails/mv-sweet-venom.jpg",
            description: "Official Music Video"
        },
{ 
            name: "Fatal Trouble", 
            url: "https://www.youtube.com/watch?v=D4NkQ9z65w8&list=PLMQ4WMltba-GshOjhZBypZnY-e9E2iUfU&index=14", 
            thumbnail: "images/thumbnails/mv-fatal-trouble.jpg",
            description: "Official Music Video"
        },
{ 
            name: "XO (Only If You Say Yes)", 
            url: "https://www.youtube.com/watch?v=FPDYeRk2PO8&list=PLMQ4WMltba-GshOjhZBypZnY-e9E2iUfU&index=13", 
            thumbnail: "images/thumbnails/mv-xo.jpg",
            description: "Official Music Video"
        },
{ 
            name: "No Doubt", 
            url: "https://www.youtube.com/watch?v=rDolt3jJRsM&list=PLMQ4WMltba-GshOjhZBypZnY-e9E2iUfU&index=7", 
            thumbnail: "images/thumbnails/mv-no-doubt.jpg",
            description: "Official Music Video"
        },
{ 
            name: "Bad Desire (With or Without You)", 
            url: "https://www.youtube.com/watch?v=a2Zqdo9RbNs&list=PLMQ4WMltba-GshOjhZBypZnY-e9E2iUfU&index=5", 
            thumbnail: "images/thumbnails/mv-desire.jpg",
            description: "Official Music Video"
        },
{ 
            name: "Knife", 
            url: "https://www.youtube.com/watch?v=R6e4tBWxIxE", 
            thumbnail: "images/thumbnails/mv-knife.jpg",
            description: "Official Music Video"
        },
            // ADD MORE TITLE TRACK MVS HERE
        ],
        "B-Side Tracks": [
           { 
            name: "Let Me In (20 CUBE)", 
            url: "https://www.youtube.com/watch?v=FKG48r9Wl8o&list=PLMQ4WMltba-GshOjhZBypZnY-e9E2iUfU&index=34", 
            thumbnail: "images/thumbnails/mv-let-me-in.jpg",
            description: "Official Music Video"
        },
{ 
            name: "FEVER", 
            url: "https://www.youtube.com/watch?v=X7d6Dt17yHk&list=PLMQ4WMltba-GshOjhZBypZnY-e9E2iUfU&index=33", 
            thumbnail: "images/thumbnails/mv-fever.jpg",
            description: "Official Music Video"
        },
{ 
            name: "Given-Taken [Japanese Ver.]", 
            url: "https://www.youtube.com/watch?v=qD59wF-8rEI&list=PLMQ4WMltba-GshOjhZBypZnY-e9E2iUfU&index=31", 
            thumbnail: "images/thumbnails/mv-given-taken-jap.jpg",
            description: "Official Music Video"
        },
{ 
            name: "Tamed-Dashed [Japanese Ver.]", 
            url: "https://www.youtube.com/watch?v=qVdc7AvM4xQ&list=PLMQ4WMltba-GshOjhZBypZnY-e9E2iUfU&index=28", 
            thumbnail: "images/thumbnails/mv-tamed-dashed-jap.jpg",
            description: "Official Music Video"
        },
{ 
            name: "HEY TAYO", 
            url: "https://www.youtube.com/watch?v=xTCiQoZPHFM&list=RDxTCiQoZPHFM&start_radio=1", 
            thumbnail: "images/thumbnails/mv-tayo.jpg",
            description: "Official Music Video"
        },
{ 
            name: "BILLY POCO", 
            url: "https://www.youtube.com/watch?v=wWKu3cCLJWc&list=RDwWKu3cCLJWc&start_radio=1", 
            thumbnail: "images/thumbnails/mv-poco.jpg",
            description: "Official Music Video"
        },
{ 
            name: "MANIFESTO : DAY 1 ‘W̶A̶L̶K̶ ̶T̶H̶E̶ ̶L̶I̶N̶E̶", 
            url: "https://www.youtube.com/watch?v=q5LgpmZwht8&list=PLMQ4WMltba-GshOjhZBypZnY-e9E2iUfU&index=27", 
            thumbnail: "images/thumbnails/mv-manifesto.jpg",
            description: "Official Music Video"
        },
{ 
            name: "ParadoXXX Invasion", 
            url: "https://www.youtube.com/watch?v=HOciAVeq_HU&list=PLMQ4WMltba-GshOjhZBypZnY-e9E2iUfU&index=24", 
            thumbnail: "images/thumbnails/mv-paradoxx.jpg",
            description: "Official Music Video"
        },
        { 
            name: "MANIFESTO : DAY 1 'Foreshadow", 
            url: "https://www.youtube.com/watch?v=V_48aC7yC-I&list=PLMQ4WMltba-GshOjhZBypZnY-e9E2iUfU&index=23", 
            thumbnail: "images/thumbnails/mv-foreshadow.jpg",
            description: "Official Music Video"
        },
{ 
            name: "One In A Billion", 
            url: "https://www.youtube.com/watch?v=_ATqY9GFRh0&list=PLMQ4WMltba-GshOjhZBypZnY-e9E2iUfU&index=22", 
            thumbnail: "images/thumbnails/mv-billion.jpg",
            description: "Official Music Video"
        },
{ 
            name: "Future Perfect (Pass the MIC) [Japanese Ver.]", 
            url: "https://www.youtube.com/watch?v=7fQQekOZWLk&list=PLMQ4WMltba-GshOjhZBypZnY-e9E2iUfU&index=21", 
            thumbnail: "images/thumbnails/mv-future-perfect-jap.jpg",
            description: "Official Music Video"
        },
{ 
            name: "Sacrifice (Eat Me Up)", 
            url: "https://www.youtube.com/watch?v=HROTJfbtcU4&list=PLMQ4WMltba-GshOjhZBypZnY-e9E2iUfU&index=19", 
            thumbnail: "images/thumbnails/mv-sacrifice.jpg",
            description: "Official Music Video"
        },
{ 
            name: "Bite Me [Japanese Ver.]", 
            url: "https://www.youtube.com/watch?v=vREnTx5zq5Y&list=PLMQ4WMltba-GshOjhZBypZnY-e9E2iUfU&index=18", 
            thumbnail: "images/thumbnails/mv-bite-me-jap.jpg",
            description: "Official Music Video"
        },
{ 
            name: "One and Only", 
            url: "https://www.youtube.com/watch?v=CJsZTiYnRgI&list=PLMQ4WMltba-EY5ZnpmPHTM7Xm1TY6ryws&index=2", 
            thumbnail: "images/thumbnails/mv-one-and-only.jpg",
            description: "Official Music Video"
        },
{ 
            name: "Brought The Heat Back", 
            url: "https://www.youtube.com/watch?v=yjxLMzeV76Q&list=PLMQ4WMltba-GshOjhZBypZnY-e9E2iUfU&index=11", 
            thumbnail: "images/thumbnails/mv-brought.jpg",
            description: "Official Music Video"
        },
{ 
            name: "Highway 1009' Official Film (for ENGENE)", 
            url: "https://www.youtube.com/watch?v=_ywIhBOpjQA&list=PLMQ4WMltba-GshOjhZBypZnY-e9E2iUfU&index=9", 
            thumbnail: "images/thumbnails/mv-highway.jpg",
            description: "Official Music Video"
        },
{ 
            name: "HOME", 
            url: "https://www.youtube.com/watch?v=yTkapjlAoZE&list=PLMQ4WMltba-GshOjhZBypZnY-e9E2iUfU&index=8", 
            thumbnail: "images/thumbnails/single-home.jpg",
            description: "Official Music Video"
        },
{ 
            name: "DAYDREAM", 
            url: "https://www.youtube.com/watch?v=CT6uUGMtmno&list=RDCT6uUGMtmno&start_radio=1", 
            thumbnail: "images/thumbnails/single-daydream.jpg",
            description: "Official Track Video"
        },
{ 
            name: "Outside", 
            url: "https://www.youtube.com/watch?v=uHG-2mCfyT4&list=PLMQ4WMltba-GshOjhZBypZnY-e9E2iUfU&index=3", 
            thumbnail: "images/thumbnails/mv-outside.jpg",
            description: "Official Music Video"
        },
{ 
            name: "Shine On Me", 
            url: "https://www.youtube.com/watch?v=HmAtJr0Mhh4&list=PLMQ4WMltba-GshOjhZBypZnY-e9E2iUfU&index=1", 
            thumbnail: "images/thumbnails/mv-shine.jpg",
            description: "Official Music Video"
        },
            // ADD MORE B-SIDE MVS HERE
        ]
    },
    
    "Dance Practices": {
        "Official Practices": [
            { 
                name: "ENHYPEN 'Chamber 5 Dance Performance (Halloween Fruit ver.)", 
                url: "https://www.youtube.com/watch?v=vtg8LQc9100&list=PLMQ4WMltba-GNsXICbIPUpwS28YVEoe2F&index=59", 
                thumbnail: "images/thumbnails/dance-chamber-5.jpg",
                description: "Dance Practice"
            },
{ 
                name: "ENHYPEN Given-Taken Dance Practice", 
                url: "https://www.youtube.com/watch?v=CxxX6iNhx28&list=PLMQ4WMltba-GNsXICbIPUpwS28YVEoe2F&index=58", 
                thumbnail: "images/thumbnails/dance-given-taken.jpg",
                description: "Dance Practice"
            },
{ 
                name: "ENHYPEN Very Good Dance Practice", 
                url: "https://www.youtube.com/watch?v=NG23w0bJSvk&list=PLMQ4WMltba-GNsXICbIPUpwS28YVEoe2F&index=54", 
                thumbnail: "images/thumbnails/dance-kcon.jpg",
                description: "Dance Practice"
            },
{ 
                name: "ENHYPEN LOVE ME RIGHT Dance Practice", 
                url: "https://www.youtube.com/watch?v=LA0X4j-ydiY&list=PLMQ4WMltba-GNsXICbIPUpwS28YVEoe2F&index=52", 
                thumbnail: "images/thumbnails/dance-right.jpg",
                description: "Dance Practice"
            },
{ 
                name: "ENHYPEN Drunk Dazed Dance Practice", 
                url: "https://www.youtube.com/watch?v=4-keAPArp9A&list=PLMQ4WMltba-GNsXICbIPUpwS28YVEoe2F&index=50", 
                thumbnail: "images/thumbnails/dance-drunk-dazed.jpg",
                description: "Dance Practice"
            },
{ 
                name: "ENHYPEN FEVER Dance Practice", 
                url: "https://www.youtube.com/watch?v=Q345ZZbXGME&list=PLMQ4WMltba-GNsXICbIPUpwS28YVEoe2F&index=48", 
                thumbnail: "images/thumbnails/dance-fever.jpg",
                description: "Dance Practice"
            },
{ 
                name: "ENHYPEN Tamed Dashed Dance Practice", 
                url: "https://www.youtube.com/watch?v=p2HrDPdMGVk&list=PLMQ4WMltba-GNsXICbIPUpwS28YVEoe2F&index=44", 
                thumbnail: "images/thumbnails/dance-tamed-dashed.jpg",
                description: "Dance Practice"
            },
{ 
                name: "ENHYPEN Blessed Cursed Dance Practice", 
                url: "https://www.youtube.com/watch?v=yfBlglAdHTk&list=PLMQ4WMltba-GNsXICbIPUpwS28YVEoe2F&index=33", 
                thumbnail: "images/thumbnails/dance-blessed-cursed.jpg",
                description: "Dance Practice"
            },
{ 
                name: "ENHYPEN Future Perfect (Pass the MIC) Dance Practice", 
                url: "https://www.youtube.com/watch?v=MHqOB-S7oGE&list=PLMQ4WMltba-GNsXICbIPUpwS28YVEoe2F&index=30", 
                thumbnail: "images/thumbnails/dance-ptm.jpg",
                description: "Dance Practice"
            },
{ 
                name: "ENHYPEN ParadoXXX Invasion Dance Practice", 
                url: "https://www.youtube.com/watch?v=6sav2WZJn_0&list=PLMQ4WMltba-GNsXICbIPUpwS28YVEoe2F&index=29", 
                thumbnail: "images/thumbnails/dance-paradoxxx.jpg",
                description: "Dance Practice"
            },
{ 
                name: "ENHYPEN TFW (That Feeling When) Dance Practice", 
                url: "https://www.youtube.com/watch?v=HLHWJfWqbIw&list=PLMQ4WMltba-GNsXICbIPUpwS28YVEoe2F&index=21", 
                thumbnail: "images/thumbnails/dance-tfw.jpg",
                description: "Dance Practice"
            },
{ 
                name: "ENHYPEN Mixed UP Dance Practice", 
                url: "https://www.youtube.com/watch?v=-1RsRVIHza8&list=PLMQ4WMltba-GNsXICbIPUpwS28YVEoe2F&index=20", 
                thumbnail: "images/thumbnails/dance-mixed-up.jpg",
                description: "Dance Practice"
            },
{ 
                name: "ENHYPEN Bite Me Dance Practice", 
                url: "https://www.youtube.com/watch?v=SAsGObLZxjY&list=PLMQ4WMltba-GNsXICbIPUpwS28YVEoe2F&index=19", 
                thumbnail: "images/thumbnails/dance-bite-me.jpg",
                description: "Dance Practice"
            },
{ 
                name: "ENHYPEN Sacrifice (Eat Me Up) Dance Practice", 
                url: "https://www.youtube.com/watch?v=rVNV_BtKcow&list=PLMQ4WMltba-GNsXICbIPUpwS28YVEoe2F&index=18", 
                thumbnail: "images/thumbnails/dance-sacrifice.jpg",
                description: "Dance Practice"
            },
{ 
                name: "ENHYPEN Bite Me WORLD TOUR FATE Dance Practice", 
                url: "https://www.youtube.com/watch?v=Oq-FknP0uZw&list=PLMQ4WMltba-GNsXICbIPUpwS28YVEoe2F&index=17", 
                thumbnail: "images/thumbnails/dance-bite-me2.jpg",
                description: "Dance Practice"
            },
{ 
                name: "ENHYPEN Chaconne Dance Practice", 
                url: "https://www.youtube.com/watch?v=iVfITt1GQhY&list=RDiVfITt1GQhY&start_radio=1", 
                thumbnail: "images/thumbnails/dance-chaconne.jpg",
                description: "Dance Practice"
            },
{ 
                name: "ENHYPEN Sweet Venom Dance Practice", 
                url: "https://www.youtube.com/watch?v=xh8puYpkek0&list=PLMQ4WMltba-GNsXICbIPUpwS28YVEoe2F&index=16", 
                thumbnail: "images/thumbnails/dance-sweet-venom.jpg",
                description: "Dance Practice"
            },
{ 
                name: "ENHYPEN Still Monster Dance Practice", 
                url: "https://www.youtube.com/watch?v=keJuXhBPg3o&list=PLMQ4WMltba-GNsXICbIPUpwS28YVEoe2F&index=14", 
                thumbnail: "images/thumbnails/dance-still-monster.jpg",
                description: "Dance Practice"
            },
{ 
                name: "ENHYPEN Fatal trouble Dance Practice", 
                url: "https://www.youtube.com/watch?v=GwnvuL3QCdE&list=PLMQ4WMltba-GNsXICbIPUpwS28YVEoe2F&index=10", 
                thumbnail: "images/thumbnails/dance-fatal-trouble.jpg",
                description: "Dance Practice"
            },
{ 
                name: "ENHYPEN XO (Only If You Say Yes) Dance Practice", 
                url: "https://www.youtube.com/watch?v=DExTX2QYFVY&list=PLMQ4WMltba-GNsXICbIPUpwS28YVEoe2F&index=9", 
                thumbnail: "images/thumbnails/dance-xo.jpg",
                description: "Dance Practice"
            },
{
                name: "ENHYPEN Brought The Heat Back Dance Practice", 
                url: "https://www.youtube.com/watch?v=0tNVuwPB3xc&list=PLMQ4WMltba-GNsXICbIPUpwS28YVEoe2F&index=8", 
                thumbnail: "images/thumbnails/dance-bthb.jpg",
                description: "Dance Practice"
            },
{ 
                name: "ENHYPEN No Doubt Dance Practice", 
                url: "https://www.youtube.com/watch?v=AkioZY59-DA&list=PLMQ4WMltba-GNsXICbIPUpwS28YVEoe2F&index=7", 
                thumbnail: "images/thumbnails/dance-no-doubt.jpg",
                description: "Dance Practice"
            },
{ 
                name: "ENHYPEN Daydream Dance Practice", 
                url: "https://www.youtube.com/watch?v=CWBT6EnJ3U0&list=PLMQ4WMltba-GNsXICbIPUpwS28YVEoe2F&index=5", 
                thumbnail: "images/thumbnails/dance-daydream.jpg",
                description: "Dance Practice"
            },
{ 
                name: "ENHYPEN Moonstruck Dance Practice", 
                url: "https://www.youtube.com/watch?v=7T8yERKbXfc&list=PLMQ4WMltba-GNsXICbIPUpwS28YVEoe2F&index=3", 
                thumbnail: "images/thumbnails/dance-moonstruck.jpg",
                description: "Dance Practice"
            },
{ 
                name: "ENHYPEN Bad Desire (With or Without You) Dance Practice", 
                url: "https://www.youtube.com/watch?v=qhgYrr_3zhE&list=PLMQ4WMltba-GNsXICbIPUpwS28YVEoe2F&index=2", 
                thumbnail: "images/thumbnails/dance-bad-desire.jpg",
                description: "Dance Practice"
            },
{ 
                name: "ENHYPEN Outside Dance Practice", 
                url: "https://www.youtube.com/watch?v=1sFHss7ZkvE&list=PLMQ4WMltba-GNsXICbIPUpwS28YVEoe2F&index=1", 
                thumbnail: "images/thumbnails/dance-outside.jpg",
                description: "Dance Practice"
            },
{ 
                name: "ENHYPEN Chamber 5 (2025 ver.) Dance Practice", 
                url: "https://www.youtube.com/watch?v=2GdWAnLdiVQ&list=RD2GdWAnLdiVQ&start_radio=1", 
                thumbnail: "images/thumbnails/dance-chamber.jpg",
                description: "Dance Practice"
            },
{ 
                name: "ENHYPEN Knife Dance Practice", 
                url: "https://www.youtube.com/watch?v=vU43ebmiPRk", 
                thumbnail: "images/thumbnails/dance-knife.jpg",
                description: "Dance Practice"
            },
            // ADD MORE DANCE PRACTICES HERE
        ]
    },
    
    "MVs Reaction": {
        "Member Reactions": [
            { 
                name: "Given-Taken' MV reaction", 
                url: "https://www.youtube.com/watch?v=bJrc1VqUnN0&list=PLPgww_XLtFsiuTez2FZTeeOk4EcMejDee&index=10", 
                thumbnail: "images/thumbnails/reaction-given-taken.jpg",
                description: "M/Vs Reaction"
            },
{ 
                name: "Let Me In (20 CUBE) MV reaction", 
                url: "https://www.youtube.com/watch?v=JwSpoMMJSzk&list=PLPgww_XLtFsiuTez2FZTeeOk4EcMejDee&index=9", 
                thumbnail: "images/thumbnails/reaction-let-me-in.jpg",
                description: "M/Vs Reaction"
            },
{ 
                name: "Drunk Dazed MV reaction", 
                url: "https://www.youtube.com/watch?v=FV4ccfIsPuA&list=PLPgww_XLtFsiuTez2FZTeeOk4EcMejDee&index=8", 
                thumbnail: "images/thumbnails/reaction-drunk-dazed.jpg",
                description: "M/Vs Reaction"
            },
{ 
                name: "FEVER MV reaction", 
                url: "https://www.youtube.com/watch?v=fhDAh0-6lfM&list=PLPgww_XLtFsiuTez2FZTeeOk4EcMejDee&index=7", 
                thumbnail: "images/thumbnails/reaction-fever.jpg",
                description: "M/Vs Reaction"
            },
{ 
                name: "Tamed Dashed MV reaction", 
                url: "https://www.youtube.com/watch?v=2uzVmBKBnPk&list=PLPgww_XLtFsiuTez2FZTeeOk4EcMejDee&index=6", 
                thumbnail: "images/thumbnails/reaction-tamed-dashed.jpg",
                description: "M/Vs Reaction"
            },
{ 
                name: "Future Perfect (Pass the MIC) MV reaction", 
                url: "https://www.youtube.com/watch?v=R2p67tpomo4&list=PLPgww_XLtFsiuTez2FZTeeOk4EcMejDee&index=5", 
                thumbnail: "images/thumbnails/reaction-ptm.jpg",
                description: "M/Vs Reaction"
            },
{ 
                name: "Bite Me MV reaction", 
                url: "https://www.youtube.com/watch?v=orYoxulfmeY&list=PLPgww_XLtFsiuTez2FZTeeOk4EcMejDee&index=3", 
                thumbnail: "images/thumbnails/reaction-bite-me.jpg",
                description: "M/Vs Reaction"
            },
{ 
                name: "Sacrifice (Eat Me Up) MV reaction", 
                url: "https://www.youtube.com/watch?v=6Qp5m5q1QL4&list=PLPgww_XLtFsiuTez2FZTeeOk4EcMejDee&index=2", 
                thumbnail: "images/thumbnails/reaction-sacrifice.jpg",
                description: "M/Vs Reaction"
            },
{ 
                name: "Sweet Venom MV reaction", 
                url: "https://www.youtube.com/watch?v=gHfrP4M0I4c&list=PLPgww_XLtFsiuTez2FZTeeOk4EcMejDee&index=1", 
                thumbnail: "images/thumbnails/reaction-sweet-venom.jpg",
                description: "M/Vs Reaction"
            },
{ 
                name: "XO (Only If You Say Yes) MV reaction", 
                url: "https://www.youtube.com/watch?v=X3lPIxiSY_M", 
                thumbnail: "images/thumbnails/reaction-xo.jpg",
                description: "M/Vs Reaction"
            },
{ 
                name: "Brought The Heat Back MV reaction", 
                url: "https://www.youtube.com/watch?v=2rb9c4XKdvc", 
                thumbnail: "images/thumbnails/reaction-bthb.jpg",
                description: "M/Vs Reaction"
            },
{ 
                name: "No Doubt MV reaction", 
                url: "https://www.youtube.com/watch?v=aTenLjbmWLo&list=RDaTenLjbmWLo&start_radio=1", 
                thumbnail: "images/thumbnails/reaction-no-doubt.jpg",
                description: "M/Vs Reaction"
            },
{ 
                name: "Bad Desire (With or Without You) MV reaction", 
                url: "https://www.youtube.com/watch?v=El4KDC9_hEU", 
                thumbnail: "images/thumbnails/reaction-bad-desire.jpg",
                description: "M/Vs Reaction"
            },
            // ADD MORE REACTIONS HERE
        ]
    },
    
    "Variety Shows": {
        "EN-O'CLOCK": [
            { 
                name: "EN-O'CLOCK EP.1", 
                url: "https://www.youtube.com/watch?v=TNuG0Ns-xVU&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=130", 
                thumbnail: "images/en o clock/enoclock-1.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.2", 
                url: "https://www.youtube.com/watch?v=UI1EpUEkCvM&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=129", 
                thumbnail: "images/en o clock/enoclock-2.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.3", 
                url: "https://www.youtube.com/watch?v=vgESPiIXz4o&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=128", 
                thumbnail: "images/en o clock/enoclock-3.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.4", 
                url: "https://www.youtube.com/watch?v=y4LoIlTVupw&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=127", 
                thumbnail: "images/en o clock/enoclock-4.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.5", 
                url: "https://www.youtube.com/watch?v=Ezb1M4xWasY&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=126", 
                thumbnail: "images/en o clock/enoclock-5.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.6", 
                url: "https://www.youtube.com/watch?v=fg0Q7s2mwIg&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=125", 
                thumbnail: "images/en o clock/enoclock-6.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.7", 
                url: "https://www.youtube.com/watch?v=wBtlDUO1mbk&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=124", 
                thumbnail: "images/en o clock/enoclock-7.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.8", 
                url: "https://www.youtube.com/watch?v=BsI2CfKDr1c&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=123", 
                thumbnail: "images/en o clock/enoclock-8.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.9", 
                url: "https://www.youtube.com/watch?v=VKs2EQhTvKI&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=122", 
                thumbnail: "images/en o clock/enoclock-9.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.10", 
                url: "https://www.youtube.com/watch?v=iTV9jtXlG8A&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=121", 
                thumbnail: "images/en o clock/enoclock-10.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.11", 
                url: "https://www.youtube.com/watch?v=X8XTlHXDr_M&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=120", 
                thumbnail: "images/en o clock/enoclock-11.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.12", 
                url: "https://www.youtube.com/watch?v=D9yV-W9DvJk&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=119", 
                thumbnail: "images/en o clock/enoclock-12.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.13", 
                url: "https://www.youtube.com/watch?v=qNp4k0IGXyw&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=118", 
                thumbnail: "images/en o clock/enoclock-13.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.14", 
                url: "https://www.youtube.com/watch?v=0y3qQ1KIeKo&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=117", 
                thumbnail: "images/en o clock/enoclock-14.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.15", 
                url: "https://www.youtube.com/watch?v=yHaUnX0PjsU&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=116", 
                thumbnail: "images/en o clock/enoclock-15.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.16", 
                url: "https://www.youtube.com/watch?v=3M8gemp-19c&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=115", 
                thumbnail: "images/en o clock/enoclock-16.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.17", 
                url: "https://www.youtube.com/watch?v=JtEtItRBsVg&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=114", 
                thumbnail: "images/en o clock/enoclock-17.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.18", 
                url: "https://www.youtube.com/watch?v=kDaK8pgxFVU&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=113", 
                thumbnail: "images/en o clock/enoclock-18.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.19", 
                url: "https://www.youtube.com/watch?v=xIRZYNgozeA&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=112", 
                thumbnail: "images/en o clock/enoclock-19.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.20", 
                url: "https://www.youtube.com/watch?v=tJqqkOsEe1o&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=111", 
                thumbnail: "images/en o clock/enoclock-20.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.21", 
                url: "https://www.youtube.com/watch?v=dq6zFS6tM3E&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=110", 
                thumbnail: "images/en o clock/enoclock-21.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.22", 
                url: "https://www.youtube.com/watch?v=4rHvUgG-DWU&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=109", 
                thumbnail: "images/en o clock/enoclock-22.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.23", 
                url: "https://www.youtube.com/watch?v=xcboCVNSel0&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=108", 
                thumbnail: "images/en o clock/enoclock-23.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.24", 
                url: "https://www.youtube.com/watch?v=N0iM2Kq-NwY&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=107", 
                thumbnail: "images/en o clock/enoclock-24.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.25", 
                url: "https://www.youtube.com/watch?v=cky57UKimIo&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=106", 
                thumbnail: "images/en o clock/enoclock-25.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.26", 
                url: "https://www.youtube.com/watch?v=1DIP6YsOZwY&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=105", 
                thumbnail: "images/en o clock/enoclock-26.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.27", 
                url: "https://www.youtube.com/watch?v=UsK1-E3syAQ&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=104", 
                thumbnail: "images/en o clock/enoclock-27.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.28", 
                url: "https://www.youtube.com/watch?v=l7O2ik5iRPs&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=103", 
                thumbnail: "images/en o clock/enoclock-28.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.29", 
                url: "https://www.youtube.com/watch?v=x-artYHc974&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=102", 
                thumbnail: "images/en o clock/enoclock-29.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.30", 
                url: "https://www.youtube.com/watch?v=1PcB3sqgeXc&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=101", 
                thumbnail: "images/en o clock/enoclock-30.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.31", 
                url: "https://www.youtube.com/watch?v=QYrLPeagciQ&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=100", 
                thumbnail: "images/en o clock/enoclock-31.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.32", 
                url: "https://www.youtube.com/watch?v=wNzOIPJrj6o&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=99", 
                thumbnail: "images/en o clock/enoclock-32.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.33", 
                url: "https://www.youtube.com/watch?v=9RP_ClEsn_w&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=98", 
                thumbnail: "images/en o clock/enoclock-33.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.34", 
                url: "https://www.youtube.com/watch?v=1ARpgiWAe54&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=97", 
                thumbnail: "images/en o clock/enoclock-34.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.35", 
                url: "https://www.youtube.com/watch?v=P4RKbqRRkxQ&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=96", 
                thumbnail: "images/en o clock/enoclock-35.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.36", 
                url: "https://www.youtube.com/watch?v=_EvPd5coJCE&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=95", 
                thumbnail: "images/en o clock/enoclock-36.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.37", 
                url: "https://www.youtube.com/watch?v=xU7-qbVvxWI&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=94", 
                thumbnail: "images/en o clock/enoclock-37.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.38", 
                url: "https://www.youtube.com/watch?v=GAV1vyu0Oa0&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=93", 
                thumbnail: "images/en o clock/enoclock-38.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.39", 
                url: "https://www.youtube.com/watch?v=BBNN8i4DKso&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=92", 
                thumbnail: "images/en o clock/enoclock-39.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.40", 
                url: "https://www.youtube.com/watch?v=hP5ETtYSM4o&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=91", 
                thumbnail: "images/en o clock/enoclock-40.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.41", 
                url: "https://www.youtube.com/watch?v=u3IVuMMpS74&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=90", 
                thumbnail: "images/en o clock/enoclock-41.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.42", 
                url: "https://www.youtube.com/watch?v=OuhVMNqfUvA&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=88", 
                thumbnail: "images/en o clock/enoclock-42.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.43", 
                url: "https://www.youtube.com/watch?v=q-cdjJ082WA&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=87", 
                thumbnail: "images/en o clock/enoclock-43.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.44", 
                url: "https://www.youtube.com/watch?v=poYYb_5RhTw&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=86", 
                thumbnail: "images/en o clock/enoclock-44.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.45", 
                url: "https://www.youtube.com/watch?v=5nR9MnfzdiM&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=85", 
                thumbnail: "images/en o clock/enoclock-45.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.46", 
                url: "https://www.youtube.com/watch?v=8llW9bZTvXc&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=84", 
                thumbnail: "images/en o clock/enoclock-46.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.47", 
                url: "https://www.youtube.com/watch?v=Z-sTlRFHdZ4&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=83", 
                thumbnail: "images/en o clock/enoclock-47.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.48", 
                url: "https://www.youtube.com/watch?v=0izUHAu8EL4&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=82", 
                thumbnail: "images/en o clock/enoclock-48.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.49", 
                url: "https://www.youtube.com/watch?v=nSYFinm0mKk&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=81", 
                thumbnail: "images/en o clock/enoclock-49.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.50", 
                url: "https://www.youtube.com/watch?v=bsFaMNbbhvs&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=80", 
                thumbnail: "images/en o clock/enoclock-50.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.51", 
                url: "https://www.youtube.com/watch?v=Zc_CtMCCKCY&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=79", 
                thumbnail: "images/en o clock/enoclock-51.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.52", 
                url: "https://www.youtube.com/watch?v=4UuRRsYRQPg&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=78", 
                thumbnail: "images/en o clock/enoclock-52.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.53", 
                url: "https://www.youtube.com/watch?v=qdupoVcnSwM&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=77", 
                thumbnail: "images/en o clock/enoclock-53.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.54", 
                url: "https://www.youtube.com/watch?v=T10ApOiUz7E&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=76", 
                thumbnail: "images/en o clock/enoclock-54.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.55", 
                url: "https://www.youtube.com/watch?v=fnhYW723uU0&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=75", 
                thumbnail: "images/en o clock/enoclock-55.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.56", 
                url: "https://www.youtube.com/watch?v=SVHoVrjh8N8&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=74", 
                thumbnail: "images/en o clock/enoclock-56.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.57", 
                url: "https://www.youtube.com/watch?v=zeJuFeRzblw&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=73", 
                thumbnail: "images/en o clock/enoclock-57.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.58", 
                url: "https://www.youtube.com/watch?v=RQXTvWpuXjQ&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=72", 
                thumbnail: "images/en o clock/enoclock-58.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.59", 
                url: "https://www.youtube.com/watch?v=oocDf-mSp4k&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=71", 
                thumbnail: "images/en o clock/enoclock-59.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.60", 
                url: "https://www.youtube.com/watch?v=Jg2cyRUqYMo&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=70", 
                thumbnail: "images/en o clock/enoclock-60.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.61", 
                url: "https://www.youtube.com/watch?v=Ku2p-XnrY8A&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=68", 
                thumbnail: "images/en o clock/enoclock-61.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.62", 
                url: "https://www.youtube.com/watch?v=7V3Z-lRdc6Y&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=67", 
                thumbnail: "images/en o clock/enoclock-62.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.63", 
                url: "https://www.youtube.com/watch?v=ot2shkEc27A&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=66", 
                thumbnail: "images/en o clock/enoclock-63.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.64", 
                url: "https://www.youtube.com/watch?v=ciE4mjPjLlA&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=65", 
                thumbnail: "images/en o clock/enoclock-64.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.65", 
                url: "https://www.youtube.com/watch?v=4jtb6aRIXeo&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=64", 
                thumbnail: "images/en o clock/enoclock-65.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.66", 
                url: "https://www.youtube.com/watch?v=VMBUmF72BKA&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=63", 
                thumbnail: "images/en o clock/enoclock-66.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.67", 
                url: "https://www.youtube.com/watch?v=6hjV0KxVWZo&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=62", 
                thumbnail: "images/en o clock/enoclock-67.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.68", 
                url: "https://www.youtube.com/watch?v=M2wI4Mur2vg&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=61", 
                thumbnail: "images/en o clock/enoclock-68.jpg",
                description: "EN-O'CLOCK"
            },
 { 
                name: "EN-O'CLOCK EP.69", 
                url: "https://www.youtube.com/watch?v=xp5OQVm58Aw&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=60", 
                thumbnail: "images/en o clock/enoclock-69.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.70", 
                url: "https://www.youtube.com/watch?v=Volcj_C5xTY&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=59", 
                thumbnail: "images/en o clock/enoclock-70.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.71", 
                url: "https://www.youtube.com/watch?v=aOKd3zD3R7w&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=58", 
                thumbnail: "images/en o clock/enoclock-71.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.72", 
                url: "https://www.youtube.com/watch?v=SuRrqcHL3HM&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=57", 
                thumbnail: "images/en o clock/enoclock-72.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.73", 
                url: "https://www.youtube.com/watch?v=2T7oyoh606c&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=56", 
                thumbnail: "images/en o clock/enoclock-73.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.74", 
                url: "https://www.youtube.com/watch?v=hNOc3IaYPUQ&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=55", 
                thumbnail: "images/en o clock/enoclock-74.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.75", 
                url: "https://www.youtube.com/watch?v=A11tBtd6lB0&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=54", 
                thumbnail: "images/en o clock/enoclock-75.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.76", 
                url: "https://www.youtube.com/watch?v=MUMxjCfG8a8&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=52", 
                thumbnail: "images/en o clock/enoclock-76.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.77", 
                url: "https://www.youtube.com/watch?v=RUj41q9D9Co&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=51", 
                thumbnail: "images/en o clock/enoclock-77.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.78", 
                url: "https://www.youtube.com/watch?v=VOxBD0cDJZc&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=50", 
                thumbnail: "images/en o clock/enoclock-78.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.79", 
                url: "https://www.youtube.com/watch?v=abk5yh43nHg&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=49", 
                thumbnail: "images/en o clock/enoclock-79.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.80", 
                url: "https://www.youtube.com/watch?v=VgEzWwaO4jw&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=48", 
                thumbnail: "images/en o clock/enoclock-80.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.81", 
                url: "https://www.youtube.com/watch?v=bTL0OK5s4tQ&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=47", 
                thumbnail: "images/en o clock/enoclock-81.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.82", 
                url: "https://www.youtube.com/watch?v=mpkj97irya4&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=46", 
                thumbnail: "images/en o clock/enoclock-82.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.83", 
                url: "https://www.youtube.com/watch?v=DbjPWFYWQwU&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=45", 
                thumbnail: "images/en o clock/enoclock-83.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.84", 
                url: "https://www.youtube.com/watch?v=aabFPyoWiBg&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=44", 
                thumbnail: "images/en o clock/enoclock-84.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.85", 
                url: "https://www.youtube.com/watch?v=0od_bz4wr_s&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=43", 
                thumbnail: "images/en o clock/enoclock-85.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.86", 
                url: "https://www.youtube.com/watch?v=qLvqJxkA0YU&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=42", 
                thumbnail: "images/en o clock/enoclock-86.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.87", 
                url: "https://www.youtube.com/watch?v=_8eoa7HhkwY&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=41", 
                thumbnail: "images/en o clock/enoclock-87.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.88", 
                url: "https://www.youtube.com/watch?v=05_knAlBupU&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=40", 
                thumbnail: "images/en o clock/enoclock-88.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.89", 
                url: "https://www.youtube.com/watch?v=WRn2r27c_1Y&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=39", 
                thumbnail: "images/en o clock/enoclock-89.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.90", 
                url: "https://www.youtube.com/watch?v=6tnAEiHayGk&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=38", 
                thumbnail: "images/en o clock/enoclock-90.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.91", 
                url: "https://www.youtube.com/watch?v=wjwoTlnB5OE&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=37", 
                thumbnail: "images/en o clock/enoclock-91.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.92", 
                url: "https://www.youtube.com/watch?v=Ro2lhrav6iM&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=36", 
                thumbnail: "images/en o clock/enoclock-92.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.93", 
                url: "https://www.youtube.com/watch?v=NDIsfATnLwE&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=35", 
                thumbnail: "images/en o clock/enoclock-93.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.94", 
                url: "https://www.youtube.com/watch?v=vuEkcPhwCW4&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=34", 
                thumbnail: "images/en o clock/enoclock-94.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.95", 
                url: "https://www.youtube.com/watch?v=pnIaFsUv5G8&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=33", 
                thumbnail: "images/en o clock/enoclock-95.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.96", 
                url: "https://www.youtube.com/watch?v=5WHlELTespc&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=32", 
                thumbnail: "images/en o clock/enoclock-96.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.97", 
                url: "https://www.youtube.com/watch?v=G9a5yYpiqZM&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=31", 
                thumbnail: "images/en o clock/enoclock-97.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.98", 
                url: "https://www.youtube.com/watch?v=wa6OuirfOsU&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=30", 
                thumbnail: "images/en o clock/enoclock-98.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.99", 
                url: "https://www.youtube.com/watch?v=uws9EHLrZcU&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=29", 
                thumbnail: "images/en o clock/enoclock-99.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.100", 
                url: "https://www.youtube.com/watch?v=8n2geRAeBRY&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=27", 
                thumbnail: "images/en o clock/enoclock-100.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.101", 
                url: "https://www.youtube.com/watch?v=Ppr01MFw0SQ&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=26", 
                thumbnail: "images/en o clock/enoclock-101.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.102", 
                url: "https://www.youtube.com/watch?v=33DdCpW1tGI&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=25", 
                thumbnail: "images/en o clock/enoclock-102.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.103", 
                url: "https://www.youtube.com/watch?v=ei8kXdiFbsE&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=24", 
                thumbnail: "images/en o clock/enoclock-103.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.104", 
                url: "https://www.youtube.com/watch?v=j_oL8qohwmY&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=23", 
                thumbnail: "images/en o clock/enoclock-104.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.105", 
                url: "https://www.youtube.com/watch?v=BXfvaO0IwT8&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=22", 
                thumbnail: "images/en o clock/enoclock-105.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.106", 
                url: "https://www.youtube.com/watch?v=Dgrq3wtjKIU&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=21", 
                thumbnail: "images/en o clock/enoclock-106.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.107", 
                url: "https://www.youtube.com/watch?v=alyBvkzByUo&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=20", 
                thumbnail: "images/en o clock/enoclock-107.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.108", 
                url: "https://www.youtube.com/watch?v=FpHVhPaeJHs&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=19", 
                thumbnail: "images/en o clock/enoclock-108.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.109", 
                url: "https://www.youtube.com/watch?v=zpxCw3qyz-A&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=18", 
                thumbnail: "images/en o clock/enoclock-109.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.110", 
                url: "https://www.youtube.com/watch?v=Yx66m43W5aQ&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=17", 
                thumbnail: "images/en o clock/enoclock-110.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.111", 
                url: "https://www.youtube.com/watch?v=E4AVZLPkhTU&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=16", 
                thumbnail: "images/en o clock/enoclock-111.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.112", 
                url: "https://www.youtube.com/watch?v=R_xtErnnB-Q&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=15", 
                thumbnail: "images/en o clock/enoclock-112.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.113", 
                url: "https://www.youtube.com/watch?v=7zbgy0XhlXg&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=14", 
                thumbnail: "images/en o clock/enoclock-113.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.114", 
                url: "https://www.youtube.com/watch?v=ior3hX_SgfI&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=13", 
                thumbnail: "images/en o clock/enoclock-114.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.115", 
                url: "https://www.youtube.com/watch?v=u3PqxWs5S7g&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=11", 
                thumbnail: "images/en o clock/enoclock-115.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.116", 
                url: "https://www.youtube.com/watch?v=PxpUd5bRyhQ&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=10", 
                thumbnail: "images/en o clock/enoclock-116.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.117", 
                url: "https://www.youtube.com/watch?v=itbnhmwJs0Q&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=9", 
                thumbnail: "images/en o clock/enoclock-117.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.118", 
                url: "https://www.youtube.com/watch?v=ZSGHVwoBDtY&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=8", 
                thumbnail: "images/en o clock/enoclock-118.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.119", 
                url: "https://www.youtube.com/watch?v=CDhuqPFzcfs&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=7", 
                thumbnail: "images/en o clock/enoclock-119.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.120", 
                url: "https://www.youtube.com/watch?v=rWgnJBfkHzY&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=6", 
                thumbnail: "images/en o clock/enoclock-120.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.121", 
                url: "https://www.youtube.com/watch?v=UJFjKPq5cx4&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=5", 
                thumbnail: "images/en o clock/enoclock-121.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.122", 
                url: "https://www.youtube.com/watch?v=Pbbgk7FJx6w&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=4", 
                thumbnail: "images/en o clock/enoclock-122.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.123", 
                url: "https://www.youtube.com/watch?v=3_Ze2YZfMPQ&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=3", 
                thumbnail: "images/en o clock/enoclock-123.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.124", 
                url: "https://www.youtube.com/watch?v=z8zf41llrfI&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=2", 
                thumbnail: "images/en o clock/enoclock-124.jpg",
                description: "EN-O'CLOCK"
            },
{ 
                name: "EN-O'CLOCK EP.125", 
                url: "https://www.youtube.com/watch?v=H9J5jc5X8rA&list=PLMQ4WMltba-EXWrjvNC18Oj4YEGfZKXkO&index=1", 
                thumbnail: "images/en o clock/enoclock-125.jpg",
                description: "EN-O'CLOCK"
            },

            // ADD MORE EN-O'CLOCK EPISODES HERE
        ],
        "Eat Sleep EN Dive": [
            { 
                name: "Eat Sleep EN Dive | EP.1", 
                url: "https://www.youtube.com/watch?v=5hTXK57bhtY", 
                thumbnail: "images/thumbnails/eat-ep1.jpg",
                description: "Eat Sleep EN Dive"
            },
 { 
                name: "Eat Sleep EN Dive | EP.2", 
                url: "https://www.youtube.com/watch?v=M3aMLuIMYs8", 
                thumbnail: "images/thumbnails/eat-ep2.jpg",
                description: "Eat Sleep EN Dive"
            },
 { 
                name: "Eat Sleep EN Dive | EP.3", 
                url: "https://www.youtube.com/watch?v=DF1CsJsJ0ys", 
                thumbnail: "images/thumbnails/eat-ep3.jpg",
                description: "Eat Sleep EN Dive"
            },
{ 
                name: "Eat Sleep EN Dive | EP.4", 
                url: "https://www.youtube.com/watch?v=czPM50Or4uA", 
                thumbnail: "images/thumbnails/eat-ep4.jpg",
                description: "Eat Sleep EN Dive"
            },
{ 
                name: "Eat Sleep EN Dive | EP.5", 
                url: "https://www.youtube.com/watch?v=ifW4dx3nQ1g", 
                thumbnail: "images/thumbnails/eat-ep5.jpg",
                description: "Eat Sleep EN Dive"
            },
            // ADD MORE FSE EPISODES HERE
        ],
        "SO SO FUN": [
            { 
                name: "ENHYPEN 'SO SO FUN' EP.1", 
                url: "https://www.youtube.com/watch?v=y3fg7AFATA0&list=PLMQ4WMltba-GrMZTqRZinxleeALwB6-YV&index=3", 
                thumbnail: "images/thumbnails/so-fun1.jpg",
                description: "SO SO FUN"
            },
 { 
                name: "ENHYPEN 'SO SO FUN' EP.2", 
                url: "https://www.youtube.com/watch?v=g_NRiQ5k8nA&list=PLMQ4WMltba-GrMZTqRZinxleeALwB6-YV&index=4", 
                thumbnail: "images/thumbnails/so-fun2.jpg",
                description: "SO SO FUN"
            },
 { 
                name: "ENHYPEN 'SO SO FUN' EP.3", 
                url: "https://www.youtube.com/watch?v=9i8vhgF2H7w&list=PLMQ4WMltba-GrMZTqRZinxleeALwB6-YV&index=5", 
                thumbnail: "images/thumbnails/so-fun3.jpg",
                description: "SO SO FUN"
            },
 { 
                name: "ENHYPEN 'SO SO FUN' EP.4", 
                url: "https://www.youtube.com/watch?v=J4Ih3CVmYwM&list=PLMQ4WMltba-GrMZTqRZinxleeALwB6-YV&index=6", 
                thumbnail: "images/thumbnails/so-fun4.jpg",
                description: "SO SO FUN"
            },
 { 
                name: "ENHYPEN 'SO SO FUN' EP.5", 
                url: "https://www.youtube.com/watch?v=5eFLHd6_pg4&list=PLMQ4WMltba-GrMZTqRZinxleeALwB6-YV&index=7", 
                thumbnail: "images/thumbnails/so-fun5.jpg",
                description: "SO SO FUN"
            },
 { 
                name: "ENHYPEN 'SO SO FUN' EP.6", 
                url: "https://www.youtube.com/watch?v=RCJhGNRzoMg&list=PLMQ4WMltba-GrMZTqRZinxleeALwB6-YV&index=8", 
                thumbnail: "images/thumbnails/so-fun6.jpg",
                description: "SO SO FUN"
            },
            // ADD MORE SO SO FUN EPISODES HERE
        ],
        "ENHYPEN & Hi" : [
            { 
                name: "ENHYPEN&Hi Season 1 EP.1", 
                url: "https://www.youtube.com/watch?v=9rTHjfEm-wQ&list=PLe95LKi2MmKiL1ZXuiDS_0UeS0JigQIPI&index=1", 
                thumbnail: "images/thumbnails/enhi1-1.jpg",
                description: "ENHYPEN & Hi Season 1"
            },
 { 
                name: "ENHYPEN&Hi Season 1 EP.2", 
                url: "https://www.youtube.com/watch?v=fiHpL5ybGC0&list=PLe95LKi2MmKiL1ZXuiDS_0UeS0JigQIPI&index=2", 
                thumbnail: "images/thumbnails/enhi1-2.jpg",
                description: "ENHYPEN & Hi Season 1"
            },
{ 
                name: "ENHYPEN&Hi Season 1 EP.3", 
                url: "https://www.youtube.com/watch?v=A3zOlnTqqMg&list=PLe95LKi2MmKiL1ZXuiDS_0UeS0JigQIPI&index=3", 
                thumbnail: "images/thumbnails/enhi1-3.jpg",
                description: "ENHYPEN & Hi Season 1"
            },
{ 
                name: "ENHYPEN&Hi Season 1 EP.4", 
                url: "https://www.youtube.com/watch?v=NHa6En9RJLk&list=PLe95LKi2MmKiL1ZXuiDS_0UeS0JigQIPI&index=4", 
                thumbnail: "images/thumbnails/enhi1-4.jpg",
                description: "ENHYPEN & Hi Season 1"
            },
{ 
                name: "ENHYPEN&Hi Season 2 EP.1", 
                url: "https://www.youtube.com/watch?v=JUUPlE8tWh0&list=PLe95LKi2MmKiL1ZXuiDS_0UeS0JigQIPI&index=5", 
                thumbnail: "images/thumbnails/enhi2-1.jpg",
                description: "ENHYPEN & Hi Season 2"
            },
{ 
                name: "ENHYPEN&Hi Season 2 EP.2", 
                url: "https://www.youtube.com/watch?v=aKDkfPjvn1k&list=PLe95LKi2MmKiL1ZXuiDS_0UeS0JigQIPI&index=6", 
                thumbnail: "images/thumbnails/enhi2-2.jpg",
                description: "ENHYPEN & Hi Season 2"
            },
{ 
                name: "ENHYPEN&Hi Season 2 EP.3", 
                url: "https://www.youtube.com/watch?v=83Yzyx5ky5c&list=PLe95LKi2MmKiL1ZXuiDS_0UeS0JigQIPI&index=7", 
                thumbnail: "images/thumbnails/enhi2-3.jpg",
                description: "ENHYPEN & Hi Season 2"
            },
{ 
                name: "ENHYPEN&Hi Season 2 EP.4", 
                url: "https://www.youtube.com/watch?v=8809Tn5gG8s&list=PLe95LKi2MmKiL1ZXuiDS_0UeS0JigQIPI&index=8", 
                thumbnail: "images/thumbnails/enhi2-4.jpg",
                description: "ENHYPEN & Hi Season 2"
            },
            // ADD MORE ENHYPEN & HI HERE
        ]
    },
    
    "Member Covers": {
        "Heeseung Covers": [
            { 
                name: "Heeseung - Off My Face", 
                url: "https://www.youtube.com/watch?v=n4PDo8W2FJQ&list=RDn4PDo8W2FJQ&start_radio=1", 
                thumbnail: "images/thumbnails/cover-heeseung1.jpg",
                description: "Heeseung Cover"
            },
 { 
                name: "Heeseung - this is what falling in love feels like", 
                url: "https://www.youtube.com/watch?v=pvOJeST5So8&list=RDpvOJeST5So8&start_radio=1", 
                thumbnail: "images/thumbnails/cover-heeseung2.jpg",
                description: "Heeseung Cover"
            },
            // ADD MORE MEMBER COVERS HERE
        ],

    "Jay Covers": [
            { 
                name: "JAY & Yuuri - Dry Flower", 
                url: "https://www.youtube.com/watch?v=v6jLJtIl_HM&list=RDv6jLJtIl_HM&start_radio=1", 
                thumbnail: "images/thumbnails/cover-jay1.jpg",
                description: "Jay Cover"
            },
{ 
                name: "JAY - Always", 
                url: "https://www.youtube.com/watch?v=8oHZYE_0Ndk&list=RD8oHZYE_0Ndk&start_radio=1", 
                thumbnail: "images/thumbnails/cover-jay2.jpg",
                description: "Jay Cover"
            },
            // ADD MORE MEMBER COVERS HERE
        ],

  "Jake Covers": [
            { 
                name: "JAKE - I Don’t Think I’m Okay", 
                url: "https://www.youtube.com/watch?v=yD3gPMdFTts&list=RDyD3gPMdFTts&start_radio=1", 
                thumbnail: "images/thumbnails/cover-jake.jpg",
                description: "Jake Cover"
            },
            // ADD MORE MEMBER COVERS HERE
        ],

  "Sunghoon Covers": [
            { 
                name: "SUNGHOON - (Odoriko)", 
                url: "https://www.youtube.com/watch?v=eAuv9J2R6yM&list=RDeAuv9J2R6yM&start_radio=1", 
                thumbnail: "images/thumbnails/cover-sunghoon.jpg",
                description: "Sunghoon Cover"
            },
            // ADD MORE MEMBER COVERS HERE
        ],

  "Sunoo Covers": [
            { 
                name: "SUNOO - Beautiful ", 
                url: "https://www.youtube.com/watch?v=k2eZVnMOvrg&list=RDk2eZVnMOvrg&start_radio=1", 
                thumbnail: "images/thumbnails/cover-sunoo.jpg",
                description: "Sunoo Cover"
            },
            // ADD MORE MEMBER COVERS HERE
        ],

  "Jungwon Covers": [
            { 
                name: "JUNGWON - Monster", 
                url: "https://www.youtube.com/watch?v=1ddT6MDgHV0&list=RD1ddT6MDgHV0&start_radio=1", 
                thumbnail: "images/thumbnails/cover-jungwon.jpg",
                description: "Jungwon Cover"
            },
            // ADD MORE MEMBER COVERS HERE
        ],

  "NI-KI Covers": [
            { 
                name: "'Trendsetter' X 'HUMBLE.' covered by ENHYPEN NI-KI", 
                url: "https://www.youtube.com/watch?v=2JTBSa7XsjE&list=RD2JTBSa7XsjE&start_radio=1", 
                thumbnail: "images/thumbnails/cover-niki.jpg",
                description: "Ni-ki Cover"
            },
            // ADD MORE MEMBER COVERS HERE
        ],
    },
    
    "EN - LoG": {
        "JUNGWON EN-LoG": [
            { 
                name: "JUNGWON DAY", 
                url: "https://www.youtube.com/watch?v=Xnfxqg3mWuc&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=55", 
                thumbnail: "images/enlog/enlog-won1.jpg",
                description: "EN-LoG"
            },
{ 
                name: "JUNGWON DAY", 
                url: "https://www.youtube.com/watch?v=PK4YeyDN1sU&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=48", 
                thumbnail: "images/enlog/enlog-won2.jpg",
                description: "EN-LoG"
            },
{ 
                name: "[Vlog] JUNGWON", 
                url: "https://www.youtube.com/watch?v=65v6WTnZBO4&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=45", 
                thumbnail: "images/enlog/enlog-won3.jpg",
                description: "EN-LoG"
            },
{ 
                name: "[Vlog] Jungwon's Graduation Day", 
                url: "https://www.youtube.com/watch?v=NX0xIVaQ5FE&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=33", 
                thumbnail: "images/enlog/enlog-won4.jpg",
                description: "EN-LoG"
            },
{ 
                name: "[Vlog] Daily JUNGWON, Vlog of a Twenty Year-Old", 
                url: "https://www.youtube.com/watch?v=ud4zr7kiU04&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=30", 
                thumbnail: "images/enlog/enlog-won5.jpg",
                description: "EN-LoG"
            },
{ 
                name: "Enjoying Time Alone, Camping Out in the Rain - HAPPY JUNGWON loG", 
                url: "https://www.youtube.com/watch?v=MbradA06c6w&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=20", 
                thumbnail: "images/enlog/enlog-won6.jpg",
                description: "EN-LoG"
            },
{ 
                name: "Jungwon's lesson day for productive learning", 
                url: "https://www.youtube.com/watch?v=Q-MSQk1JoPw&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=6", 
                thumbnail: "images/enlog/enlog-won7.jpg",
                description: "EN-LoG"
            },
            // ADD MORE EN-LOG HERE
        ],

        "HEESEUNG EN-LoG": [
            { 
                name: "HEESEUNG DAY", 
                url: "https://www.youtube.com/watch?v=FJF7PiQFA-s&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=57", 
                thumbnail: "images/enlog/enlog-hee1.jpg",
                description: "EN-LoG"
            },
{ 
                name: "HEESEUNG DAY", 
                url: "https://www.youtube.com/watch?v=sVvDaAa7JyQ&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=44", 
                thumbnail: "images/enlog/enlog-hee2.jpg",
                description: "EN-LoG"
            },
{ 
                name: "Eat, Play, and Sing Together - A Day With My Brother - HAPPY HEESEUNG loG", 
                url: "https://www.youtube.com/watch?v=HCgXz3uOeu8&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=26", 
                thumbnail: "images/enlog/enlog-hee3.jpg",
                description: "EN-LoG"
            },
{ 
                name: "Heeseung's healing ringtone making just for ENGENEs", 
                url: "https://www.youtube.com/watch?v=M66CkF1j0F8&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=1", 
                thumbnail: "images/enlog/enlog-hee4.jpg",
                description: "EN-LoG"
            },
            // ADD MORE EN-LOG HERE
        ],

        "JAY EN-LoG": [
            { 
                name: "JAY DAY", 
                url: "https://www.youtube.com/watch?v=pc7Bri9ZQ7w&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=53", 
                thumbnail: "images/enlog/enlog-jay1.jpg",
                description: "EN-LoG"
            },
{ 
                name: "JAY DAY", 
                url: "https://www.youtube.com/watch?v=KbktDjR3cNk&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=43", 
                thumbnail: "images/enlog/enlog-jay2.jpg",
                description: "EN-LoG"
            },
{ 
                name: "JAY'S LA Vlog", 
                url: "https://www.youtube.com/watch?v=FJl1i6AY1Nc&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=36", 
                thumbnail: "images/enlog/enlog-jay3.jpg",
                description: "EN-LoG"
            },
{ 
                name: "From unboxing to cooking - Chef JJong's filial piety day - HAPPY JAY loG", 
                url: "https://www.youtube.com/watch?v=vtC-3PpSlew&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=25", 
                thumbnail: "images/enlog/enlog-jay4.jpg",
                description: "EN-LoG"
            },
{ 
                name: "JAY'S Seattle Vlog", 
                url: "https://www.youtube.com/watch?v=Vz7TxYRJR60&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=8", 
                thumbnail: "images/enlog/enlog-jay5.jpg",
                description: "EN-LoG"
            },
{ 
                name: "Jay's fulfilling day - eating well and working out", 
                url: "https://www.youtube.com/watch?v=8GkbEy56J8E&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=3", 
                thumbnail: "images/enlog/enlog-jay6.jpg",
                description: "EN-LoG"
            },
            // ADD MORE EN-LOG HERE
        ],

       "JAKE EN-LoG": [
            { 
                name: "JAKE DAY", 
                url: "https://www.youtube.com/watch?v=8Ptbcl-S_9E&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=54", 
                thumbnail: "images/enlog/enlog-jake1.jpg",
                description: "EN-LoG"
            },
 { 
                name: "JAKE DAY", 
                url: "https://www.youtube.com/watch?v=qvq0cbLWrQ8&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=42", 
                thumbnail: "images/enlog/enlog-jake2.jpg",
                description: "EN-LoG"
            },
{ 
                name: "A Special Day With Layla - Pup Meets Pup - HAPPY JAKE loG", 
                url: "https://www.youtube.com/watch?v=-_WRzDaPYM4&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=22", 
                thumbnail: "images/enlog/enlog-jake3.jpg",
                description: "EN-LoG"
            },
{ 
                name: "Jake's Visit to the Abandoned Dog Shelter", 
                url: "https://www.youtube.com/watch?v=U8B1gpxjZmU&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=7", 
                thumbnail: "images/enlog/enlog-jake4.jpg",
                description: "EN-LoG"
            },
            // ADD MORE EN-LOG HERE
        ],

       "SUNGHOON EN-LoG": [
            { 
                name: "SUNGHOON DAY", 
                url: "https://www.youtube.com/watch?v=639888JdkeA&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=51", 
                thumbnail: "images/enlog/enlog-hoon1.jpg",
                description: "EN-LoG"
            },
 { 
                name: "SUNGHOON DAY", 
                url: "https://www.youtube.com/watch?v=1F1xDm5gl2Q&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=50", 
                thumbnail: "images/enlog/enlog-hoon2.jpg",
                description: "EN-LoG"
            },
 { 
                name: "SUNGHOON - MC Vlog", 
                url: "https://www.youtube.com/watch?v=RBhGDRjb_pU&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=40", 
                thumbnail: "images/enlog/enlog-hoon3.jpg",
                description: "EN-LoG"
            },
{ 
                name: "A sentimental day with film camera - HAPPY SUNGHOON loG", 
                url: "https://www.youtube.com/watch?v=qKYdlllQ3zc&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=23", 
                thumbnail: "images/enlog/enlog-hoon4.jpg",
                description: "EN-LoG"
            },
{ 
                name: "A day with Sunghoon and his real life sister", 
                url: "https://www.youtube.com/watch?v=WPRJs-_dE64&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=4", 
                thumbnail: "images/enlog/enlog-hoon5.jpg",
                description: "EN-LoG"
            },
            // ADD MORE EN-LOG HERE
        ],

       "SUNOO EN-LoG": [
            { 
                name: "SUNOO DAY", 
                url: "https://www.youtube.com/watch?v=XQeoIEtcemU&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=56", 
                thumbnail: "images/enlog/enlog-sunoo1.jpg",
                description: "EN-LoG"
            },
 { 
                name: "SUNOO DAY", 
                url: "https://www.youtube.com/watch?v=5f-uW6AFp1o&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=41", 
                thumbnail: "images/enlog/enlog-sunoo2.jpg",
                description: "EN-LoG"
            },
 { 
                name: "Sunoo's HAPPY Log", 
                url: "https://www.youtube.com/watch?v=0yAJBeOg4tM&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=24", 
                thumbnail: "images/enlog/enlog-sunoo3.jpg",
                description: "EN-LoG"
            },
 { 
                name: "Dining, Shopping and More - A Day with My Sister - HAPPY SUNOO loG", 
                url: "https://www.youtube.com/watch?v=dKQuRaGYiHQ&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=21", 
                thumbnail: "images/enlog/enlog-sunoo4.jpg",
                description: "EN-LoG"
            },
{ 
                name: "Sunoo's healing day - from eating hot pot to a baking class", 
                url: "https://www.youtube.com/watch?v=YqErGcN6Bq8&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=2", 
                thumbnail: "images/enlog/enlog-sunoo5.jpg",
                description: "EN-LoG"
            },
            // ADD MORE EN-LOG HERE
        ],
 
       "NI-KI EN-LoG": [
            { 
                name: "NI-KI DAY", 
                url: "https://www.youtube.com/watch?v=Wpy_ok9zc3Y&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=52", 
                thumbnail: "images/enlog/enlog-niki1.jpg",
                description: "EN-LoG"
            },
 { 
                name: "NI-KI DAY", 
                url: "https://www.youtube.com/watch?v=JhB2G28Y2Lg&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=49", 
                thumbnail: "images/enlog/enlog-niki2.jpg",
                description: "EN-LoG"
            },
 { 
                name: "I literally did EVERYTHING I wanted - HAPPY NI-KI loG", 
                url: "https://www.youtube.com/watch?v=HLaNV-F0PII&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=27", 
                thumbnail: "images/enlog/enlog-niki3.jpg",
                description: "EN-LoG"
            },
{ 
                name: "Ni-ki's daily life between Japan and Korea", 
                url: "https://www.youtube.com/watch?v=F8NGDVcl61c&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=5", 
                thumbnail: "images/enlog/enlog-niki4.jpg",
                description: "EN-LoG"
            },
            // ADD MORE EN-LOG HERE
        ],

       "ENHYPEN EN-LoG": [
            { 
                name: "[Vlog] JAKE - HEESEUNG - NI-KI", 
                url: "https://www.youtube.com/watch?v=YuXvA0fz2ws&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=47", 
                thumbnail: "images/enlog/enlog-enha1.jpg",
                description: "EN-LoG"
            },
 { 
                name: "[Vlog] SUNOO - JAY", 
                url: "https://www.youtube.com/watch?v=QVQoJ9X2h08&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=46", 
                thumbnail: "images/enlog/enlog-enha2.jpg",
                description: "EN-LoG"
            },
{ 
                name: "[EN-LoG] ENHYPEN", 
                url: "https://www.youtube.com/watch?v=C0pobIqkL6c&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=39", 
                thumbnail: "images/enlog/enlog-enha3.jpg",
                description: "EN-LoG"
            },
{ 
                name: "[EN-LoG] Denimz (a.k.a Hanlimz)", 
                url: "https://www.youtube.com/watch?v=2tzd_-I1eTc&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=38", 
                thumbnail: "images/enlog/enlog-enha4.jpg",
                description: "EN-LoG"
            },
{ 
                name: "[EN-LoG] HEESEUNG - JAKE - SUNGHOON - NI-KI", 
                url: "https://www.youtube.com/watch?v=fu2byLoxYcA&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=37", 
                thumbnail: "images/enlog/enlog-enha5.jpg",
                description: "EN-LoG"
            },
{ 
                name: "[EN-LoG] North American Tour Vlog", 
                url: "https://www.youtube.com/watch?v=JmZLU8YOpEg&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=35", 
                thumbnail: "images/enlog/enlog-enha6.jpg",
                description: "EN-LoG"
            },
{ 
                name: "MILAN Fashion Week vlog - ENHYPEN", 
                url: "https://www.youtube.com/watch?v=Wz4piKWJDrc&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=34", 
                thumbnail: "images/enlog/enlog-enha7.jpg",
                description: "EN-LoG"
            },
{ 
                name: "HEESEUNG, JAKE, SUNGHOON's Ski Resort Vlog", 
                url: "https://www.youtube.com/watch?v=6zt4PZ4Lgfc&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=32", 
                thumbnail: "images/enlog/enlog-enha8.jpg",
                description: "EN-LoG"
            },
{ 
                name: "Namsan Walking Vlog", 
                url: "https://www.youtube.com/watch?v=O-myIir1L1c&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=31", 
                thumbnail: "images/enlog/enlog-enha9.jpg",
                description: "EN-LoG"
            },
{ 
                name: "HEESEUNG-JAKE BASKETBALL Vlog", 
                url: "https://www.youtube.com/watch?v=wBRGD_gsR5o&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=30", 
                thumbnail: "images/enlog/enlog-enha10.jpg",
                description: "EN-LoG"
            },
{ 
                name: "Poland Vlog - ENHYPEN", 
                url: "https://www.youtube.com/watch?v=i275zAnCZzQ&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=28", 
                thumbnail: "images/enlog/enlog-enha11.jpg",
                description: "EN-LoG"
            },
{ 
                name: "LOTTE WORLD Vlog- Dark Moon", 
                url: "https://www.youtube.com/watch?v=ZS3ESNebGO8&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=19", 
                thumbnail: "images/enlog/enlog-enha12.jpg",
                description: "EN-LoG"
            },
{ 
                name: "SUNGHOON and JAKE Vlog (with Tiffany & Co)", 
                url: "https://www.youtube.com/watch?v=WahNB1l-M64&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=18", 
                thumbnail: "images/enlog/enlog-enha13.jpg",
                description: "EN-LoG"
            },
{ 
                name: "MILAN-LOG (Prada SS24 Show in Milan) - ENHYPEN", 
                url: "https://www.youtube.com/watch?v=nye57_VFDcw&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=17", 
                thumbnail: "images/enlog/enlog-enha14.jpg",
                description: "EN-LoG"
            },
{ 
                name: "JAKE and SUNGHOON's Japan Vlog", 
                url: "https://www.youtube.com/watch?v=EZRm_D5O25o&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=16", 
                thumbnail: "images/enlog/enlog-enha15.jpg",
                description: "EN-LoG"
            },
{ 
                name: "ENHYPEN's Japan Tour Vlog #1", 
                url: "https://www.youtube.com/watch?v=f7U1h5u-ywo&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=15", 
                thumbnail: "images/enlog/enlog-enha16.jpg",
                description: "EN-LoG"
            },
{ 
                name: "ENHYPEN's Japan Tour Vlog #2", 
                url: "https://www.youtube.com/watch?v=54uMtkUqWNs&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=14", 
                thumbnail: "images/enlog/enlog-enha17.jpg",
                description: "EN-LoG"
            },
{ 
                name: "JUNGWON & JAKE's Late Night Han River Vlog", 
                url: "https://www.youtube.com/watch?v=fk5NFO10fMg&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=13", 
                thumbnail: "images/enlog/enlog-enha18.jpg",
                description: "EN-LoG"
            },
{ 
                name: "ENHYPEN's North American Tour Vlog #1", 
                url: "https://www.youtube.com/watch?v=wZTE3UaB0m8&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=12", 
                thumbnail: "images/enlog/enlog-enha19.jpg",
                description: "EN-LoG"
            },
{ 
                name: "ENHYPEN's North American Tour Vlog #2", 
                url: "https://www.youtube.com/watch?v=gbuStM6-u4w&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=11", 
                thumbnail: "images/enlog/enlog-enha20.jpg",
                description: "EN-LoG"
            },
{ 
                name: "JUNGWON, SUNGHOON, and NI-KI's Farm Vlog", 
                url: "https://www.youtube.com/watch?v=3QUVMmH-vZA&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=10", 
                thumbnail: "images/enlog/enlog-enha21.jpg",
                description: "EN-LoG"
            },
{ 
                name: "HEESEUNG, JAY, JAKE, and SUNOO's Camping Vlog", 
                url: "https://www.youtube.com/watch?v=1rGiFQh2AgY&list=PLMQ4WMltba-F67iE1rTXm58n5mnFWqSir&index=9", 
                thumbnail: "images/enlog/enlog-enha22.jpg",
                description: "EN-LoG"
            },
{ 
                name: "ENHYPEN'S North American Tour Vlog", 
                url: "https://www.youtube.com/watch?v=8vw__rb_Sd4", 
                thumbnail: "images/enlog/enlog-enha23.jpg",
                description: "EN-LoG"
            },
{ 
                name: "ENHYPEN's European Tour Vlog", 
                url: "https://www.youtube.com/watch?v=gvYWk91yUX8", 
                thumbnail: "images/enlog/enlog-enha24.jpg",
                description: "EN-LoG"
            },
            // ADD MORE EN-LOG HERE
        ],
    },

    "Recording Behind": {
        "Song Recordings": [
            { 
                name: "'DARK MOON: THE BLOOD ALTAR' OST Recording Sketch", 
                url: "https://www.youtube.com/watch?v=n8k8NXjZg7Y&list=PLcQQHE7uQYb-rtMqZz_vGJCZ40RX1-zWI&index=9", 
                thumbnail: "images/thumbnails/rec-one.jpg",
                description: "Recording Behind"
            },
{ 
                name: "'Bite Me' Recording Behind", 
                url: "https://www.youtube.com/watch?v=MqTlF8qzU8Y&list=PLcQQHE7uQYb-rtMqZz_vGJCZ40RX1-zWI&index=8", 
                thumbnail: "images/thumbnails/rec-bite-me.jpg",
                description: "Recording Behind"
            },
{ 
                name: "'Sweet Venom' Recording Behind", 
                url: "https://www.youtube.com/watch?v=GXAqF3_PjoU&list=PLcQQHE7uQYb-rtMqZz_vGJCZ40RX1-zWI&index=7", 
                thumbnail: "images/thumbnails/rec-sweet-venom.jpg",
                description: "Recording Behind"
            },
{ 
                name: "'Fatal Trouble' Recording Behind", 
                url: "https://www.youtube.com/watch?v=BHJn44VZOJY&list=PLcQQHE7uQYb-rtMqZz_vGJCZ40RX1-zWI&index=6", 
                thumbnail: "images/thumbnails/rec-fatal-trouble.jpg",
                description: "Recording Behind"
            },
{ 
                name: "whodunit - ENHYPEN JAY' Recording Behind", 
                url: "https://www.youtube.com/watch?v=jWt6GeuOx9Y&list=PLcQQHE7uQYb-rtMqZz_vGJCZ40RX1-zWI&index=5", 
                thumbnail: "images/thumbnails/rec-jay.jpg",
                description: "Recording Behind"
            },
{ 
                name: "XO (Only If You Say Yes) Recording Behind", 
                url: "https://www.youtube.com/watch?v=CYZvJNlcuBk&list=PLcQQHE7uQYb-rtMqZz_vGJCZ40RX1-zWI&index=4", 
                thumbnail: "images/thumbnails/rec-xo.jpg",
                description: "Recording Behind"
            },
{ 
                name: "Highway 1009 Recording Behind", 
                url: "https://www.youtube.com/watch?v=fsMWKxqI97k&list=PLcQQHE7uQYb-rtMqZz_vGJCZ40RX1-zWI&index=3", 
                thumbnail: "images/thumbnails/rec-highway.jpg",
                description: "Recording Behind"
            },
{ 
                name: "No Doubt Recording Behind", 
                url: "https://www.youtube.com/watch?v=z_gNNMSjLWg&list=PLcQQHE7uQYb-rtMqZz_vGJCZ40RX1-zWI&index=1", 
                thumbnail: "images/thumbnails/rec-no-doubt.jpg",
                description: "Recording Behind"
            },
            // ADD MORE RECORDING BEHIND HERE
        ]
    },
    
    "Dance Jams": {
        "Dance Jam Sessions": [
            { 
                name: "ENHYPEN Dance JAM Live #201027", 
                url: "https://www.youtube.com/watch?v=y2qkx6Th5kY&list=PLMQ4WMltba-GEFdBCCweb1J2XjD9KyFMz&index=23", 
                thumbnail: "images/thumbnails/dance-jam1.jpg",
                description: "Dance Jam"
            },
{ 
                name: "ENHYPEN Dance JAM Live #201106", 
                url: "https://www.youtube.com/watch?v=qAIkRZTvI0A&list=PLMQ4WMltba-GEFdBCCweb1J2XjD9KyFMz&index=22", 
                thumbnail: "images/thumbnails/dance-jam2.jpg",
                description: "Dance Jam"
            },
{ 
                name: "ENHYPEN Dance JAM Live #201108", 
                url: "https://www.youtube.com/watch?v=n5ssbBtOgs4&list=PLMQ4WMltba-GEFdBCCweb1J2XjD9KyFMz&index=21", 
                thumbnail: "images/thumbnails/dance-jam3.jpg",
                description: "Dance Jam"
            },
{ 
                name: "ENHYPEN Dance JAM Live #201114", 
                url: "https://www.youtube.com/watch?v=nEcvdIFe3aI&list=PLMQ4WMltba-GEFdBCCweb1J2XjD9KyFMz&index=20", 
                thumbnail: "images/thumbnails/dance-jam4.jpg",
                description: "Dance Jam"
            },
{ 
                name: "ENHYPEN Dance JAM Live #201120", 
                url: "https://www.youtube.com/watch?v=AtCDIpvP8cw&list=PLMQ4WMltba-GEFdBCCweb1J2XjD9KyFMz&index=19", 
                thumbnail: "images/thumbnails/dance-jam5.jpg",
                description: "Dance Jam"
            },
{ 
                name: "ENHYPEN Dance JAM Live #201120 2", 
                url: "https://www.youtube.com/watch?v=F4awQAvEyPE&list=PLMQ4WMltba-GEFdBCCweb1J2XjD9KyFMz&index=18", 
                thumbnail: "images/thumbnails/dance-jam6.jpg",
                description: "Dance Jam"
            },
{ 
                name: "ENHYPEN Dance JAM Live #201127", 
                url: "https://www.youtube.com/watch?v=mq-YE0QpOfE&list=PLMQ4WMltba-GEFdBCCweb1J2XjD9KyFMz&index=17", 
                thumbnail: "images/thumbnails/dance-jam7.jpg",
                description: "Dance Jam"
            },
{ 
                name: "ENHYPEN Dance JAM Live #210202", 
                url: "https://www.youtube.com/watch?v=JY-u9N-fSfQ&list=PLMQ4WMltba-GEFdBCCweb1J2XjD9KyFMz&index=16", 
                thumbnail: "images/thumbnails/dance-jam8.jpg",
                description: "Dance Jam"
            },
{ 
                name: "ENHYPEN Dance JAM Live #210205", 
                url: "https://www.youtube.com/watch?v=vcEW-vB0UhQ&list=PLMQ4WMltba-GEFdBCCweb1J2XjD9KyFMz&index=15", 
                thumbnail: "images/thumbnails/dance-jam9.jpg",
                description: "Dance Jam"
            },
{ 
                name: "ENHYPEN Dance JAM Live #210222", 
                url: "https://www.youtube.com/watch?v=CXO5Hx3mLJ4&list=PLMQ4WMltba-GEFdBCCweb1J2XjD9KyFMz&index=14", 
                thumbnail: "images/thumbnails/dance-jam10.jpg",
                description: "Dance Jam"
            },
{ 
                name: "ENHYPEN Dance JAM Live #210307", 
                url: "https://www.youtube.com/watch?v=FQFKdv7zjZg&list=PLMQ4WMltba-GEFdBCCweb1J2XjD9KyFMz&index=13", 
                thumbnail: "images/thumbnails/dance-jam11.jpg",
                description: "Dance Jam"
            },
{ 
                name: "ENHYPEN Dance JAM Live #210313", 
                url: "https://www.youtube.com/watch?v=CKhmL1_xWIU&list=PLMQ4WMltba-GEFdBCCweb1J2XjD9KyFMz&index=12", 
                thumbnail: "images/thumbnails/dance-jam12.jpg",
                description: "Dance Jam"
            },
{ 
                name: "ENHYPEN Dance JAM Live #210319", 
                url: "https://www.youtube.com/watch?v=FqXEVwgb13c&list=PLMQ4WMltba-GEFdBCCweb1J2XjD9KyFMz&index=11", 
                thumbnail: "images/thumbnails/dance-jam13.jpg",
                description: "Dance Jam"
            },
{ 
                name: "ENHYPEN Dance JAM Live #210404", 
                url: "https://www.youtube.com/watch?v=rc8aRx94mBw&list=PLMQ4WMltba-GEFdBCCweb1J2XjD9KyFMz&index=10", 
                thumbnail: "images/thumbnails/dance-jam14.jpg",
                description: "Dance Jam"
            },
{ 
                name: "ENHYPEN Dance JAM Live #210611", 
                url: "https://www.youtube.com/watch?v=dZC9Frn2QZs&list=PLMQ4WMltba-GEFdBCCweb1J2XjD9KyFMz&index=9", 
                thumbnail: "images/thumbnails/dance-jam15.jpg",
                description: "Dance Jam"
            },
{ 
                name: "ENHYPEN Dance JAM Live #210627", 
                url: "https://www.youtube.com/watch?v=VjcX7oQxnpQ&list=PLMQ4WMltba-GEFdBCCweb1J2XjD9KyFMz&index=8", 
                thumbnail: "images/thumbnails/dance-jam16.jpg",
                description: "Dance Jam"
            },
{ 
                name: "ENHYPEN Dance JAM Live #210704", 
                url: "https://www.youtube.com/watch?v=nyK6BI8laJk&list=PLMQ4WMltba-GEFdBCCweb1J2XjD9KyFMz&index=7", 
                thumbnail: "images/thumbnails/dance-jam17.jpg",
                description: "Dance Jam"
            },
{ 
                name: "ENHYPEN Dance JAM Live #210717", 
                url: "https://www.youtube.com/watch?v=CfVUSqbx3KE&list=PLMQ4WMltba-GEFdBCCweb1J2XjD9KyFMz&index=6", 
                thumbnail: "images/thumbnails/dance-jam18.jpg",
                description: "Dance Jam"
            },
{ 
                name: "ENHYPEN Dance JAM Live #210814", 
                url: "https://www.youtube.com/watch?v=6yAr_e8YXSI&list=PLMQ4WMltba-GEFdBCCweb1J2XjD9KyFMz&index=5", 
                thumbnail: "images/thumbnails/dance-jam19.jpg",
                description: "Dance Jam"
            },
{ 
                name: "ENHYPEN Dance JAM Live #220227", 
                url: "https://www.youtube.com/watch?v=CHDzV87GY6c&list=PLMQ4WMltba-GEFdBCCweb1J2XjD9KyFMz&index=4", 
                thumbnail: "images/thumbnails/dance-jam20.jpg",
                description: "Dance Jam"
            },
{ 
                name: "ENHYPEN Dance JAM Live #220316", 
                url: "https://www.youtube.com/watch?v=hMh1yLePUZI&list=PLMQ4WMltba-GEFdBCCweb1J2XjD9KyFMz&index=3", 
                thumbnail: "images/thumbnails/dance-jam21.jpg",
                description: "Dance Jam"
            },
{ 
                name: "ENHYPEN Dance Jam Live #220402", 
                url: "https://www.youtube.com/watch?v=4TD-nVTDbcA&list=PLMQ4WMltba-GEFdBCCweb1J2XjD9KyFMz&index=2", 
                thumbnail: "images/thumbnails/dance-jam22.jpg",
                description: "Dance Jam"
            },
{ 
                name: "ENHYPEN Dance Jam Live #220421", 
                url: "https://www.youtube.com/watch?v=vf3zG_YHFtU&list=PLMQ4WMltba-GEFdBCCweb1J2XjD9KyFMz&index=1", 
                thumbnail: "images/thumbnails/dance-jam23.jpg",
                description: "Dance Jam"
            },
            // ADD MORE DANCE JAMS HERE
        ]
    },
    
    "I-LAND": {
        "I-LAND Episodes": [
       { 
            name: "I-LAND Episode 1", 
            url: "https://kisskh.co/Drama/I-LAND/Episode-1?id=3364&ep=68072&a=False&page=0&pageSize=100", 
            thumbnail: "images/thumbnails/iland-ep1.jpg",
            description: "Survival Show"
        },
{ 
            name: "I-LAND Episode 2", 
            url: "https://kisskh.co/Drama/I-LAND/Episode-2?id=3364&ep=68071&page=0&pageSize=100", 
            thumbnail: "images/thumbnails/iland-ep2.jpg",
            description: "Survival Show"
        },
{ 
            name: "I-LAND Episode 3", 
            url: "https://kisskh.co/Drama/I-LAND/Episode-3?id=3364&ep=68070&page=0&pageSize=100", 
            thumbnail: "images/thumbnails/iland-ep3.jpg",
            description: "Survival Show"
        },
{ 
            name: "I-LAND Episode 4", 
            url: "https://kisskh.co/Drama/I-LAND/Episode-4?id=3364&ep=68069&page=0&pageSize=100", 
            thumbnail: "images/thumbnails/iland-ep4.jpg",
            description: "Survival Show"
        },
{ 
            name: "I-LAND Episode 5", 
            url: "https://kisskh.co/Drama/I-LAND/Episode-5?id=3364&ep=68068&page=0&pageSize=100", 
            thumbnail: "images/thumbnails/iland-ep5.jpg",
            description: "Survival Show"
        },
{ 
            name: "I-LAND Episode 6", 
            url: "https://kisskh.co/Drama/I-LAND/Episode-6?id=3364&ep=68067&page=0&pageSize=100", 
            thumbnail: "images/thumbnails/iland-ep6.jpg",
            description: "Survival Show"
        },
{ 
            name: "I-LAND Episode 7", 
            url: "https://kisskh.co/Drama/I-LAND/Episode-7?id=3364&ep=68066&page=0&pageSize=100", 
            thumbnail: "images/thumbnails/iland-ep7.jpg",
            description: "Survival Show"
        },
{ 
            name: "I-LAND Episode 8", 
            url: "https://kisskh.co/Drama/I-LAND/Episode-8?id=3364&ep=68065&page=0&pageSize=100", 
            thumbnail: "images/thumbnails/iland-ep8.jpg",
            description: "Survival Show"
        },
{ 
            name: "I-LAND Episode 9", 
            url: "https://kisskh.co/Drama/I-LAND/Episode-9?id=3364&ep=68064&page=0&pageSize=100", 
            thumbnail: "images/thumbnails/iland-ep9.jpg",
            description: "Survival Show"
        },
{ 
            name: "I-LAND Episode 10", 
            url: "https://kisskh.co/Drama/I-LAND/Episode-10?id=3364&ep=68063&page=0&pageSize=100", 
            thumbnail: "images/thumbnails/iland-ep10.jpg",
            description: "Survival Show"
        },
{ 
            name: "I-LAND Episode 11", 
            url: "https://kisskh.co/Drama/I-LAND/Episode-11?id=3364&ep=68062&page=0&pageSize=100", 
            thumbnail: "images/thumbnails/iland-ep11.jpg",
            description: "Survival Show"
        },
{ 
            name: "I-LAND Episode 12", 
            url: "https://kisskh.co/Drama/I-LAND/Episode-12?id=3364&ep=68061&page=0&pageSize=100", 
            thumbnail: "images/thumbnails/iland-ep12.jpg",
            description: "Survival Show"
        },
            // ADD MORE I-LAND EPISODES HERE
        ]
    },
    
    "Comeback Showcase": {
        "Comeback Showcases": [
            { 
                name: "[ENHYPEN] DEBUT SHOW : DAY ONE", 
                url: "https://www.youtube.com/watch?v=RtafXUvC3bo&list=PLFbUSffkY3PjM8AowoKmtSUNoUXT1dYeS&index=20", 
                thumbnail: "images/thumbnails/cb-day-one.jpg",
                description: "Comeback Showcase"
            },
{ 
                name: "[ENHYPEN COMEBACK SHOW] 'CARNIVAL", 
                url: "https://www.youtube.com/watch?v=yjEh2_iVhvs&list=PLFbUSffkY3PjM8AowoKmtSUNoUXT1dYeS&index=19", 
                thumbnail: "images/thumbnails/cb-carnival.jpg",
                description: "Comeback Showcase"
            },
{ 
                name: "[ENHYPEN COMEBACKSHOW] 'DIMENSION : DILEMMA'", 
                url: "https://www.youtube.com/watch?v=-Tlmfb7BZzA&list=PLFbUSffkY3PjM8AowoKmtSUNoUXT1dYeS&index=17", 
                thumbnail: "images/thumbnails/cb-dilemma.jpg",
                description: "Comeback Showcase"
            },
{ 
                name: "[ENHYPEN COMEBACK SHOW] 'MANIFESTO : DAY 1'", 
                url: "https://www.youtube.com/watch?v=36WwV504Pr8&list=PLFbUSffkY3PjM8AowoKmtSUNoUXT1dYeS&index=14", 
                thumbnail: "images/thumbnails/cb-manifesto.jpg",
                description: "Comeback Showcase"
            },
{ 
                name: "ENHYPEN 'DARK BLOOD' SPECIAL SHOWCASE", 
                url: "https://www.youtube.com/watch?v=BFEc2ydw3cg&list=PLFbUSffkY3PjM8AowoKmtSUNoUXT1dYeS&index=11", 
                thumbnail: "images/thumbnails/cb-dark-blood.jpg",
                description: "Comeback Showcase"
            },
{ 
                name: "ENHYPEN 'ORANGE BLOOD' EN-CONNECT Night", 
                url: "https://www.youtube.com/watch?v=wMXbeJ0iS1Y&list=PLFbUSffkY3PjM8AowoKmtSUNoUXT1dYeS&index=6", 
                thumbnail: "images/thumbnails/cb-orange-blood.jpg",
                description: "Comeback Showcase"
            },
{ 
                name: "ENHYPEN ROMANCE : UNTOLD FAN SHOWCASE", 
                url: "https://www.youtube.com/watch?v=jgHsEm8-tZY&list=PLFbUSffkY3PjM8AowoKmtSUNoUXT1dYeS&index=4", 
                thumbnail: "images/thumbnails/cb-romance.jpg",
                description: "Comeback Showcase"
            },
{ 
                name: "ENHYPEN DESIRE : UNLEASH FAN SHOWCASE", 
                url: "https://www.youtube.com/watch?v=g4e59xsAkr4&list=PLFbUSffkY3PjM8AowoKmtSUNoUXT1dYeS&index=2", 
                thumbnail: "images/thumbnails/cb-desire.jpg",
                description: "Comeback Showcase"
            },
{ 
                name: "ENHYPEN THE SIN : VANISH FAN SHOWCASE", 
                url: "https://www.youtube.com/watch?v=V2ez-may2bc", 
                thumbnail: "images/thumbnails/cb-thesin.jpg",
                description: "Comeback Showcase"
            },
            // ADD MORE COMEBACKS HERE
        ]
    },

"COMEBACK LIVES": {
    "Comeback Lives": [
        { 
            name: "ENHYPEN COMEBACK: CARNIVAL LIVE", 
            url: "https://www.youtube.com/watch?v=oindqoBeyhY&list=PLFbUSffkY3PjM8AowoKmtSUNoUXT1dYeS&index=18", 
            thumbnail: "images/thumbnails/cblive-carnival.jpg",
            description: "Border Barnival Comeback Live"
        },
{ 
            name: "ENHYPEN COMEBACK: DIMENSION DILEMMA LIVE", 
            url: "https://www.youtube.com/watch?v=2cAzif3GRSM&list=PLFbUSffkY3PjM8AowoKmtSUNoUXT1dYeS&index=16", 
            thumbnail: "images/thumbnails/cblive-dilemma.jpg",
            description: "Dimension Dilemma Comeback Live"
        },
{ 
            name: "ENHYPEN COMEBACK: DIMENSION ANSWER LIVE", 
            url: "https://www.youtube.com/watch?v=j5BFfu43ezA&list=PLFbUSffkY3PjM8AowoKmtSUNoUXT1dYeS&index=15", 
            thumbnail: "images/thumbnails/cblive-answer.jpg",
            description: "Dimension Answer Comeback Live"
        },
{ 
            name: "ENHYPEN COMEBACK: MANIFESTO DAY 1 LIVE", 
            url: "https://www.youtube.com/watch?v=3P22F72Slso&list=PLFbUSffkY3PjM8AowoKmtSUNoUXT1dYeS&index=12", 
            thumbnail: "images/thumbnails/cblive-manifesto.jpg",
            description: "Manifesto Day 1 Comeback Live"
        },
{ 
            name: "ENHYPEN COMEBACK: DARK BLOOD LIVE", 
            url: "https://www.youtube.com/watch?v=hC9bBswqCxE&list=PLFbUSffkY3PjM8AowoKmtSUNoUXT1dYeS&index=9", 
            thumbnail: "images/thumbnails/cblive-db.jpg",
            description: "Dark Blood Comeback Live"
        },
{ 
            name: "ENHYPEN COMEBACK: ORANGE BLOOD LIVE", 
            url: "https://www.youtube.com/watch?v=ZoKoFzwfqww&list=PLFbUSffkY3PjM8AowoKmtSUNoUXT1dYeS&index=8", 
            thumbnail: "images/thumbnails/cblive-ob.jpg",
            description: "Orange Blood Comeback Live"
        },
{ 
            name: "ENHYPEN COMEBACK: ROMANCE UNTOLD LIVE", 
            url: "https://www.youtube.com/watch?v=EzlKAzS7lEo&list=PLFbUSffkY3PjM8AowoKmtSUNoUXT1dYeS&index=5", 
            thumbnail: "images/thumbnails/cblive-romance.jpg",
            description: "Romance Untold Comeback Live"
        },
{ 
            name: "ENHYPEN COMEBACK: ROMANCE UNTOLD DAYDREAM LIVE", 
            url: "https://www.youtube.com/watch?v=L9c44lp1iwI&list=PLFbUSffkY3PjM8AowoKmtSUNoUXT1dYeS&index=3", 
            thumbnail: "images/thumbnails/cblive-daydream.jpg",
            description: "Romance Untold Daydream Comeback Live"
        },
{ 
            name: "ENHYPEN COMEBACK: DESIRE : UNLEASH LIVE", 
            url: "https://www.youtube.com/watch?v=gQdOspiKhrE&list=PLFbUSffkY3PjM8AowoKmtSUNoUXT1dYeS&index=1", 
            thumbnail: "images/thumbnails/cblive-desire.jpg",
            description: "Desire Unleash Comeback Live"
        },
{ 
            name: "ENHYPEN COMEBACK: THE SIN : VANISH LIVE", 
            url: "https://www.youtube.com/watch?v=lE3SGTUwJnw", 
            thumbnail: "images/thumbnails/cblive-thesin.jpg",
            description: "The Sin Vanish Comeback Live"
        },
 // ADD OTHER LIVES HERE
    ]
},
    
    "Tours": {
        "World Tours": [
 { 
            name: "ENHYPEN MANIFESTO TOUR OSAKA", 
            url: "https://drive.google.com/file/d/1qTfMOUPKTKM6a0aPryiKdBMOWO2_CczI/view?usp=sharing", 
            thumbnail: "images/thumbnails/tour-manifesto.jpg",
            description: "Manifesto Tour 2022"
        },
             { 
            name: "ENHYPEN FATE TOUR SEOUL DAY 1", 
            url: "https://drive.google.com/file/d/1kc52jfieiXOIiGleDvAoTBttZz28UDuw/view?usp=sharing", 
            thumbnail: "images/thumbnails/tour-fatee.jpg",
            description: "Fate Tour 2023"
        },
{ 
            name: "ENHYPEN FATE TOUR SEOUL DAY 2", 
            url: "https://drive.google.com/file/d/19LhhinYGYeItH6gwTeWJRwnB4hun5sll/view?usp=drive_link", 
            thumbnail: "images/thumbnails/tour-fatee.jpg",
            description: "Fate Tour 2023"
        },
{ 
            name: "ENHYPEN FATE TOKYO DOME D1", 
            url: "https://drive.google.com/file/d/1TXlP15iQPid25mrwQ08QkpN5hnp4uwLK/view?usp=sharing", 
            thumbnail: "images/thumbnails/tour-fatee.jpg",
            description: "Fate Tour 2023"
        },
{ 
            name: "ENHYPEN FATE+ SAITAMA D2", 
            url: "https://drive.google.com/file/d/1H8Jyv00ogjmp1yutVazNSsN4zlB-8gVs/view?usp=sharing", 
            thumbnail: "images/thumbnails/tour-fate.jpg",
            description: "Fate+ Tour 2024"
        },
{ 
            name: "ENHYPEN FATE+ SEOUL D1", 
            url: "https://drive.google.com/file/d/1bhh9SIyECu-xk7Q6TykmrTNUad0EBA43/view?usp=sharing", 
            thumbnail: "images/thumbnails/tour-fate.jpg",
            description: "Fate+ Tour 2024"
        },
{ 
            name: "ENHYPEN FATE+ SEOUL D2", 
            url: "https://drive.google.com/file/d/1MvunXLy2vD477TUrS40jkYX2ScnI83jH/view?usp=sharing", 
            thumbnail: "images/thumbnails/tour-fate.jpg",
            description: "Fate+ Tour 2024"
        },
{ 
            name: "ENHYPEN FATE+ SEOUL D3", 
            url: "https://drive.google.com/file/d/1Cp8iZaFPWT_hvn56J990ARWEs3jBpTgW/view?usp=sharing", 
            thumbnail: "images/thumbnails/tour-fate.jpg",
            description: "Fate+ Tour 2024"
        },
{ 
            name: "ENHYPEN WALK THE LINE JAPAN", 
            url: "https://drive.google.com/file/d/124uH9pPH9ALJCtGfZfxRZ2i1weM-FeG1/view?usp=sharing", 
            thumbnail: "images/thumbnails/tour-wtl-jpn.jpg",
            description: "WTL Tour 2024"
        },
{ 
            name: "ENHYPEN WALK THE LINE OSAKA", 
            url: "https://drive.google.com/file/d/1FodAaxpcEkliH3TiioTpHxzVWQ32Nh92/view?usp=sharing", 
            thumbnail: "images/thumbnails/tour-wtl-jpn.jpg",
            description: "WTL Tour 2025"
        },
{ 
            name: "ENHYPEN WALK THE LINE JAPAN SUMMER EDITION", 
            url: "https://drive.google.com/file/d/1q5HTQ2KseVw9m5bytYdNTKmGqbpkmIEe/view?usp=sharing", 
            thumbnail: "images/thumbnails/tour-wtl-jpn2.jpg",
            description: "WTL Tour 2025"
        },
            // ADD MORE TOURS HERE
        ]
    },
    
    "Concept Cinema": {
        "Concept Films": [
            { 
                name: "ENHYPEN 'DARK BLOOD' Concept Trailer", 
                url: "https://www.youtube.com/watch?v=G89zYm30v1M&list=RDG89zYm30v1M&start_radio=1", 
                thumbnail: "images/thumbnails/concept-dark-blood.jpg",
                description: "Concept Film"
            },
{ 
                name: "ENHYPEN 'ORANGE BLOOD' Concept Trailer", 
                url: "https://www.youtube.com/watch?v=LqxMyWLZtwM&list=RDLqxMyWLZtwM&start_radio=1", 
                thumbnail: "images/thumbnails/concept-orange-blood.jpg",
                description: "Concept Film"
            },
{ 
                name: "ENHYPEN UNTOLD Concept Cinema", 
                url: "https://www.youtube.com/watch?v=eYOTtz-7js0", 
                thumbnail: "images/thumbnails/concept-untold.jpg",
                description: "Concept Cinema"
            },
{ 
                name: "ENHYPEN DESIRE Concept Cinema", 
                url: "https://www.youtube.com/watch?v=FQCkFeI_Vto&list=RDFQCkFeI_Vto&start_radio=1", 
                thumbnail: "images/thumbnails/concept-desire.jpg",
                description: "Concept Cinema"
            },
            // ADD MORE CONCEPT FILMS HERE
        ]
    },

  "Album Previews": {
        "Album Previews": [
            { 
                name: "ENHYPEN BORDER : DAY ONE Preview", 
                url: "https://www.youtube.com/watch?v=pnhSnVQncvU&list=RDpnhSnVQncvU&start_radio=1", 
                thumbnail: "images/thumbnails/preview-border-day-one.jpg",
                description: "Album Preview"
            },
{ 
                name: "ENHYPEN BORDER : CARNIVAL Preview", 
                url: "https://www.youtube.com/watch?v=ZxW5GYpPWSY&list=RDZxW5GYpPWSY&start_radio=1", 
                thumbnail: "images/thumbnails/preview-border-carnival.jpg",
                description: "Album Preview"
            },
{ 
                name: "ENHYPEN DIMENSION : ANSWER Preview", 
                url: "https://www.youtube.com/watch?v=YTqEkvnWM5I&list=RDYTqEkvnWM5I&start_radio=1", 
                thumbnail: "images/thumbnails/preview-dimension-answer.jpg",
                description: "Album Preview"
            },
{ 
                name: "ENHYPEN DIMENSION : DILEMMA Preview", 
                url: "https://www.youtube.com/watch?v=utL189MfJNs", 
                thumbnail: "images/thumbnails/preview-dimension-dilemma.jpg",
                description: "Album Preview"
            },
{ 
                name: "ENHYPEN MANIFESTO : DAY 1 Preview", 
                url: "https://www.youtube.com/watch?v=A0twfQagKPY&list=RDA0twfQagKPY&start_radio=1", 
                thumbnail: "images/thumbnails/preview-manifesto.jpg",
                description: "Album Preview"
            },
{ 
                name: "ENHYPEN DARK BLOOD Preview", 
                url: "https://www.youtube.com/watch?v=47SAocGDKrw&list=RD47SAocGDKrw&start_radio=1", 
                thumbnail: "images/thumbnails/preview-dark-blood.jpg",
                description: "Album Preview"
            },
{ 
                name: "ENHYPEN ORANGE BLOOD Preview", 
                url: "https://www.youtube.com/watch?v=3oCmO5u4Ms4&list=RD3oCmO5u4Ms4&start_radio=1", 
                thumbnail: "images/thumbnails/preview-orange-blood.jpg",
                description: "Album Preview"
            },
{ 
                name: "ENHYPEN MEMORABILIA Preview", 
                url: "https://www.youtube.com/watch?v=ZsP9J7AkaQo&list=RDZsP9J7AkaQo&start_radio=1", 
                thumbnail: "images/thumbnails/preview-memorabilia.jpg",
                description: "Album Preview"
            },
{ 
                name: "ENHYPEN  ROMANCE : UNTOLD Preview", 
                url: "https://www.youtube.com/watch?v=I0Z492SEnFw&list=RDI0Z492SEnFw&start_radio=1", 
                thumbnail: "images/thumbnails/preview-romance.jpg",
                description: "Album Preview"
            },
{ 
                name: "ENHYPEN  DESIRE : UNLEASH Preview", 
                url: "https://www.youtube.com/watch?v=Ew-qTEZ2T3E&list=RDEw-qTEZ2T3E&start_radio=1", 
                thumbnail: "images/thumbnails/preview-desire.jpg",
                description: "Album Preview"
            },
{ 
                name: "ENHYPEN THE SIN : VANISH Chapter 1. No Way Back", 
                url: "https://www.youtube.com/watch?v=OCfFVUySdYw&list=PLMQ4WMltba-Goiqtwj0WzYvdjtZ_kYDEt&index=15", 
                thumbnail: "images/thumbnails/preview-nowayback.jpg",
                description: "Album Preview"
            },
{ 
                name: "ENHYPEN THE SIN : VANISH Chapter 2. Big Girl Don't Cry", 
                url: "https://www.youtube.com/watch?v=8NVQuLU9SdE&list=PLMQ4WMltba-Goiqtwj0WzYvdjtZ_kYDEt&index=13", 
                thumbnail: "images/thumbnails/preview-bgdc.jpg",
                description: "Album Preview"
            },
{ 
                name: "ENHYPEN THE SIN : VANISH Chapter 3. Stealer", 
                url: "https://www.youtube.com/watch?v=aSVrki8FQUU&list=PLMQ4WMltba-Goiqtwj0WzYvdjtZ_kYDEt&index=11", 
                thumbnail: "images/thumbnails/preview-stealer.jpg",
                description: "Album Preview"
            },
{ 
                name: "ENHYPEN THE SIN : VANISH Chapter 4. Knife", 
                url: "https://www.youtube.com/watch?v=GMSWTYbwAdI&list=PLMQ4WMltba-Goiqtwj0WzYvdjtZ_kYDEt&index=4", 
                thumbnail: "images/thumbnails/preview-knife.jpg",
                description: "Album Preview"
            },
{ 
                name: "ENHYPEN THE SIN : VANISH Narration Preview", 
                url: "https://www.youtube.com/watch?v=OVXc3rsDbEw&list=PLMQ4WMltba-Goiqtwj0WzYvdjtZ_kYDEt&index=3", 
                thumbnail: "images/thumbnails/preview-narration.jpg",
                description: "Album Preview"
            },
            // ADD MORE ALBUM PREVIEWS HERE
        ]
    },
    
    "Studio Choom": {
        "Studio Choom Performances": [
            { 
                name: "ENHYPEN 'Given-Taken' (4K)", 
                url: "https://www.youtube.com/watch?v=afkYP_Nuh64&list=PLooMjMQKCBnXvFS9btFQw-aaBjrDs-q_N&index=106", 
                thumbnail: "images/thumbnails/choom-given-taken.jpg",
                description: "Studio Choom"
            },
{ 
                name: "ENHYPEN 'Drunk-Dazed' (4K)", 
                url: "https://www.youtube.com/watch?v=7F_iz7ucNmM&list=PLooMjMQKCBnXvFS9btFQw-aaBjrDs-q_N&index=95", 
                thumbnail: "images/thumbnails/choom-drunk-dazed.jpg",
                description: "Studio Choom"
            },
{ 
                name: "ENHYPEN 'Tamed-Dashed' (4K)", 
                url: "https://www.youtube.com/watch?v=CCA4w0CmEjo&list=PLooMjMQKCBnXvFS9btFQw-aaBjrDs-q_N&index=83", 
                thumbnail: "images/thumbnails/choom-tamed-dashed.jpg",
                description: "Studio Choom"
            },
{ 
                name: "[MIX & MAX] ENHYPEN JUNGWON & NI-KI 'Bleeding Darkness' (4K)", 
                url: "https://www.youtube.com/watch?v=oiBLJPvGNc8&list=PLooMjMQKCBnXvFS9btFQw-aaBjrDs-q_N&index=72", 
                thumbnail: "images/thumbnails/choom-mixmax.jpg",
                description: "Studio Choom"
            },
{ 
                name: "ENHYPEN 'Future Perfect (Pass the MIC)' (4K)", 
                url: "https://www.youtube.com/watch?v=t70EnE_MfEw&list=PLooMjMQKCBnXvFS9btFQw-aaBjrDs-q_N&index=67", 
                thumbnail: "images/thumbnails/choom-ptm.jpg",
                description: "Studio Choom"
            },
{ 
                name: "ENHYPEN 'Bite Me' (4K)", 
                url: "https://www.youtube.com/watch?v=seSOmL0XBZQ&list=PLooMjMQKCBnXvFS9btFQw-aaBjrDs-q_N&index=56", 
                thumbnail: "images/thumbnails/choom-bite-me.jpg",
                description: "Studio Choom"
            },
{ 
                name: "ENHYPEN 'Sweet Venom' (4K)", 
                url: "https://www.youtube.com/watch?v=G-LVx18Wpm8&list=PLooMjMQKCBnXvFS9btFQw-aaBjrDs-q_N&index=46", 
                thumbnail: "images/thumbnails/choom-sweet-venom.jpg",
                description: "Studio Choom"
            },
{ 
                name: "ENHYPEN 'XO (Only If You Say Yes)' (4K)", 
                url: "https://www.youtube.com/watch?v=N7RhqKVfmDc&list=PLooMjMQKCBnXvFS9btFQw-aaBjrDs-q_N&index=32", 
                thumbnail: "images/thumbnails/choom-xo.jpg",
                description: "Studio Choom"
            },
{ 
                name: "ENHYPEN 'No Doubt' (4K)", 
                url: "https://www.youtube.com/watch?v=7nT4-kGpLBk&list=PLooMjMQKCBnXvFS9btFQw-aaBjrDs-q_N&index=21", 
                thumbnail: "images/thumbnails/choom-no-doubt.jpg",
                description: "Studio Choom"
            },
{ 
                name: "ENHYPEN 'Bad Desire (With or Without You)' (4K)", 
                url: "https://www.youtube.com/watch?v=2TUykRNsi44&list=PLooMjMQKCBnXvFS9btFQw-aaBjrDs-q_N&index=10", 
                thumbnail: "images/thumbnails/choom-bad-desire.jpg",
                description: "Studio Choom"
            },
{ 
                name: "ENHYPEN 'Knife' (4K)", 
                url: "https://www.youtube.com/watch?v=JUluH7IckpI", 
                thumbnail: "images/thumbnails/choom-knife.jpg",
                description: "Studio Choom"
            },
            // ADD MORE STUDIO CHOOM HERE
        ]
    },
    
    "EN-CHELLA": {
        "ENHYPEN Coachella Performances": [
             { 
            name: "ENHYPEN Coachella Week 1", 
            url: "https://drive.google.com/file/d/1tsiiztrDlBSZfytSDA-PQPFzLcmY8nu8/view?usp=sharing", 
            thumbnail: "images/thumbnails/enchella-week-one.jpg",
            description: "ENHYPEN Coachella 2025"
        },
{ 
            name: "ENHYPEN Coachella Week 2", 
            url: "https://player.vimeo.com/video/1146188277?fl=pl&fe=sh", 
            thumbnail: "images/thumbnails/enchella-week-two.jpg",
            description: "ENHYPEN Coachella 2025"
        }
            // ADD MORE EN-CHELLA HERE
        ]
    },

   "EN-DRAMA": {
        "EN-DRAMA EPISODES": [
             { 
            name: "ENHYPEN 'EN-DRAMA' EP.1", 
            url: "https://www.youtube.com/watch?v=xlEVzXO3Afc&list=PLMQ4WMltba-FfzVrtGWWBV_KCXz4dowM8&index=11", 
            thumbnail: "images/thumbnails/endrama-ep1.jpg",
            description: "EN-DRAMA"
        },
{ 
            name: "ENHYPEN 'EN-DRAMA' EP.2", 
            url: "https://www.youtube.com/watch?v=uCbYoSr5Rs4&list=PLMQ4WMltba-FfzVrtGWWBV_KCXz4dowM8&index=10", 
            thumbnail: "images/thumbnails/endrama-ep2.jpg",
            description: "EN-DRAMA"
        },
{ 
            name: "ENHYPEN 'EN-DRAMA' EP.3", 
            url: "https://www.youtube.com/watch?v=nFznjV4aKMI&list=PLMQ4WMltba-FfzVrtGWWBV_KCXz4dowM8&index=9", 
            thumbnail: "images/thumbnails/endrama-ep3.jpg",
            description: "EN-DRAMA"
        },
{ 
            name: "ENHYPEN 'EN-DRAMA' EP.4", 
            url: "https://www.youtube.com/watch?v=YonIPoIb3Qw&list=PLMQ4WMltba-FfzVrtGWWBV_KCXz4dowM8&index=8", 
            thumbnail: "images/thumbnails/endrama-ep4.jpg",
            description: "EN-DRAMA"
        },
{ 
            name: "ENHYPEN 'EN-DRAMA' EP.5", 
            url: "https://www.youtube.com/watch?v=WyFqe1P6sSc&list=PLMQ4WMltba-FfzVrtGWWBV_KCXz4dowM8&index=7", 
            thumbnail: "images/thumbnails/endrama-ep5.jpg",
            description: "EN-DRAMA"
        },
{ 
            name: "ENHYPEN 'EN-DRAMA' EP.6", 
            url: "https://www.youtube.com/watch?v=6zYCMNU7hGA&list=PLMQ4WMltba-FfzVrtGWWBV_KCXz4dowM8&index=6", 
            thumbnail: "images/thumbnails/endrama-ep6.jpg",
            description: "EN-DRAMA"
        },
{ 
            name: "ENHYPEN 'EN-DRAMA' EP.7", 
            url: "https://www.youtube.com/watch?v=Q5ml7mPdBWI&list=PLMQ4WMltba-FfzVrtGWWBV_KCXz4dowM8&index=5", 
            thumbnail: "images/thumbnails/endrama-ep7.jpg",
            description: "EN-DRAMA"
        },
{ 
            name: "ENHYPEN 'EN-DRAMA' EP.8", 
            url: "https://www.youtube.com/watch?v=8sxUW-Glw6M&list=PLMQ4WMltba-FfzVrtGWWBV_KCXz4dowM8&index=4", 
            thumbnail: "images/thumbnails/endrama-ep8.jpg",
            description: "EN-DRAMA"
        },
{ 
            name: "ENHYPEN 'EN-DRAMA' EP.9", 
            url: "https://www.youtube.com/watch?v=EgZR9ZNwwpw&list=PLMQ4WMltba-FfzVrtGWWBV_KCXz4dowM8&index=3", 
            thumbnail: "images/thumbnails/endrama-ep9.jpg",
            description: "EN-DRAMA"
        },
            // ADD MORE EN-DRAMA HERE
        ]
    },

   "ENniversary": {
        "2021 ENniversary": [
{ 
            name: "[2021 ENniversary] Intro + 'Given-Taken' Dance Practice", 
            url: "https://www.youtube.com/watch?v=CKovP49JJIw&list=PLMQ4WMltba-EP2A937GX8cKe_EGwN_TUT&index=24", 
            thumbnail: "images/thumbnails/enniversary-2021-0.jpg",
            description: "2021 ENniversary"
        },
{ 
            name: "[2021 ENniversary] Go Big or Go Home Dance Practice", 
            url: "https://www.youtube.com/watch?v=OzcZYiUQJSs&list=PLMQ4WMltba-EP2A937GX8cKe_EGwN_TUT&index=23", 
            thumbnail: "images/thumbnails/enniversary-2021-1.jpg",
            description: "2021 ENniversary"
        },
             { 
            name: "[2021 ENniversary] ENHYPEN N House", 
            url: "https://www.youtube.com/watch?v=BBz816hjJQk&list=PLMQ4WMltba-EP2A937GX8cKe_EGwN_TUT&index=22", 
            thumbnail: "images/thumbnails/enniversary-2021.jpg",
            description: "2021 ENniversary"
        },
{ 
            name: "[2021 ENniversary] To Me a Year Later. From 2020", 
            url: "https://www.youtube.com/watch?v=oV27JX8SltM&list=PLMQ4WMltba-EP2A937GX8cKe_EGwN_TUT&index=22", 
            thumbnail: "images/thumbnails/enniversary-2021-2.jpg",
            description: "2021 ENniversary"
        },

            // ADD MORE ENniversary HERE
        ],

        "2022 ENniversary": [
             { 
            name: "[2022 ENniversary] TFW Dance Practice", 
            url: "https://www.youtube.com/watch?v=HLHWJfWqbIw&list=PLMQ4WMltba-EP2A937GX8cKe_EGwN_TUT&index=20", 
            thumbnail: "images/thumbnails/enniversary-2022-0.jpg",
            description: "2022 ENniversary"
        },
{ 
            name: "[2022 ENniversary] Mixed Up Dance Practice", 
            url: "https://www.youtube.com/watch?v=-1RsRVIHza8&list=PLMQ4WMltba-EP2A937GX8cKe_EGwN_TUT&index=19", 
            thumbnail: "images/thumbnails/enniversary-2022-1.jpg",
            description: "2022 ENniversary"
        },
{ 
            name: "[2022 ENniversary] One In A Billion' @ MANIFESTO IN ATLANTA", 
            url: "https://www.youtube.com/watch?v=VVsS6qdlpIc&list=PLMQ4WMltba-EP2A937GX8cKe_EGwN_TUT&index=18", 
            thumbnail: "images/thumbnails/enniversary-2022-2.jpg",
            description: "2022 ENniversary"
        },
{ 
            name: "[2022 ENniversary] Startup Rural Youth Association", 
            url: "https://www.youtube.com/watch?v=kfyI-4NrEk8&list=PLMQ4WMltba-EP2A937GX8cKe_EGwN_TUT&index=17", 
            thumbnail: "images/thumbnails/enniversary-2022-3.jpg",
            description: "2022 ENniversary"
        },
{ 
            name: "[2022 ENniversary] To Me a Year Later. From 2021", 
            url: "https://www.youtube.com/watch?v=be7FNG3o4FI&list=PLMQ4WMltba-EP2A937GX8cKe_EGwN_TUT&index=16", 
            thumbnail: "images/thumbnails/enniversary-2022-4.jpg",
            description: "2022 ENniversary"
        },
            // ADD MORE ENniversary HERE
        ],

   "2023 ENniversary": [
{ 
            name: "[2023 ENniversary] Special Video", 
            url: "https://www.youtube.com/watch?v=r-DC5zDWs3o&list=PLMQ4WMltba-EP2A937GX8cKe_EGwN_TUT&index=15", 
            thumbnail: "images/thumbnails/enniversary-2023-0.jpg",
            description: "2023 ENniversary"
        },
{ 
            name: "[2023 ENniversary] ENHYPEN PHOTOISM Sketch", 
            url: "https://www.youtube.com/watch?v=fOT8hB9Dwrk&list=PLMQ4WMltba-EP2A937GX8cKe_EGwN_TUT&index=14", 
            thumbnail: "images/thumbnails/enniversary-2023-1.jpg",
            description: "2023 ENniversary"
        },
         { 
            name: "[2023 ENniversary] Chaconne Dance Practice", 
            url: "https://www.youtube.com/watch?v=iVfITt1GQhY&list=PLMQ4WMltba-EP2A937GX8cKe_EGwN_TUT&index=13", 
            thumbnail: "images/thumbnails/enniversary-2023-2.jpg",
            description: "2023 ENniversary"
        },
{ 
            name: "[2023 ENniversary] HIGHWAY", 
            url: "https://www.youtube.com/watch?v=4k65OdKOoj0&list=PLMQ4WMltba-EP2A937GX8cKe_EGwN_TUT&index=12", 
            thumbnail: "images/thumbnails/enniversary-2023-3.jpg",
            description: "2023 ENniversary"
        },
{ 
            name: "[2023 ENniversary] To Me a Year Later. From 2022", 
            url: "https://www.youtube.com/watch?v=-k7KAjKQYcg&list=PLMQ4WMltba-EP2A937GX8cKe_EGwN_TUT&index=11", 
            thumbnail: "images/thumbnails/enniversary-2023-4.jpg",
            description: "2023 ENniversary"
        },

            // ADD MORE ENniversary HERE
        ],

"2024 ENniversary": [
{ 
            name: "[2024 ENniversary] Your Eyes Only (ENGENE only Clip)", 
            url: "https://www.youtube.com/watch?v=qFycLjyg_O4&list=PLMQ4WMltba-EP2A937GX8cKe_EGwN_TUT&index=10", 
            thumbnail: "images/thumbnails/enniversary-2024-0.jpg",
            description: "2024 ENniversary"
        },
{ 
            name: "[2024 ENniversary] ENHYPEN PHOTOISM Sketch", 
            url: "https://www.youtube.com/watch?v=4huc8kODVZQ&list=PLMQ4WMltba-EP2A937GX8cKe_EGwN_TUT&index=9", 
            thumbnail: "images/thumbnails/enniversary-2024-1.jpg",
            description: "2024 ENniversary"
        },
{ 
            name: "[2024 ENniversary] Dance Practice (4 ver.)", 
            url: "https://www.youtube.com/watch?v=2W8_jWq_bZ8&list=PLMQ4WMltba-EP2A937GX8cKe_EGwN_TUT&index=8", 
            thumbnail: "images/thumbnails/enniversary-2024-2.jpg",
            description: "2024 ENniversary"
        },
{ 
            name: "[2024 ENniversary] EN-TALK : Good Luck 4 ENGENE", 
            url: "https://www.youtube.com/watch?v=1ejUYIqroD0&list=PLMQ4WMltba-EP2A937GX8cKe_EGwN_TUT&index=7", 
            thumbnail: "images/thumbnails/enniversary-2024-3.jpg",
            description: "2024 ENniversary"
        },
{ 
            name: "[2024 ENniversary] To Me a Year Later. From 2023", 
            url: "https://www.youtube.com/watch?v=thLkWmcB7g8&list=PLMQ4WMltba-EP2A937GX8cKe_EGwN_TUT&index=6", 
            thumbnail: "images/thumbnails/enniversary-2024-4.jpg",
            description: "2024 ENniversary"
        },

            // ADD MORE ENniversary HERE
        ],

"2025 ENniversary": [
{ 
            name: "[2025 ENniversary] PHOTOISM Sketch", 
            url: "https://www.youtube.com/watch?v=MXPakR83c8I&list=PLMQ4WMltba-EP2A937GX8cKe_EGwN_TUT&index=4", 
            thumbnail: "images/thumbnails/enniversary-2025-0.jpg",
            description: "2025 ENniversary"
        },
{ 
            name: "[2025 ENniversary] Team EN- Pit Stop", 
            url: "https://www.youtube.com/watch?v=csiAN3PacU8&list=PLMQ4WMltba-EP2A937GX8cKe_EGwN_TUT&index=3", 
            thumbnail: "images/thumbnails/enniversary-2025-1.jpg",
            description: "2025 ENniversary"
        },
{ 
            name: "[2025 ENniversary] Chamber 5 Dance Practice(2025 ver.)", 
            url: "https://www.youtube.com/watch?v=2GdWAnLdiVQ&list=PLMQ4WMltba-EP2A937GX8cKe_EGwN_TUT&index=2", 
            thumbnail: "images/thumbnails/enniversary-2025-2.jpg",
            description: "2025 ENniversary"
        },
{ 
            name: "[2025 ENniversary] Team EN- Pit Stop Interview", 
            url: "https://www.youtube.com/watch?v=pIT1VtWkZDk&list=PLMQ4WMltba-EP2A937GX8cKe_EGwN_TUT&index=1", 
            thumbnail: "images/thumbnails/enniversary-2025-3.jpg",
            description: "2025 ENniversary"
        },

            // ADD MORE ENniversary HERE
        ],
    },

"SEASONS GREETINGS": {
    "Seasons Greetings 2023": [
        { 
            name: "ENHYPEN Seasons Greetings 2023", 
            url: "https://drive.google.com/file/d/1b6xTKmyOiE7Ctzf2sbq3YAnZad4D7i0U/view?usp=sharing", 
            thumbnail: "images/thumbnails/sgreeting-2023.jpg",
            description: "Seasons Greetings 2023"
        },
{ 
            name: "ENHYPEN Seasons Greetings 2024", 
            url: "https://drive.google.com/file/d/1qsVZlzJ86gyvr-PVXXVkzt9zNy3Q3j9l/view?usp=sharing", 
            thumbnail: "images/thumbnails/sgreeting-2024.jpg",
            description: "Seasons Greetings 2024"
        },
{ 
            name: "ENHYPEN Seasons Greetings 2025", 
            url: "https://drive.google.com/file/d/1YYuuyvv-nAlKO67i6H_XCk-28juLAmAs/view?usp=sharing", 
            thumbnail: "images/thumbnails/sgreeting-2025.jpg",
            description: "Seasons Greetings 2025"
        },
{ 
            name: "ENHYPEN Seasons Greetings 2026", 
            url: "https://drive.google.com/file/d/1mEJ9z8vBHjExZ0t4aN4MvJWNsoRTFfRH/view?usp=sharing", 
            thumbnail: "images/thumbnails/sgreeting-2026.jpg",
            description: "Seasons Greetings 2026"
        },
 // ADD OTHER SEASON GREETINGS HERE
    ]
},

"ENHYPEN FANMADE": {
    "FANMADE": [
        { 
            name: "ENHYPEN FANMADE", 
            url: "https://drive.google.com/file/d/1V5Q-diThFOFp-Gcu3Go-ffwz0G4omgj3/view?usp=sharing", 
            thumbnail: "images/thumbnails/fanmade.jpg",
            description: "Fanmade Documentary"
        },
 // ADD OTHER SEASON GREETINGS HERE
    ]
},

"Weverse Con": {
        "Weverse Con": [
{ 
                name: "ENHYPEN Weverse Con 2023", 
                url: "https://drive.google.com/file/d/1-FEeCr9oDbV6pLA-6XT7pROBQQHFZCAD/view?usp=sharing", 
                thumbnail: "images/thumbnails/wvcon-2023.jpg",
                description: "Weverse Con 2023"
            },
{ 
                name: "ENHYPEN Weverse Park 2024", 
                url: "https://drive.google.com/file/d/1GE3IFbsO8LgV8lOWv1zYNmF9q9GJEqhO/view?usp=sharing", 
                thumbnail: "images/thumbnails/wvpark-2024.jpg",
                description: "Weverse Park 2024"
            },
            { 
                name: "ENHYPEN Weverse Con 2024", 
                url: "https://drive.google.com/file/d/1RCjqs87Xhw-a8aapqeoDqI9TIYOF7-CN/view?usp=sharing", 
                thumbnail: "images/thumbnails/wvcon-2024.jpg",
                description: "Weverse Con 2024"
            },
{ 
                name: "ENHYPEN Weverse Con 2025", 
                url: "https://drive.google.com/file/d/1vm-6FSnYP1UCR4wRBli1PG5X0gUE6wuy/view?usp=sharing", 
                thumbnail: "images/thumbnails/wvcon-2025.jpg",
                description: "Weverse Con 2025"
            },
            // ADD OTHER CONTENT HERE
        ]
    },

"ENHYPEN EN-Co": {
    "ENHYPEN EN-Co EPs": [
        { 
            name: "ENHYPEN 2024 Q1 EN-Co EP.1", 
            url: "https://www.youtube.com/watch?v=WR3t-0owUV4&list=PLMQ4WMltba-G48wmx6GgS4vNfAmH6APTd&index=7", 
            thumbnail: "images/thumbnails/enco-ep1.jpg",
            description: "Enhypen EN-Co 2024"
        },
{ 
            name: "ENHYPEN 2024 Q2 EN-Co EP.2", 
            url: "https://www.youtube.com/watch?v=Kc7DmrBV8Bg&list=PLMQ4WMltba-G48wmx6GgS4vNfAmH6APTd&index=6", 
            thumbnail: "images/thumbnails/enco-ep2.jpg",
            description: "Enhypen EN-Co 2024"
        },
{ 
            name: "ENHYPEN 2024 Q3 EN-Co EP.3", 
            url: "https://www.youtube.com/watch?v=NJatCu1NODk&list=PLMQ4WMltba-G48wmx6GgS4vNfAmH6APTd&index=5", 
            thumbnail: "images/thumbnails/enco-ep3.jpg",
            description: "Enhypen EN-Co 2024"
        },
{ 
            name: "ENHYPEN 2024 Q4 EN-Co EP.4", 
            url: "https://www.youtube.com/watch?v=OMDCSYP5d70&list=PLMQ4WMltba-G48wmx6GgS4vNfAmH6APTd&index=4", 
            thumbnail: "images/thumbnails/enco-ep4.jpg",
            description: "Enhypen EN-Co 2024"
        },
{ 
            name: "ENHYPEN 2025 Q1 EN-Co EP.5", 
            url: "https://www.youtube.com/watch?v=8WsuNPWABRQ&list=PLMQ4WMltba-G48wmx6GgS4vNfAmH6APTd&index=3", 
            thumbnail: "images/thumbnails/enco-ep5.jpg",
            description: "Enhypen EN-Co 2025"
        },
{ 
            name: "ENHYPEN 2025 Q2 EN-Co EP.6", 
            url: "https://www.youtube.com/watch?v=DmHxM81Dk-E&list=PLMQ4WMltba-G48wmx6GgS4vNfAmH6APTd&index=2", 
            thumbnail: "images/thumbnails/enco-ep6.jpg",
            description: "Enhypen EN-Co 2025"
        },
{ 
            name: "ENHYPEN 2025 Q3 EN-Co EP.7", 
            url: "https://www.youtube.com/watch?v=TmUBoz4Has0&list=PLMQ4WMltba-G48wmx6GgS4vNfAmH6APTd&index=1", 
            thumbnail: "images/thumbnails/enco-ep7.jpg",
            description: "Enhypen EN-Co 2025"
        },
    ]
},

"DARK MOON : THE BLOOD ALTAR": {
    "Dark Moon EPs": [
        { 
            name: "Dark Moon EP.1", 
            url: "https://kisskh.co/Drama/DARK-MOON--THE-BLOOD-ALTAR---Dark-Moon---Tsuki-no-Saidan/Episode-1?id=12271&ep=203192&page=0&pageSize=100", 
            thumbnail: "images/thumbnails/anime-dm.jpg",
            description: "Dark Moon Anime 2026"
        },
{ 
            name: "Dark Moon EP.2", 
            url: "https://kisskh.co/Drama/DARK-MOON--THE-BLOOD-ALTAR---Dark-Moon---Tsuki-no-Saidan/Episode-2?id=12271&ep=203591&page=0&pageSize=100", 
            thumbnail: "images/thumbnails/anime-dm.jpg",
            description: "Dark Moon Anime 2026"
        },
{ 
            name: "Dark Moon EP.3", 
            url: "https://kisskh.co/Drama/DARK-MOON--THE-BLOOD-ALTAR---Dark-Moon---Tsuki-no-Saidan/Episode-3?id=12271&ep=204277&page=0&pageSize=100", 
            thumbnail: "images/thumbnails/anime-dm.jpg",
            description: "Dark Moon Anime 2026"
        },
{ 
            name: "Dark Moon EP.4", 
            url: "https://kisskh.co/Drama/DARK-MOON--THE-BLOOD-ALTAR---Dark-Moon---Tsuki-no-Saidan/Episode-4?id=12271&ep=204800&page=0&pageSize=100", 
            thumbnail: "images/thumbnails/anime-dm.jpg",
            description: "Dark Moon Anime 2026"
        },
        // ADD OTHER CONTENT HERE
    ]
},

"Binge Watch": {
    "Creator Picks": [
        { 
            name: "ENHYPEN on Killing Voice", 
            url: "https://www.youtube.com/watch?v=6jlQkIgS40g", 
            thumbnail: "images/thumbnails/killing-enha.jpg",
            description: "Enhypen Killing Voice 2025"
        },
{ 
            name: "ENHYPEN : The Pizza Interview", 
            url: "https://www.youtube.com/watch?v=XD4xMV_DEiY", 
            thumbnail: "images/thumbnails/pizza-enha.jpg",
            description: "Enhypen The Pizza Interview"
        },
{ 
            name: "ENHYPEN Catch Each Other's Lies", 
            url: "https://www.youtube.com/watch?v=EfCx1T4qj54", 
            thumbnail: "images/thumbnails/lies-enha.jpg",
            description: "Enhypen Teen Vogue 2025"
        },
{ 
            name: "ENHYPEN Competes in a Compliment Battle", 
            url: "https://www.youtube.com/watch?v=HvJn737PQYE", 
            thumbnail: "images/thumbnails/compliments-enha.jpg",
            description: "Enhypen Teen Vogue 2023"
        },
{ 
            name: "ENHYPEN What's In My Bag", 
            url: "https://www.youtube.com/watch?v=9BY6Qc1Yf0o", 
            thumbnail: "images/thumbnails/bag-enha.jpg",
            description: "Enhypen Vogue Kr 2024"
        },
{ 
            name: "ENHYPEN Tries Not To Sing, Laugh, Eat, Touch Gauntlet Challenge", 
            url: "https://www.youtube.com/watch?v=ph1XtHvMinU", 
            thumbnail: "images/thumbnails/react-enha.jpg",
            description: "Enhypen REACT 2023"
        },
{ 
            name: "ENHYPEN Plays Dare or Dare", 
            url: "https://www.youtube.com/watch?v=KBl3b8p3PUM", 
            thumbnail: "images/thumbnails/dare-enha.jpg",
            description: "Enhypen BuzzFeed 2024"
        },
{ 
            name: "ENHYPEN Answer The Web's Most Searched Questions", 
            url: "https://www.youtube.com/watch?v=dmY3Mqgibzc", 
            thumbnail: "images/thumbnails/web-enha.jpg",
            description: "Enhypen WIRED 2025"
        },
{ 
            name: "ENHYPEN Swap Favorite Snacks", 
            url: "https://www.youtube.com/watch?v=6Om0dhPAVgs", 
            thumbnail: "images/thumbnails/snacks-enha.jpg",
            description: "Enhypen Snacked 2023"
        },
{ 
            name: "ENHYPEN Reveal What's On Their Phones", 
            url: "https://www.youtube.com/watch?v=IJqdLwx1YHI", 
            thumbnail: "images/thumbnails/phone-enha.jpg",
            description: "Enhypen Glamour 2025"
        },
{ 
            name: "ENHYPEN Hyell's Club Ep.40", 
            url: "https://www.youtube.com/watch?v=FzG_Jk03vvU", 
            thumbnail: "images/thumbnails/hyell-enha.jpg",
            description: "Enhypen Heeseung, Jay, Sunoo Hyell's Club"
        },
{ 
            name: "[Leemujin Service] EP.198 ENHYPEN JAKE", 
            url: "https://www.youtube.com/watch?v=310BeJgswro", 
            thumbnail: "images/thumbnails/leemujin-jake.jpg",
            description: "Enhypen Jake Leemujin Service"
        },
{ 
            name: "[Leemujin Service] EP.16 ENHYPEN HEESEUNG", 
            url: "https://www.youtube.com/watch?v=NPWxSUk5000", 
            thumbnail: "images/thumbnails/leemujin-hee.jpg",
            description: "Enhypen Heeseung Leemujin Service"
        },
    ]
}
};




// ===== HOW TO CUSTOMIZE - NOW SUPER EASY! =====
/*
TO ADD A NEW ITEM:
1. Find the category and subcategory
2. Copy and paste this block:

{ 
    name: "Item Name", 
    url: "https://link-to-content.com", 
    thumbnail: "images/thumbnails/filename.jpg",
    description: "Optional description"
}

TO ADD A NEW SUBCATEGORY:
1. Find the category
2. Add a new subcategory like this:

"New Subcategory Name": [
    { 
        name: "Item Name", 
        url: "https://link.com", 
        thumbnail: "images/thumbnails/thumb.jpg",
        description: "Description"
    }
]

TO ADD A NEW CATEGORY:
1. Copy and paste this at the end:

"New Category Name": {
    "Subcategory Name": [
        { 
            name: "Item Name", 
            url: "https://link.com", 
            thumbnail: "images/thumbnails/thumb.jpg",
            description: "Description"
        }
    ]
}
*/