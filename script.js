// --- LINK CONFIG ---
const registerLink = "https://forms.google.com/your-form-link";

// --- STATE VARIABLES ---
let currentIndex = 0;
let introPlayed = false; // Tracks if the game start animation has happened
let typingTimeout; // To stop typing if user clicks next quickly

// --- FULL STORY SCRIPT ---
const story = [
    // --- INTRO ---
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "Mr. Stark! The Symposium site is live! Are the servers ready?",
        bgClass: "bg-intro", 
        showOverlay: false,    
        bgText: "WELCOME TO\nTECH SYMPOSIUM", 
        spidey: "images/spidey1.png",
        iron: "images/iron1.png",
        side: "left"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "Please. I spend more on coffee than Wayne Enterprises is worth.",
        bgClass: "bg-intro",   
        showOverlay: false,
        bgText: "WELCOME TO\nTECH SYMPOSIUM",
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
        bgText: "SYSTEM STATUS:\nONLINE",
        spidey: "images/spidey2.png",
        iron: "images/iron1.png",
        side: "left"
    },
    // ... (Keep the rest of your story slides here) ...
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "Relax, Underoos. Even Ultron couldn't hack this. Now, show me the event list.",
        bgClass: "bg-intro", showOverlay: false, bgText: "SYSTEM STATUS:\nONLINE",
        spidey: "images/spidey2.png", iron: "images/iron2.png", side: "right"
    },
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "First up: PAPER PRESENTATION. It’s where the big brains show off their research.",
        bgClass: "bg-intro", showOverlay: false, bgText: "EVENT 1:\nPAPER PRESENTATION",
        spidey: "images/spidey3.png", iron: "images/iron2.png", side: "left"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "Research? Sounds tedious. Reminds me of Strange. Does it come with a magical headache?",
        bgClass: "bg-intro", showOverlay: false, bgText: "EVENT 1:\nPAPER PRESENTATION",
        spidey: "images/spidey3.png", iron: "images/iron3.png", side: "right"
    },
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "No magic! Next is the HACKATHON! A non-stop coding marathon.",
        bgClass: "bg-intro", showOverlay: false, bgText: "EVENT 2:\nHACKATHON",
        spidey: "images/spidey4.png", iron: "images/iron3.png", side: "left"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "Builders? Unless they built this in a cave with a box of scraps, I'm not impressed.",
        bgClass: "bg-intro", showOverlay: false, bgText: "EVENT 2:\nHACKATHON",
        spidey: "images/spidey4.png", iron: "images/iron4.png", side: "right"
    },
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "You're tough to please! How about TECHNOPOLY – FUN MODE?",
        bgClass: "bg-intro", showOverlay: false, bgText: "EVENT 3:\nTECHNOPOLY",
        spidey: "images/spidey5.png", iron: "images/iron4.png", side: "left"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "Technopoly? I already own everything on the board. Do I win by default?",
        bgClass: "bg-intro", showOverlay: false, bgText: "EVENT 3:\nTECHNOPOLY",
        spidey: "images/spidey2.png", iron: "images/iron3.png", side: "right"
    },
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "No cheating! Finally, the TECHTRIO CHALLENGE – A 3-in-1 Fun-Tech Event!",
        bgClass: "bg-intro", showOverlay: false, bgText: "EVENT 4:\nTECHTRIO",
        spidey: "images/spidey3.png", iron: "images/iron1.png", side: "left"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "Three in one? Efficient. I like efficiency. Maybe this Symposium has potential after all.",
        bgClass: "bg-intro", showOverlay: false, bgText: "EVENT 4:\nTECHTRIO",
        spidey: "images/spidey1.png", iron: "images/iron3.png", side: "right"
    },
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "Wait... Mr. Stark, look at the TRANSPORT details! This Bus Route list is huge!",
        bgClass: "bg-intro", showOverlay: false, bgText: "TRANSPORT:\nAVAILABLE",
        spidey: "images/spidey3.png", iron: "images/iron1.png", side: "left"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "We cover every major route. City center to the outskirts. No student gets left behind.",
        bgClass: "bg-intro", showOverlay: false, bgText: "TRANSPORT:\nAVAILABLE",
        spidey: "images/spidey2.png", iron: "images/iron3.png", side: "right"
    },
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "Awesome! That saves me some webs. Swinging through morning traffic is a nightmare.",
        bgClass: "bg-intro", showOverlay: false, bgText: "TRANSPORT:\nAVAILABLE",
        spidey: "images/spidey1.png", iron: "images/iron2.png", side: "left"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "Anyway, Pepper is calling. Dinner reservations. You handle the rest, kid.",
        bgClass: "bg-intro", showOverlay: false, bgText: "CONNECTING...",
        spidey: "images/spidey1.png", iron: "images/iron2.png", side: "right"
    },
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "Mr. Stark? Seriously? You can't just fly off! It's pitch black in here!",
        bgClass: "bg-intro", showOverlay: false, bgText: "",
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
        bgClass: "bg-intro", showOverlay: false, bgText: "DOOM\nIS HERE",
        spidey: "images/spidey3.png", iron: null, side: "villain"
    },
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "GUYS! HELP! Assemble your team and REGISTER before he installs Linux on everything!",
        bgClass: "bg-intro", showOverlay: false, bgText: "DOOM\nIS HERE",
        spidey: "images/spidey6.png", iron: null, side: "left"
    }
];

