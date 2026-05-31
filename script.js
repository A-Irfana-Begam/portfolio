const text = "Cybersecurity Enthusiast | Blue Team Learner | Secure Web Developer";

let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 70);
    }
}

window.onload = function () {
    typeWriter();
    createParticles();
    revealOnScroll();
};

function createParticles() {
    const container = document.getElementById("particles");

    for (let i = 0; i < 40; i++) {
        let particle = document.createElement("div");
        particle.classList.add("particle");

        particle.style.left = Math.random() * 100 + "vw";
        particle.style.animationDuration = (4 + Math.random() * 5) + "s";
        particle.style.animationDelay = Math.random() * 5 + "s";

        container.appendChild(particle);
    }
}

/* MODAL */
function openModal(project) {
    const modal = document.getElementById("modal");
    const text = document.getElementById("modal-text");

    if (project === "p1") {
        text.innerHTML = `
            <h2>Phishing Awareness Training</h2>
            <p>Cybersecurity awareness project on phishing attacks and prevention techniques.</p>
        `;
    }

    if (project === "p2") {
        text.innerHTML = `
            <h2>Secure Coding Review</h2>
            <p>Analyzed Python login system and suggested security improvements.</p>
        `;
    }

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

/* SCROLL REVEAL */
function revealOnScroll() {
    const elements = document.querySelectorAll(".reveal");

    elements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);