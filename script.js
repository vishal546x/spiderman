// --- LINK CONFIG ---
const registerLink = "https://forms.google.com/your-form-link";

// --- FULL STORY SCRIPT ---
const story = [
    // --- INTRO ---
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "Mr. Stark! The Symposium site is live! Are the servers ready?",
        
        // FLEXIBLE SETTINGS:
        bgClass: "bg-intro",   // Use the .bg-intro CSS class
        showOverlay: false,    // Don't show any box
       // bgText: "WELCOME TO\nTECH SYMPOSIUM", 
        
        spidey: "images/spidey1.png",
        iron: "images/iron1.png",
        side: "left"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "Please. I spend more on coffee than Wayne Enterprises is worth.",
        
        bgClass: "bg-intro",   // Same background
        showOverlay: false,
        //bgText: "WELCOME TO\nTECH SYMPOSIUM",
        
        spidey: "images/spidey1.png",
        iron: "images/iron1.png",
        side: "right"
    },
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "Okay, good. Because last time the Wi-Fi crashed, I had to use a carrier pigeon.",
        
        bgClass: "bg-intro", 
        showOverlay: false,
       // bgText: "SYSTEM STATUS:\nONLINE",
        
        spidey: "images/spidey2.png",
        iron: "images/iron1.png",
        side: "left"
    },
    
    // ... For the rest of the slides, just follow the pattern above ...
    // Keep 'bgClass: "bg-intro"' if you want the same image, 
    // or change it to "bg-lab" etc. if you make new CSS classes later.
    
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "Relax, Underoos. Even Ultron couldn't hack this. Now, show me the event list.",
        bgClass: "bg-intro", showOverlay: false, //bgText: "SYSTEM STATUS:\nONLINE",
        spidey: "images/spidey2.png", iron: "images/iron2.png", side: "right"
    },
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "First up: PAPER PRESENTATION. It’s where the big brains show off their research.",
        bgClass: "bg-intro", showOverlay: false, //bgText: "EVENT 1:\nPAPER PRESENTATION",
        spidey: "images/spidey3.png", iron: "images/iron2.png", side: "left"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "Research? Sounds tedious. Reminds me of Strange. Does it come with a magical headache?",
        bgClass: "bg-intro", showOverlay: false, //bgText: "EVENT 1:\nPAPER PRESENTATION",
        spidey: "images/spidey3.png", iron: "images/iron3.png", side: "right"
    },
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "No magic! Next is the HACKATHON! A non-stop coding marathon.",
        bgClass: "bg-intro", showOverlay: false, //bgText: "EVENT 2:\nHACKATHON",
        spidey: "images/spidey4.png", iron: "images/iron3.png", side: "left"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "Builders? Unless they built this in a cave with a box of scraps, I'm not impressed.",
        bgClass: "bg-intro", showOverlay: false, //bgText: "EVENT 2:\nHACKATHON",
        spidey: "images/spidey4.png", iron: "images/iron4.png", side: "right"
    },
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "You're tough to please! How about TECHNOPOLY – FUN MODE?",
        bgClass: "bg-intro", showOverlay: false,// bgText: "EVENT 3:\nTECHNOPOLY",
        spidey: "images/spidey5.png", iron: "images/iron4.png", side: "left"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "Technopoly? I already own everything on the board. Do I win by default?",
        bgClass: "bg-intro", showOverlay: false, //bgText: "EVENT 3:\nTECHNOPOLY",
        spidey: "images/spidey2.png", iron: "images/iron3.png", side: "right"
    },
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "No cheating! Finally, the TECHTRIO CHALLENGE – A 3-in-1 Fun-Tech Event!",
        bgClass: "bg-intro", showOverlay: false, //bgText: "EVENT 4:\nTECHTRIO",
        spidey: "images/spidey3.png", iron: "images/iron1.png", side: "left"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "Three in one? Efficient. I like efficiency. Maybe this Symposium has potential after all.",
        bgClass: "bg-intro", showOverlay: false,// bgText: "EVENT 4:\nTECHTRIO",
        spidey: "images/spidey1.png", iron: "images/iron3.png", side: "right"
    },
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "Wait... Mr. Stark, look at the TRANSPORT details! This Bus Route list is huge!",
        bgClass: "bg-intro", showOverlay: false,// bgText: "TRANSPORT:\nAVAILABLE",
        spidey: "images/spidey3.png", iron: "images/iron1.png", side: "left"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "We cover every major route. City center to the outskirts. No student gets left behind.",
        bgClass: "bg-intro", showOverlay: false, //bgText: "TRANSPORT:\nAVAILABLE",
        spidey: "images/spidey2.png", iron: "images/iron3.png", side: "right"
    },
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "Awesome! That saves me some webs. Swinging through morning traffic is a nightmare.",
        bgClass: "bg-intro", showOverlay: false, //bgText: "TRANSPORT:\nAVAILABLE",
        spidey: "images/spidey1.png", iron: "images/iron2.png", side: "left"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "Anyway, Pepper is calling. Dinner reservations. You handle the rest, kid.",
        bgClass: "bg-intro", showOverlay: false, //bgText: "CONNECTING...",
        spidey: "images/spidey1.png", iron: "images/iron2.png", side: "right"
    },
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "Mr. Stark? Seriously? You can't just fly off! It's pitch black in here!",
        bgClass: "bg-intro", showOverlay: false, //bgText: "",
        spidey: "images/spidey6.png", iron: null, side: "left"
    },
    {
        speaker: "???",
        color: "#555",
        text: "...",
        bgClass: "bg-intro", showOverlay: false, bgText: "?",
        spidey: "images/spidey3.png", iron: null, side: "center"
    },
    {
        speaker: "DR. DOOM",
        color: "#006400",
        text: "NAH. STARK IS GONE. THE SYMPOSIUM IS MINE.",
        bgClass: "bg-intro", showOverlay: false, //bgText: "DOOM\nIS HERE",
        spidey: "images/spidey3.png", iron: null, side: "villain"
    },
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "GUYS! HELP! Assemble your team and REGISTER before he installs Linux on everything!",
        bgClass: "bg-intro", showOverlay: false, //bgText: "DOOM\nIS HERE",
        spidey: "images/spidey6.png", iron: null, side: "left"
    }
];

