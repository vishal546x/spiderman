// --- LINK CONFIG ---
const registerLink = "https://forms.google.com/your-form-link";

// --- STATE VARIABLES ---
let currentIndex = 0;
let introPlayed = false; // Tracks if the game start animation has happened
let typingTimeout; // To stop typing if user clicks next quickly

// --- FULL STORY SCRIPT ---
// --- FULL STORY SCRIPT: THE HAPPY HOGAN REJECTION ARC ---
const story = [
    // --- INTRO: DEADPOOL & IRON MAN ---
    {
        speaker: "DEADPOOL",
        color: "#800000", 
        text: "WELCOME! I am your host, the Merc with a Mouth! I took over this Symposium to prove a point.",
        bgClass: "bg-intro", 
        bgText: "DEADPOOL\nHOSTING", 
        spidey: "images/dp1.png", 
        iron: "images/iron1.png", 
        side: "left"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "Prove what point? That you can annoy me to death? Where is Peter?",
        bgClass: "bg-intro",   
        bgText: "DEADPOOL\nHOSTING",
        spidey: "images/dp1.png",
        iron: "images/iron1.png",
        side: "right"
    },

    // --- EVENT 1: PAPER PRESENTATION (vs IRON MAN) ---
    {
        speaker: "DEADPOOL",
        color: "#800000",
        text: "Peter is fine. First Event: PAPER PRESENTATION! Which sounds way too smart for me.",
        bgClass: "bg-intro", bgText: "EVENT 1:\nPAPER STUFF",
        spidey: "images/dp1.png", iron: "images/iron1.png", side: "left"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "It is for geniuses. Innovators. People who actually read the manual. Unlike you.",
        bgClass: "bg-intro", bgText: "EVENT 1:\nPAPER STUFF",
        spidey: "images/dp1.png", iron: "images/iron2.png", side: "right"
    },

    // --- EVENT 2: HACKATHON (vs CAPTAIN AMERICA) ---
    {
        speaker: "DEADPOOL",
        color: "#800000",
        text: "Whatever. Next: HACKATHON! And here to judge is America's Grandpa, Steve Rogers!",
        bgClass: "bg-intro", bgText: "EVENT 2:\nHACKATHON",
        spidey: "images/dp1.png", iron: "images/cap1.png", side: "left"
    },
    {
        speaker: "CAPTAIN AMERICA",
        color: "#3366CC",
        text: "Programming requires discipline, son. 24 hours of focus. No distractions. And pull up your pants.",
        bgClass: "bg-intro", bgText: "EVENT 2:\nHACKATHON",
        spidey: "images/dp1.png", iron: "images/cap1.png", side: "right"
    },

    // --- EVENT 3: TECHNOPOLY (vs THOR) ---
    {
        speaker: "DEADPOOL",
        color: "#800000",
        text: "Yes sir! Round 3: TECHNOPOLY. Strategy! Money! And... Thunder? Thor is here?",
        bgClass: "bg-intro", bgText: "EVENT 3:\nTECHNOPOLY",
        spidey: "images/dp1.png", iron: "images/thor1.png", side: "left"
    },
    {
        speaker: "THOR",
        color: "#FF3333", 
        text: "I shall conquer this board game! I will buy all the tiny plastic houses! FOR ASGARD!",
        bgClass: "bg-intro", bgText: "EVENT 3:\nTECHNOPOLY",
        spidey: "images/dp1.png", iron: "images/thor1.png", side: "right"
    },

    // --- EVENT 4: TECHTRIO (vs WOLVERINE) ---
    {
        speaker: "DEADPOOL",
        color: "#800000",
        text: "Calm down, Sparkles. Next: TECHTRIO! 3-in-1. And speaking of combos... Logan! Wolverine!",
        bgClass: "bg-intro", bgText: "EVENT 4:\nTECHTRIO",
        spidey: "images/dp1.png", iron: "images/wolverine1.png", side: "left"
    },
    {
        speaker: "WOLVERINE",
        color: "#FFD700", 
        text: "I'm only here for the beer, Wade. If I have to fix a computer, I'm using my claws.",
        bgClass: "bg-intro", bgText: "EVENT 4:\nTECHTRIO",
        spidey: "images/dp1.png", iron: "images/wolverine1.png", side: "right"
    },

    // --- TRANSPORT (vs DR. STRANGE) ---
    {
        speaker: "DEADPOOL",
        color: "#800000",
        text: "Classic Logan. Finally: BUS ROUTES. Dr. Strange, can you magic the students here?",
        bgClass: "bg-intro", bgText: "TRANSPORT:\nAVAILABLE",
        spidey: "images/dp1.png", iron: "images/strange1.png", side: "left"
    },
    {
        speaker: "DR. STRANGE",
        color: "#800080",
        text: "The mystic arts are not for commuting, Wade. The buses are efficient enough. Use them.",
        bgClass: "bg-intro", bgText: "TRANSPORT:\nAVAILABLE",
        spidey: "images/dp1.png", iron: "images/strange1.png", side: "right"
    },

    // --- THE VENT (DEADPOOL'S REAL MOTIVATION) ---
    {
        speaker: "DEADPOOL",
        color: "#800000",
        text: "Fine! Everything is organized! See, Stark? I can run a team! Happy Hogan was WRONG!",
        bgClass: "bg-intro", bgText: "HAPPY WAS\nWRONG",
        spidey: "images/dp1.png", iron: "images/iron2.png", side: "left"
    },
    {
        speaker: "DEADPOOL",
        color: "#800000",
        text: "Happy told me I wasn't 'Avenger Material'. That's why I wasn't fighting Thanos! He ghosted me!",
        bgClass: "bg-intro", bgText: "HAPPY WAS\nWRONG",
        spidey: "images/dp1.png", iron: "images/iron2.png", side: "left"
    },
    
    // --- THE CLIMAX (DOOM ARRIVES) ---
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "Wait... Wade, stop crying. The system is locking up. Someone is overriding the protocol.",
        bgClass: "bg-intro", bgText: "SYSTEM\nFAILURE",
        spidey: "images/dp1.png", iron: "images/iron2.png", side: "right"
    },
    {
        speaker: "DR. DOOM",
        color: "#006400",
        text: "SILENCE, FOOLS. STARK'S SECURITY IS PATHETIC. I CONQUER THIS SYMPOSIUM.",
        bgClass: "bg-intro", bgText: "DOOM\nIS HERE",
        spidey: "images/dp1.png", iron: null, side: "villain"
    },
    
    // --- THE CHALLENGE ---
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "Great. He hacked the mainframe. I can't reboot it alone. Wade, this is your chance.",
        bgClass: "bg-intro", bgText: "ASSEMBLE",
        spidey: "images/dp1.png", iron: "images/iron2.png", side: "right"
    },
    {
        speaker: "DEADPOOL",
        color: "#800000",
        text: "My chance? To fight Doom? With what? My charm?",
        bgClass: "bg-intro", bgText: "ASSEMBLE",
        spidey: "images/dp1.png", iron: "images/iron2.png", side: "left"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "To prove Happy wrong. If you want to be an Avenger, you need a team. A smart team. Find them.",
        bgClass: "bg-intro", bgText: "ASSEMBLE",
        spidey: "images/dp1.png", iron: "images/iron2.png", side: "right"
    },
    
    // --- THE CALL TO ACTION ---
    {
        speaker: "DEADPOOL",
        color: "#800000",
        text: "A smart team? *Looks at screen* HEY YOU! Yeah, you with the mouse! I choose YOU!",
        bgClass: "bg-intro", bgText: "I CHOOSE\nYOU",
        spidey: "images/dp1.png", iron: "images/iron2.png", side: "left"
    },
    {
        speaker: "DEADPOOL",
        color: "#800000",
        text: "REGISTER NOW! Help me hack Doom! If we win, I send a selfie to Happy! GO GO GO!",
        bgClass: "bg-intro", bgText: "REGISTER\nNOW",
        spidey: "images/dp1.png", iron: "images/iron2.png", side: "left"
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
// --- NEW: GENERATE FLOATING TECH PARTICLES ---
function createTechParticles() {
    const introSection = document.getElementById('game-intro');
    if (!introSection) return;

    // Create 30 particles
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('tech-particle');
        
        // Randomize size (small squares)
        const size = Math.random() * 10 + 5; // 5px to 15px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Randomize position (across the screen)
        particle.style.left = `${Math.random() * 100}%`;
        
        // Randomize speed (different float times)
        const duration = Math.random() * 10 + 5; // 5s to 15s
        particle.style.animationDuration = `${duration}s`;
        
        // Randomize delay (so they don't all start at once)
        particle.style.animationDelay = `${Math.random() * 5}s`;

        introSection.appendChild(particle);
    }
}

// Run this immediately
createTechParticles();