// --- START GAME FUNCTION (Triggered by Button) ---
function startGame() {
    const introScreen = document.getElementById('game-intro');
    
    // 1. Hide Title Screen
    introScreen.classList.add('hidden-intro');
    setTimeout(() => {
        introScreen.style.display = 'none';
    }, 800);
    
    // 2. Start Slide 0 with Special Animation Mode
    currentIndex = 0;
    updateDisplay(true); // true = "Do the animation sequence"
    
    // 3. Mark intro as played so it doesn't repeat on Prev button
    introPlayed = true;
}

// --- MAIN DISPLAY FUNCTION ---
function updateDisplay(animateIntro = false) {
    const slide = story[currentIndex];
    
    // Clear any existing typing timeout to prevent overlaps
    clearTimeout(typingTimeout);

    // --- 1. SETUP IMAGES & TEXT (BUT HIDE THEM IF ANIMATING) ---
    const sImg = document.getElementById('spidey-img');
    const iImg = document.getElementById('iron-img');
    const bubble = document.getElementById('speech-bubble');
    const textSpan = document.getElementById('dialogue-text');
    const nameTag = document.getElementById('name-tag');
    const bgHeadline = document.getElementById('bg-headline');
    const overlayArea = document.getElementById('overlay-area');

    // Basic Data Setup
    document.getElementById('comic-scene').className = "bg-base " + slide.bgClass;
    bgHeadline.innerText = slide.bgText || "";
    nameTag.innerText = slide.speaker;
    nameTag.style.background = slide.color;
    
    // Overlay Setup
    overlayArea.style.display = slide.showOverlay ? 'block' : 'none';

    // Bubble Style Setup
    bubble.className = "bubble";
    if (slide.side === "villain") bubble.classList.add("villain");
    else if (slide.side === "left") bubble.classList.add("speaking-left");
    else if (slide.side === "right") bubble.classList.add("speaking-right");
    else bubble.style.display = 'block';

    // Image Source Setup
    if (slide.spidey) sImg.src = slide.spidey;
    if (slide.iron) iImg.src = slide.iron;
    
    // --- 2. LOGIC FOR INTRO ANIMATION vs NORMAL NAVIGATION ---
    
    if (animateIntro) {
        // --- ANIMATION MODE (Happens once on Start) ---
        
        // Step A: Hide everything initially
        sImg.style.opacity = '0';
        iImg.style.opacity = '0';
        bubble.style.opacity = '0';
        sImg.style.display = 'block';
        iImg.style.display = 'block';
        textSpan.innerHTML = ""; // Empty text for typing
        
        // Remove old animation classes to restart them
        sImg.classList.remove('slide-up-fade');
        iImg.classList.remove('slide-up-fade');
        bubble.classList.remove('pop-in');

        // Step B: Animation Sequence
        
        // 1. Spidey Enters (Delay 500ms)
        setTimeout(() => {
            sImg.style.opacity = '1';
            sImg.classList.add('slide-up-fade');
        }, 500);

        // 2. Chat Box Pops In (Delay 1500ms)
        setTimeout(() => {
            bubble.style.opacity = '1';
            bubble.classList.add('pop-in');
            
            // 3. Start Typing Text
            typeWriter(slide.text, 'dialogue-text', 50, () => {
                // 4. Iron Man Enters (After text finishes)
                iImg.style.opacity = '1';
                iImg.classList.add('slide-up-fade');
            });
        }, 1500);

} else {
        // --- NORMAL MODE (Prev/Next Buttons) ---
        
        // 1. Reset Intro Animations (so they don't conflict)
        sImg.classList.remove('slide-up-fade');
        iImg.classList.remove('slide-up-fade');
        bubble.classList.remove('pop-in');
        
        // 2. TRIGGER THE BOUNCE (Natural Conversation Feel)
        bubble.classList.remove('bounce-chat'); // Remove class
        void bubble.offsetWidth; // Trigger Reflow (Magic line that resets animation)
        bubble.classList.add('bounce-chat'); // Add class back to play it
        
        // 3. Make everything visible
        sImg.style.opacity = '1';
        iImg.style.opacity = '1';
        bubble.style.opacity = '1';
        
        // 4. Show/Hide based on data
        sImg.style.display = slide.spidey ? 'block' : 'none';
        iImg.style.display = slide.iron ? 'block' : 'none';
        
        // 5. Focus Logic
        sImg.classList.remove('inactive');
        iImg.classList.remove('inactive');
        if (slide.speaker === "SPIDEY") iImg.classList.add('inactive'); 
        else if (slide.speaker === "IRON MAN") sImg.classList.add('inactive'); 
        else if (slide.side === "villain") { sImg.classList.add('inactive'); iImg.classList.add('inactive'); }

        // 6. Show Text
        textSpan.innerHTML = slide.text;
    }

    // --- 3. UPDATE BUTTONS ---
    document.getElementById('prev-btn').disabled = (currentIndex === 0);
    if (currentIndex === story.length - 1) {
        document.getElementById('next-btn').style.display = 'none';
        document.getElementById('register-btn').style.display = 'block';
    } else {
        document.getElementById('next-btn').style.display = 'block';
        document.getElementById('register-btn').style.display = 'none';
    }
}

