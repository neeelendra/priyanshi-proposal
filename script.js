// ===============================
// GLOBAL ELEMENTS
// ===============================
const music = document.getElementById("bgMusic");
const messageEl = document.getElementById("message");
const proposal = document.querySelector(".proposal");
const celebrate = document.querySelector(".celebrate");
const glow = document.getElementById("glowText");
const memories = document.getElementById("memories");
const noBtn = document.getElementById("no");

// ===============================
// STORY TEXT
// ===============================
const messageText =
"Pariiii… 💖\n\n" +
"Aap bohot gande ho…\n" +
"Bohot zyada gande ho 😌\n\n" +
"Par pata hai?\n" +
"Mujhe aap waise hi bohot pasand ho ❤️\n\n" +
"Main har din aap se thoda aur pyaar karne lagta hoon… 💕\n";

let i = 0;
const speed = 50;

// ===============================
// START BUTTON HANDLER (GLOBAL)
// ===============================
function startSite() {
    // Play music (mobile safe)
    if (music) {
        music.volume = 0.2; // 20%
        music.play().catch(() => {});
    }

    // Hide start screen
    const startScreen = document.getElementById("startScreen");
    if (startScreen) startScreen.style.display = "none";

    // Start story
    startStory();
}

// ===============================
// STORY START
// ===============================
function startStory() {
    typeWriter();
}

// ===============================
// TYPEWRITER EFFECT
// ===============================
function typeWriter() {
    if (i < messageText.length) {
        messageEl.innerHTML += messageText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        proposal.classList.remove("hidden");
    }
}

// ===============================
// NO BUTTON ESCAPE (MOBILE SAFE)
// ===============================
function moveNoButton() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

// ===============================
// YES BUTTON CELEBRATION
// ===============================
document.getElementById("yes").addEventListener("click", () => {
    proposal.classList.add("hidden");
    celebrate.classList.remove("hidden");
    glow.classList.remove("hidden");
    memories.classList.remove("hidden");

    // Floating hearts
    for (let j = 0; j < 40; j++) {
        const heart = document.createElement("span");
        heart.innerHTML = "💖";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = "24px";
        heart.style.animation = "floatUp 4s linear";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 4000);
    }
});
