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
  // --- INTRO: SPIDER-MAN STARTS ---
  {
    speaker: "SPIDER-MAN",
    color: "#E60026",
    text: "Ladies, gentlemen, Avengers, and people who came only for free snacks — WELCOME to our SYMPOSIUM!",
    bgClass: "bg-intro",
    bgText: "ATTENDANCE\nLOW?",
    spidey: "images/spidey1.png",
    iron: "images/thor1.png",
    side: "left"
  },
  {
    speaker: "SPIDER-MAN",
    color: "#E60026",
    text: "I’m your host. Mr. Stark made me do this for an internship credit. So please, laugh at my jokes.",
    bgClass: "bg-intro",
    bgText: "UNPAID\nINTERN",
    spidey: "images/spidey1.png",
    iron: "images/thor1.png",
    side: "left"
  },

  // --- THOR SHOWS EVENTS ---
  {
    speaker: "THOR",
    color: "#3399FF",
    text: "MORTALS! I bring news of digital combat! And something called 'The Wi-Fi Password'!",
    bgClass: "bg-intro",
    bgText: "DIGITAL\nCOMBAT",
    spidey: "images/spidey1.png",
    iron: "images/thor1.png",
    side: "right"
  },
  {
    speaker: "THOR",
    color: "#3399FF",
    text: "We have the Paper of Presentation! The Marathon of Hacking! And... 'Tech-no-poly'? Is that a disease?",
    bgClass: "bg-intro",
    bgText: "WHAT IS\nPOLY?",
    spidey: "images/spidey1.png",
    iron: "images/thor1.png",
    side: "right"
  },

  // --- SPIDEY QUESTIONS ---
  {
    speaker: "SPIDER-MAN",
    color: "#E60026",
    text: "Thor… how are you doing all this alone? You can’t even use a laptop without breaking it.",
    bgClass: "bg-intro",
    bgText: "DONT\nSMASH",
    spidey: "images/spidey2.png",
    iron: "images/thor1.png",
    side: "left"
  },
  {
    speaker: "THOR",
    color: "#3399FF",
    text: "I am not alone, Spider-Man. My friends from Earth help me.",
    bgClass: "bg-intro",
    bgText: "PARENTAL\nCONTROL",
    spidey: "images/spidey2.png",
    iron: "images/thor1.png",
    side: "right"
  },

  // --- EVENT 1: PAPER PRESENTATION ---
  {
    speaker: "SPIDER-MAN",
    color: "#E60026",
    text: "Event 1: Paper Presentation. Judged by the man who sees everything... metaphorically.",
    bgClass: "bg-intro",
    bgText: "EVENT 1:\nPAPER",
    spidey: "images/spidey1.png",
    iron: "images/daredevil1.png",
    side: "left"
  },
  {
    speaker: "DAREDEVIL",
    color: "#8B0000",
    text: "I can hear your heart rate spiking during your intro. Don't lie about your data. I *will* know.",
    bgClass: "bg-intro",
    bgText: "HEART\nRATE",
    spidey: "images/spidey1.png",
    iron: "images/daredevil1.png",
    side: "right"
  },
  {
    speaker: "SPIDER-MAN",
    color: "#E60026",
    text: "See? Terrifying. I think i need to prepare.",
    bgClass: "bg-intro",
    bgText: "OOPS\nSORRY",
    spidey: "images/spidey1.png",
    iron: "images/daredevil1.png",
    side: "left"
  },

  // --- EVENT 2: HACKATHON ---
  {
    speaker: "SPIDER-MAN",
    color: "#E60026",
    text: "Next: Hackathon! Leading it is the only guy here who still owns a flip phone.",
    bgClass: "bg-intro",
    bgText: "EVENT 2:\nHACKATHON",
    spidey: "images/spidey1.png",
    iron: "images/cap1.png",
    side: "left"
  },
  {
    speaker: "CAPTAIN AMERICA",
    color: "#1E90FF",
    text: "I don't know what a 'Python' is, son. But if it threatens liberty, we debug it together. On the... inter-webs.",
    bgClass: "bg-intro",
    bgText: "DEBUG\nLIBERTY",
    spidey: "images/spidey1.png",
    iron: "images/cap1.png",
    side: "right"
  },
  {
    speaker: "SPIDER-MAN",
    color: "#E60026",
    text: "He thinks 'Java' is just coffee. Just nod and smile, guys. Nod and smile.",
    bgClass: "bg-intro",
    bgText: "JUST\nCOFFEE",
    spidey: "images/spidey1.png",
    iron: "images/cap1.png",
    side: "left"
  },

  // --- EVENT 3: TECHNOPOLY ---
  {
    speaker: "SPIDER-MAN",
    color: "#E60026",
    text: "Technolopoly! It's Monopoly, but for people who want to feel rich like Mr. Stark.",
    bgClass: "bg-intro",
    bgText: "EVENT 3:\nTECHNOPOLY",
    spidey: "images/spidey1.png",
    iron: "images/iron1.png",
    side: "left"
  },
  {
    speaker: "IRON MAN",
    color: "#FFD700",
    text: "It's simple. Buy everything. If you lose, just buy the bank. That's how the economy works, right?",
    bgClass: "bg-intro",
    bgText: "BUY\nTHE BANK",
    spidey: "images/spidey1.png",
    iron: "images/iron1.png",
    side: "right"
  },
  {
    speaker: "THOR",
    color: "#3399FF",
    text: "Tony, that is illegal. In Asgard, we just flip the table when we lose.",
    bgClass: "bg-intro",
    bgText: "TABLE\nFLIP",
    spidey: "images/spidey1.png",
    iron: "images/thor1.png",
    side: "right"
  },

  // --- EVENT 4: TECH TRIO ---
  {
    speaker: "SPIDER-MAN",
    color: "#E60026",
    text: "Next: Tech Trio! A team of three. Explained by... the guy who IS a team of three.",
    bgClass: "bg-intro",
    bgText: "EVENT 4:\nTECH TRIO",
    spidey: "images/spidey1.png",
    iron: "images/moon1.png",
    side: "left"
  },
  {
    speaker: "SPIDER-MAN",
    color: "#E60026",
    text: "Wait, Marc? Steven? Jake? Who am I talking to? We need a rulebook for this.",
    bgClass: "bg-intro",
    bgText: "WHO\nIS IT?",
    spidey: "images/spidey2.png",
    iron: "images/moon1.png",
    side: "left"
  },
  {
    speaker: "MOON KNIGHT",
    color: "#CCCCCC",
    text: "We are the perfect team. Marc codes, Steven presents, and Jake... Jake breaks the keyboard.",
    bgClass: "bg-intro",
    bgText: "PERFECT\nTEAM",
    spidey: "images/spidey2.png",
    iron: "images/moon1.png",
    side: "right"
  },
  {
    speaker: "SPIDER-MAN",
    color: "#E60026",
    text: "Okay, that's unfair. You can't just register yourself as 'Team Khonshu'. Disqualified.",
    bgClass: "bg-intro",
    bgText: "NO\nCHEATING",
    spidey: "images/spidey2.png",
    iron: "images/moon1.png",
    side: "left"
  },

  // --- BUS ROUTE PART 1: DR STRANGE ---
  {
    speaker: "DR. STRANGE",
    color: "#800080",
    text: "Bus Routes! Because apparently, using the Time Stone to skip traffic is 'irresponsible'.",
    bgClass: "bg-intro",
    bgText: "NO\nPORTALS",
    spidey: "images/spidey1.png",
    iron: "images/strange1.png",
    side: "right"
  },

  // --- BUS ROUTE PART 2: WONG ---
  {
    speaker: "WONG",
    color: "#556B2F",
    text: "Take the bus. If I catch one more student trying to Sling Ring into the cafeteria, I'm banning Beyonce.",
    bgClass: "bg-intro",
    bgText: "BUS\nONLY",
    spidey: "images/spidey1.png",
    iron: "images/wong1.png",
    side: "right"
  },

  // --- BUS ROUTE PART 3: NED ---
  {
    speaker: "NED",
    color: "#FF8C00",
    text: "Guys, just take the bus. I accidentally portaled my homework into a volcano once.",
    bgClass: "bg-intro",
    bgText: "GRANDMA\nGONE",
    spidey: "images/spidey1.png",
    iron: "images/ned1.png",
    side: "right"
  },
  {
    speaker: "SPIDER-MAN",
    color: "#E60026",
    text: "Ned... that explains so much. Did you ever get that back?",
    bgClass: "bg-intro",
    bgText: "WAIT\nWHAT",
    spidey: "images/spidey2.png",
    iron: "images/ned1.png",
    side: "left"
  },
  {
    speaker: "NED",
    color: "#FF8C00",
    text: "Eventually. it burns out",
    bgClass: "bg-intro",
    bgText: "SHE IS\nFINE",
    spidey: "images/spidey2.png",
    iron: "images/ned1.png",
    side: "right"
  },
  {
    speaker: "SPIDER-MAN",
    color: "#E60026",
    text: "Great. My best friend is a magical hazard. Totally normal.",
    bgClass: "bg-intro",
    bgText: "NORMAL\nLIFE",
    spidey: "images/spidey2.png",
    iron: "images/ned1.png",
    side: "left"
  },

  // ... (Previous slides remain the same) ...

  // --- NON-TECHNICAL TALK (Spidey starts the hype) ---
  {
    speaker: "SPIDER-MAN",
    color: "#E60026",
    text: "Okay, enough technical stuff. Let's talk about the NON-TECHNICAL event!",
    bgClass: "bg-intro",
    bgText: "NON\nTECH",
    spidey: "images/spidey1.png",
    iron: "images/thor1.png",
    side: "left"
  },
  {
    speaker: "SPIDER-MAN",
    color: "#E60026",
    text: "This is a huge SURPRISE. It's top secret. I'm not even supposed to tell you, but...",
    bgClass: "bg-intro",
    bgText: "TOP\nSECRET",
    spidey: "images/spidey1.png",
    iron: "images/thor1.png",
    side: "left"
  },
  {
    speaker: "SPIDER-MAN",
    color: "#E60026",
    text: "Okay, I'll leak it. The surprise event is actually—",
    bgClass: "bg-intro",
    bgText: "LEAKING\nIT...",
    spidey: "images/spidey1.png",
    iron: "images/thor1.png",
    side: "left"
  },

  // --- GLITCH & DOOM (The Interruption) ---
  {
    speaker: "SYSTEM",
    color: "#FFFFFF",
    text: "### ERROR: SPOILER BLOCKED BY DOOM_FIREWALL ###",
    bgClass: "bg-intro",
    bgText: "SIGNAL\nLOST",
    spidey: "images/spidey2.png",
    iron: null,
    side: "center"
  },
  {
    speaker: "DR. DOOM",
    color: "#006400",
    text: "SILENCE! I, DOOM, forbid this reveal! There will be no surprises, only obedience!",
    bgClass: "bg-intro",
    bgText: "NO\nSPOILERS",
    spidey: "images/spidey2.png",
    iron: null,
    side: "villain"
  },
  {
    speaker: "DR. DOOM",
    color: "#006400",
    text: "I have locked the database! Your precious 'Surprise Event' is now deleted!",
    bgClass: "bg-intro",
    bgText: "EVENT\nDELETED",
    spidey: "images/spidey2.png",
    iron: null,
    side: "villain"
  },

  // --- CALL TO ACTION (Recovering the Event) ---
  {
    speaker: "SPIDER-MAN",
    color: "#E60026",
    text: "Hey! You can't just delete the fun part! That was going to be epic!",
    bgClass: "bg-intro",
    bgText: "NOT\nCOOL",
    spidey: "images/spidey3.png",
    iron: null,
    side: "left"
  },
  {
    speaker: "SPIDER-MAN",
    color: "#E60026",
    text: "Guys, Doom locked the system! We need to override his protocol to get the surprise back!",
    bgClass: "bg-intro",
    bgText: "SYSTEM\nLOCKED",
    spidey: "images/spidey3.png",
    iron: null,
    side: "left"
  },
  {
    speaker: "SPIDER-MAN",
    color: "#E60026",
    text: "The only way to crash his firewall is to flood it with registrations! JOIN US NOW!",
    bgClass: "bg-intro",
    bgText: "JOIN\nUS",
    spidey: "images/spidey3.png",
    iron: null,
    side: "left"
  },
  {
    speaker: "SPIDER-MAN",
    color: "#E60026",
    text: "Register immediately! Defeat Doom! And I promise... I'll tell you what the surprise is!",
    bgClass: "bg-intro",
    bgText: "REGISTER\nNOW",
    spidey: "images/spidey3.png",
    iron: null,
    side: "left"
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