// --- TYPEWRITER HELPER FUNCTION ---
function typeWriter(text, elementId, speed, callback) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = ""; // Clear text
    element.classList.add("cursor"); // Add blinking cursor

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            typingTimeout = setTimeout(type, speed);
        } else {
            element.classList.remove("cursor"); // Remove cursor when done
            if (callback) callback(); // Trigger next animation (Iron Man)
        }
    }
    type();
}

function changeSlide(dir) {
    currentIndex += dir;
    // Call updateDisplay WITHOUT animation (false)
    updateDisplay(false); 
}

function openRegisterLink() {
    window.location.href = registerLink;
}

// --- COUNTDOWN TIMER ---
// --- UPDATED COUNTDOWN TIMER ---
// --- UPDATED COUNTDOWN TIMER ---
function startCountdown() {
    // Set the date we're counting down to
    const targetDate = new Date("February 9, 2026 09:00:00").getTime();

    // Define the update function
    function updateTimer() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        // 1. Target the Intro Screen Timer
        const introTimer = document.getElementById("intro-timer");
        
        if (introTimer) {
             const days = Math.floor(distance / (1000 * 60 * 60 * 24));
             const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
             const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
             const seconds = Math.floor((distance % (1000 * 60)) / 1000);
             
             if (distance < 0) {
                 introTimer.innerText = "EVENT STARTED!";
                 introTimer.style.color = "#00ff00"; // Green when started
             } else {
                 // Format: 24d : 10h : 45m : 12s
                 introTimer.innerText = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
             }
        }

        // 2. Target the Comic Page Timer (if it exists)
        const comicTimer = document.getElementById("countdown-timer");
        if (comicTimer) {
             const days = Math.floor(distance / (1000 * 60 * 60 * 24));
             const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
             const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
             
             if (distance < 0) {
                 comicTimer.innerText = "TIME!";
             } else if (days > 1) {
                 comicTimer.innerText = days + " DAYS LEFT";
             } else {
                 comicTimer.innerText = hours + "H " + minutes + "M";
             }
        }
    }

    // Run immediately so we don't see "Loading..."
    updateTimer();
    
    // Update every second
    setInterval(updateTimer, 1000);
}

// Start the timer
startCountdown();