let currentIndex = 0;

function updateDisplay() {
    const slide = story[currentIndex];

    // --- 1. HANDLE BACKGROUND IMAGE ---
    // Applies 'bg-base' (defaults) PLUS the specific image class for this slide
    document.getElementById('comic-scene').className = "bg-base " + slide.bgClass;

    // --- 2. HANDLE OVERLAY BOX (Future use) ---
    const overlayArea = document.getElementById('overlay-area');
    if (slide.showOverlay === true) {
        overlayArea.style.display = 'block';
    } else {
        overlayArea.style.display = 'none';
    }

    // --- 3. HANDLE BACKGROUND TEXT ---
    document.getElementById('bg-headline').innerText = slide.bgText || "";

    // --- STANDARD UI UPDATES ---
    const nameTag = document.getElementById('name-tag');
    nameTag.innerText = slide.speaker;
    nameTag.style.background = slide.color;
    document.getElementById('dialogue-text').innerText = slide.text;

    const bubble = document.getElementById('speech-bubble');
    bubble.className = "bubble";
    if (slide.side === "villain") bubble.classList.add("villain");
    else if (slide.side === "left") bubble.classList.add("speaking-left");
    else if (slide.side === "right") bubble.classList.add("speaking-right");
    else bubble.style.display = 'block';

    const sImg = document.getElementById('spidey-img');
    const iImg = document.getElementById('iron-img');

    if (slide.spidey) { sImg.src = slide.spidey; sImg.style.display = 'block'; } else { sImg.style.display = 'none'; }
    if (slide.iron) { iImg.src = slide.iron; iImg.style.display = 'block'; } else { iImg.style.display = 'none'; }

    sImg.classList.remove('inactive');
    iImg.classList.remove('inactive');

    if (slide.speaker === "SPIDEY") { iImg.classList.add('inactive'); } 
    else if (slide.speaker === "IRON MAN") { sImg.classList.add('inactive'); } 
    else if (slide.side === "villain") { sImg.classList.add('inactive'); iImg.classList.add('inactive'); }

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