const messageText =
"Priyanshi, from the moment you came into my life, everything felt more beautiful. \
Your smile calms me, your presence completes me, and your love means everything to me. \
So today, with all my heart, I just want to ask you one thing… 💖";

let i = 0;
const speed = 50;

const messageEl = document.getElementById("message");
const proposal = document.querySelector(".proposal");
const celebrate = document.querySelector(".celebrate");
const glow = document.getElementById("glowText");
const noBtn = document.getElementById("no");

function typeWriter() {
    if (i < messageText.length) {
        messageEl.innerHTML += messageText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        proposal.classList.remove("hidden");
    }
}
typeWriter();

/* Floating Hearts */
const heartsContainer = document.querySelector(".hearts");
setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 30 + 15 + "px";
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
}, 300);

/* No Button Escape */
noBtn.addEventListener("mouseover", () => {
    noBtn.style.left = Math.random() * (window.innerWidth - 100) + "px";
    noBtn.style.top = Math.random() * (window.innerHeight - 100) + "px";
});

/* YES Celebration */
document.getElementById("yes").addEventListener("click", () => {
    proposal.classList.add("hidden");
    celebrate.classList.remove("hidden");
    glow.classList.remove("hidden");

    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("span");
        heart.innerHTML = "❤️";
        heart.style.position = "absolute";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";
        heart.style.fontSize = "30px";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    }
});
