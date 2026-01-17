// --- LINK CONFIG ---
const registerLink = "https://forms.google.com/your-form-link";

// --- STATE VARIABLES ---
let currentIndex = 0;
let introPlayed = false; // Tracks if the game start animation has happened
let typingTimeout; // To stop typing if user clicks next quickly

// --- FULL STORY SCRIPT ---
// --- FULL STORY SCRIPT (FUNNY EDITION) ---
// --- FULL STORY SCRIPT: THE CIVIL WAR DEBATE ---
const story = [
    // --- INTRO: IRON MAN'S VIEW ---
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "Welcome to the Symposium! I'm your host, Spidey. Today we settle the debate: Tech vs. Tradition!",
        bgClass: "bg-intro", 
        bgText: "WELCOME TO\nTECH SYMPOSIUM", 
        spidey: "images/spidey1.png",
        iron: "images/iron1.png", // Iron Man is here
        side: "left"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "It's not a debate. It's a roast. I have lasers and AI. Rogers has a frisbee.",
        bgClass: "bg-intro",   
        bgText: "WELCOME TO\nTECH SYMPOSIUM",
        spidey: "images/spidey1.png",
        iron: "images/iron1.png",
        side: "right"
    },

    // --- CAPTAIN AMERICA ENTERS (Use Cap's Image in the 'iron' slot) ---
    {
        speaker: "CAPTAIN AMERICA",
        color: "#3366CC", // Blue for Cap
        text: "It's a shield, Stark. And it stands for discipline. Something this Symposium needs.",
        bgClass: "bg-intro", 
        bgText: "CHOOSE YOUR\nSIDE",
        spidey: "images/spidey2.png",
        iron: "images/cap1.png", // <--- PUT CAP IMAGE HERE
        side: "right"
    },
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "Whoa! Cap is here! Okay, let's look at the events. Round 1: PAPER PRESENTATION.",
        bgClass: "bg-intro", bgText: "EVENT 1:\nPAPER PRESENTATION",
        spidey: "images/spidey2.png", iron: "images/cap1.png", side: "left"
    },

    // --- EVENT 1: PAPER PRESENTATION (Cap's Turn) ---
    {
        speaker: "CAPTAIN AMERICA",
        color: "#3366CC",
        text: "Good. Research requires patience. You can't just ask an AI to write your thesis, Tony.",
        bgClass: "bg-intro", bgText: "EVENT 1:\nPAPER PRESENTATION",
        spidey: "images/spidey3.png", iron: "images/cap1.png", side: "right"
    },
    {
        speaker: "IRON MAN", // Iron Man swaps back in
        color: "#F5D033",
        text: "Patience is for people with slow Wi-Fi. I want to see holograms and quantum theories!",
        bgClass: "bg-intro", bgText: "EVENT 1:\nPAPER PRESENTATION",
        spidey: "images/spidey3.png", iron: "images/iron2.png", side: "right"
    },

    // --- EVENT 2: HACKATHON (Iron Man's Turn) ---
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "Okay, settle down! Round 2: The HACKATHON. 24 hours of coding. Pure stamina.",
        bgClass: "bg-intro", bgText: "EVENT 2:\nHACKATHON",
        spidey: "images/spidey4.png", iron: "images/iron2.png", side: "left"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "My favorite. If your code isn't compiling in nanoseconds, are you even trying?",
        bgClass: "bg-intro", bgText: "EVENT 2:\nHACKATHON",
        spidey: "images/spidey4.png", iron: "images/iron3.png", side: "right"
    },
    {
        speaker: "CAPTAIN AMERICA", // Cap swaps back in
        color: "#3366CC",
        text: "Endurance is key. It's not about speed, it's about not crashing when the pressure hits.",
        bgClass: "bg-intro", bgText: "EVENT 2:\nHACKATHON",
        spidey: "images/spidey4.png", iron: "images/cap1.png", side: "right"
    },

    // --- EVENT 3: TECHNOPOLY (The Argument) ---
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "Round 3: TECHNOPOLY! It's a business strategy game. Buying companies, making deals.",
        bgClass: "bg-intro", bgText: "EVENT 3:\nTECHNOPOLY",
        spidey: "images/spidey5.png", iron: "images/cap1.png", side: "left"
    },
    {
        speaker: "CAPTAIN AMERICA",
        color: "#3366CC",
        text: "Be careful. A monopoly is dangerous. You need fair competition and rules.",
        bgClass: "bg-intro", bgText: "EVENT 3:\nTECHNOPOLY",
        spidey: "images/spidey5.png", iron: "images/cap1.png", side: "right"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "Oh please. I'd just buy the bank and rename it 'Starkopoly'. It's called winning, Cap.",
        bgClass: "bg-intro", bgText: "EVENT 3:\nTECHNOPOLY",
        spidey: "images/spidey2.png", iron: "images/iron3.png", side: "right"
    },

    // --- EVENT 4: TECHTRIO ---
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "Let's move on... TECHTRIO! 3 events in 1. It forces you to be a versatile engineer.",
        bgClass: "bg-intro", bgText: "EVENT 4:\nTECHTRIO",
        spidey: "images/spidey3.png", iron: "images/iron1.png", side: "left"
    },
    {
        speaker: "CAPTAIN AMERICA",
        color: "#3366CC",
        text: "I like this one. You need a balanced team. Soldiers, scientists, and... billionaires.",
        bgClass: "bg-intro", bgText: "EVENT 4:\nTECHTRIO",
        spidey: "images/spidey3.png", iron: "images/cap1.png", side: "right"
    },

    // --- TRANSPORT ---
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "And for logistics: BUS ROUTES! We cover the whole city so everyone can attend.",
        bgClass: "bg-intro", bgText: "TRANSPORT:\nAVAILABLE",
        spidey: "images/spidey3.png", iron: "images/cap1.png", side: "left"
    },
    {
        speaker: "CAPTAIN AMERICA",
        color: "#3366CC",
        text: "Good work, son. No soldier left behind. Accessibility is a priority.",
        bgClass: "bg-intro", bgText: "TRANSPORT:\nAVAILABLE",
        spidey: "images/spidey2.png", iron: "images/cap1.png", side: "right"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "I suppose. Not everyone has a suit. Alright, I declare a truce. The event looks solid.",
        bgClass: "bg-intro", bgText: "TRANSPORT:\nAVAILABLE",
        spidey: "images/spidey2.png", iron: "images/iron2.png", side: "right"
    },

    // --- THE TWIST (Doom) ---
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "Awesome! Civil War is over! Now let's just— wait, why are the screens flickering green?",
        bgClass: "bg-intro", bgText: "CONNECTING...",
        spidey: "images/spidey6.png", iron: "images/iron2.png", side: "left"
    },
    {
        speaker: "IRON MAN",
        color: "#F5D033",
        text: "Cap? Did you touch the server rack? My suit is locking up! I can't move!",
        bgClass: "bg-intro", bgText: "ERROR...",
        spidey: "images/spidey6.png", iron: "images/iron2.png", side: "right"
    },
    {
        speaker: "DR. DOOM",
        color: "#006400",
        text: "SILENCE, AVENGERS. YOUR TECH IS FLAWED. THE SYMPOSIUM NOW BELONGS TO DOOM.",
        bgClass: "bg-intro", bgText: "DOOM\nIS HERE",
        spidey: "images/spidey3.png", iron: null, side: "villain"
    },
    {
        speaker: "SPIDEY",
        color: "#E23636",
        text: "We need reinforcements! Students! REGISTER NOW and help us hack Doom out of the system!",
        bgClass: "bg-intro", bgText: "DOOM\nIS HERE",
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