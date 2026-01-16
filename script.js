// --- LINK CONFIG ---
const registerLink = "https://forms.google.com/your-form-link";

// --- FULL STORY SCRIPT ---
const story = [
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
        iron: "images/iron2.png",
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
        iron: "images/iron3.png",
        side: "right"
    },
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "First up: PAPER PRESENTATION. It’s where the big brains show off their research.",
        bgTheme: "bg-matrix",
        bgText: "TOPIC:\nINNOVATION",
        spidey: "images/spidey3.png",
        iron: "images/iron1.png",
        side: "left"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "Research? Sounds tedious. Reminds me of Strange. Does it come with a magical headache?",
        bgTheme: "bg-matrix",
        bgText: "TOPIC:\nINNOVATION",
        spidey: "images/spidey2.png",
        iron: "images/iron2.png",
        side: "right"
    },
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "No magic! Next is the CODING CONTEST. You gotta have fast fingers for this one.",
        bgTheme: "bg-matrix",
        bgText: "CODING\nWARS",
        spidey: "images/spidey1.png",
        iron: "images/iron1.png",
        side: "left"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "Fast? I doubt they can code faster than JARVIS. But I'll allow it.",
        bgTheme: "bg-matrix",
        bgText: "CODING\nWARS",
        spidey: "images/spidey1.png",
        iron: "images/iron3.png",
        side: "right"
    },
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "Wait... Mr. Stark, I'm looking at the Bus Routes. This list is longer than the SNYDER CUT!",
        bgTheme: "bg-map",
        bgText: "BUS ROUTES\n(LONG LIST)",
        spidey: "images/spidey3.png",
        iron: "images/iron2.png",
        side: "left"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "It's thorough! We leave no student behind. Unlike some heroes who forget their sidekicks.",
        bgTheme: "bg-map",
        bgText: "BUS ROUTES\n(LONG LIST)",
        spidey: "images/spidey2.png",
        iron: "images/iron3.png",
        side: "right"
    },
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
        spidey: "images/spidey3.png",
        iron: null, 
        side: "left"
    },
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
        spidey: "images/spidey3.png",
        iron: null,
        side: "left"
    }
];

let currentIndex = 0;

function updateDisplay() {
    const slide = story[currentIndex];

    // Update Scene Theme
    document.getElementById('comic-scene').className = slide.bgTheme;
    
    // Update Background Text
    const bgHeadline = document.getElementById('bg-headline');
    bgHeadline.innerText = slide.bgText || "";

    // Update Text Bubble
    const nameTag = document.getElementById('name-tag');
    nameTag.innerText = slide.speaker;
    nameTag.style.background = slide.color;
    document.getElementById('dialogue-text').innerText = slide.text;

    // Update Bubble Style (Left/Right/Villain)
    const bubble = document.getElementById('speech-bubble');
    bubble.className = "bubble";
    if (slide.side === "villain") bubble.classList.add("villain");
    else if (slide.side === "left") bubble.classList.add("speaking-left");
    else if (slide.side === "right") bubble.classList.add("speaking-right");
    else bubble.style.display = 'block';

    // Update Images
    const sImg = document.getElementById('spidey-img');
    const iImg = document.getElementById('iron-img');

    if (slide.spidey) { sImg.src = slide.spidey; sImg.style.display = 'block'; } 
    else { sImg.style.display = 'none'; }

    if (slide.iron) { iImg.src = slide.iron; iImg.style.display = 'block'; } 
    else { iImg.style.display = 'none'; }

    // Update Buttons
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