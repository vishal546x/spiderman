// --- LINK CONFIG ---
const registerLink = "https://forms.google.com/your-form-link";

// --- FULL STORY SCRIPT ---
const story = [
    // --- INTRO ---
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "Mr. Stark! The Symposium site is live! Are the servers ready? Or do we need to ask that 'Rich Guy from Gotham'?",
        bgTheme: "bg-image-intro",
        bgText: "WELCOME TO\nTECH SYMPOSIUM", 
        spidey: "images/spidey1.png",
        iron: "images/iron1.png",
        side: "left"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "Please. I spend more on coffee than Wayne Enterprises is worth. The servers are fine, kid.",
        bgTheme: "bg-comic",
        bgText: "WELCOME TO\nTECH SYMPOSIUM",
        spidey: "images/spidey1.png",
        iron: "images/iron1.png",
        side: "right"
    },
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "Okay, good. Because last time the Wi-Fi crashed, I had to use a carrier pigeon. It was embarrassing.",
        bgTheme: "bg-tech",
        bgText: "SYSTEM STATUS:\nONLINE",
        spidey: "images/spidey2.png",
        iron: "images/iron1.png",
        side: "left"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "Relax, Underoos. Even Ultron couldn't hack this. Now, show me the event list.",
        bgTheme: "bg-tech",
        bgText: "SYSTEM STATUS:\nONLINE",
        spidey: "images/spidey2.png",
        iron: "images/iron2.png",
        side: "right"
    },

    // --- EVENT 1: PAPER PRESENTATION ---
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "First up: PAPER PRESENTATION. It’s where the big brains show off their research.",
        bgTheme: "bg-matrix",
        bgText: "EVENT 1:\nPAPER PRESENTATION",
        spidey: "images/spidey3.png",
        iron: "images/iron2.png",
        side: "left"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "Research? Sounds tedious. Reminds me of Strange. Does it come with a magical headache?",
        bgTheme: "bg-matrix",
        bgText: "EVENT 1:\nPAPER PRESENTATION",
        spidey: "images/spidey3.png",
        iron: "images/iron3.png",
        side: "right"
    },

    // --- EVENT 2: HACKATHON ---
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "No magic! Next is the HACKATHON! A non-stop coding marathon for the real builders.",
        bgTheme: "bg-matrix",
        bgText: "EVENT 2:\nHACKATHON",
        spidey: "images/spidey4.png",
        iron: "images/iron3.png",
        side: "left"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "Builders? Unless they built this in a cave with a box of scraps, I'm not impressed.",
        bgTheme: "bg-matrix",
        bgText: "EVENT 2:\nHACKATHON",
        spidey: "images/spidey4.png",
        iron: "images/iron4.png",
        side: "right"
    },

    // --- EVENT 3: TECHNOPOLY (FUN MODE) ---
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "You're tough to please! How about TECHNOPOLY – FUN MODE? It's like Monopoly, but tech-themed!",
        bgTheme: "bg-matrix", // Using Matrix theme for consistency with events
        bgText: "EVENT 3:\nTECHNOPOLY",
        spidey: "images/spidey5.png",
        iron: "images/iron4.png",
        side: "left"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "Technopoly? I already own everything on the board. Do I win by default?",
        bgTheme: "bg-matrix",
        bgText: "EVENT 3:\nTECHNOPOLY",
        spidey: "images/spidey2.png",
        iron: "images/iron3.png",
        side: "right"
    },

    // --- EVENT 4: TECHTRIO CHALLENGE ---
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "No cheating! Finally, the TECHTRIO CHALLENGE – A 3-in-1 Fun-Tech Event! It's the ultimate test.",
        bgTheme: "bg-matrix",
        bgText: "EVENT 4:\nTECHTRIO",
        spidey: "images/spidey3.png",
        iron: "images/iron1.png",
        side: "left"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "Three in one? Efficient. I like efficiency. Maybe this Symposium has potential after all.",
        bgTheme: "bg-matrix",
        bgText: "EVENT 4:\nTECHTRIO",
        spidey: "images/spidey1.png",
        iron: "images/iron3.png",
        side: "right"
    },

    // --- TRANSPORTATION / BUS ROUTES (3 Slides) ---
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "Wait... Mr. Stark, look at the TRANSPORT details! This Bus Route list is huge!",
        bgTheme: "bg-map",
        bgText: "TRANSPORT:\nAVAILABLE",
        spidey: "images/spidey3.png", // Shocked
        iron: "images/iron1.png",
        side: "left"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "We cover every major route. City center to the outskirts. No student gets left behind.",
        bgTheme: "bg-map",
        bgText: "TRANSPORT:\nAVAILABLE",
        spidey: "images/spidey2.png",
        iron: "images/iron3.png", // Pointing/Explaining
        side: "right"
    },
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "Awesome! That saves me some webs. Swinging through morning traffic is a nightmare.",
        bgTheme: "bg-map",
        bgText: "TRANSPORT:\nAVAILABLE",
        spidey: "images/spidey1.png", // Relieved/Happy
        iron: "images/iron2.png",
        side: "left"
    },

    // --- THE EXIT ---
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "Anyway, Pepper is calling. Dinner reservations. You handle the rest, kid.",
        bgTheme: "bg-tech",
        bgText: "CONNECTING...",
        spidey: "images/spidey1.png",
        iron: "images/iron2.png",
        side: "right"
    },
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "Mr. Stark? Seriously? You can't just fly off! It's pitch black in here!",
        bgTheme: "bg-black",
        bgText: "",
        spidey: "images/spidey6.png",
        iron: null, 
        side: "left"
    },

    // --- THE VILLAIN ---
    {
        speaker: "???",
        color: "#555",
        text: "...",
        bgTheme: "bg-black",
        bgText: "?",
        spidey: "images/spidey3.png",
        iron: null,
        side: "center"
    },
    {
        speaker: "DR. DOOM",
        color: "#006400",
        text: "NAH. STARK IS GONE. THE SYMPOSIUM IS MINE.",
        bgTheme: "bg-doom",
        bgText: "DOOM\nIS HERE",
        spidey: "images/spidey3.png",
        iron: null,
        side: "villain"
    },
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "GUYS! HELP! Assemble your team and REGISTER before he installs Linux on everything!",
        bgTheme: "bg-doom",
        bgText: "DOOM\nIS HERE",
        spidey: "images/spidey6.png",
        iron: null,
        side: "left"
    }
];

