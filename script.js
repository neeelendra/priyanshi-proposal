// ===============================
// ELEMENTS
// ===============================
const music = document.getElementById("bgMusic");
const messageEl = document.getElementById("message");
const proposal = document.querySelector(".proposal");
const celebrate = document.querySelector(".celebrate");
const glow = document.getElementById("glowText");
const memories = document.getElementById("memories");
const noBtn = document.getElementById("no");
const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");

// ===============================
// STORY TEXT
// ===============================
const messageText =
"Pariiii… 💖\n\n" +
"Aap bohot gande ho…\n" +
"Bohot zyada gande ho 😌\n\n" +
"Par sach bolu?\n" +
"Mujhe aap waise hi bohot pasand ho ❤️\n\n" +
"Main har din aap se thoda aur pyaar karne lagta hoon… 💕\n";

let i = 0;
const speed = 50;

// ===============================
// START BUTTON CLICK
// ===============================
startBtn.addEventListener("click", () => {
    // hide start screen
    startScreen.style.display = "none";

    // play music (mobile safe)
    music.volume = 0.2;
    music.play().catch(() => {});

    // start story
    typeWriter();
});

// ===============================
// TYPEWRITER
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
// NO BUTTON ESCAPE (MOBILE + DESKTOP)
// ===============================
function moveNoButton() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

// ===============================
// YES BUTTON
// ===============================
document.getElementById("yes").addEventListener("click", () => {
    proposal.classList.add("hidden");
    celebrate.classList.remove("hidden");
    glow.classList.remove("hidden");
    memories.classList.remove("hidden");

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