let currentIndex = 0;

function updateDisplay() {
    const slide = story[currentIndex];

    // 1. Update Scene Theme
    document.getElementById('comic-scene').className = slide.bgTheme;
    
    // 2. Update Background Text
    const bgHeadline = document.getElementById('bg-headline');
    bgHeadline.innerText = slide.bgText || "";

    // 3. Update Text Bubble
    const nameTag = document.getElementById('name-tag');
    nameTag.innerText = slide.speaker;
    nameTag.style.background = slide.color;
    document.getElementById('dialogue-text').innerText = slide.text;

    // 4. Update Bubble Style
    const bubble = document.getElementById('speech-bubble');
    bubble.className = "bubble";
    if (slide.side === "villain") bubble.classList.add("villain");
    else if (slide.side === "left") bubble.classList.add("speaking-left");
    else if (slide.side === "right") bubble.classList.add("speaking-right");
    else bubble.style.display = 'block';

    // 5. Update Images & FOCUS LOGIC
    const sImg = document.getElementById('spidey-img');
    const iImg = document.getElementById('iron-img');

    // Handle Spidey Image
    if (slide.spidey) { 
        sImg.src = slide.spidey; 
        sImg.style.display = 'block'; 
    } else { 
        sImg.style.display = 'none'; 
    }

    // Handle Iron Man Image
    if (slide.iron) { 
        iImg.src = slide.iron; 
        iImg.style.display = 'block'; 
    } else { 
        iImg.style.display = 'none'; 
    }

    // --- NEW: FOCUS LOGIC (Dim the listener) ---
    // Remove 'inactive' class from both first
    sImg.classList.remove('inactive');
    iImg.classList.remove('inactive');

    if (slide.speaker === "SPIDEY") {
        // If Spidey speaks, dim Iron Man
        iImg.classList.add('inactive');
    } else if (slide.speaker === "IRON MAN") {
        // If Iron Man speaks, dim Spidey
        sImg.classList.add('inactive');
    } else if (slide.side === "villain") {
        // If Villain, dim both heroes (scary effect)
        sImg.classList.add('inactive');
        iImg.classList.add('inactive');
    }

    // 6. Update Buttons
    document.getElementById('prev-btn').disabled = (currentIndex === 0);
    if (currentIndex === story.length - 1) {
        document.getElementById('next-btn').style.display = 'none';
        document.getElementById('register-btn').style.display = 'block';
    } else {
        document.getElementById('next-btn').style.display = 'block';
        document.getElementById('register-btn').style.display = 'none';
    }
}

function changeSlide(dir) {
    currentIndex += dir;
    updateDisplay();
}

function openRegisterLink() {
    window.location.href = registerLink;
}

// Initialize the display on load
updateDisplay();