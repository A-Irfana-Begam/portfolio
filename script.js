const text =
"Cybersecurity Enthusiast | Blue Team Learner | Secure Web Developer";

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

    updateProgressBar();
};
function createParticles() {

    const container = document.getElementById("particles");

    for (let i = 0; i < 40; i++) {

        let particle = document.createElement("div");

        particle.classList.add("particle");

        particle.style.left = Math.random() * 100 + "vw";

        particle.style.animationDuration =
            (4 + Math.random() * 5) + "s";

        particle.style.animationDelay =
            Math.random() * 5 + "s";

        container.appendChild(particle);
    }
}
function openModal(project) {

    const modal = document.getElementById("modal");
    const text = document.getElementById("modal-text");

    if (project === "p1") {

        text.innerHTML = `
            <h2>Phishing Awareness Training</h2>

            <p>
                Cybersecurity awareness project focused on
                phishing attacks, social engineering,
                email-based threats and prevention techniques.
            </p>

            <h3>Topics Covered</h3>

            <ul>
                <li>Phishing Detection</li>
                <li>Email Security Awareness</li>
                <li>Social Engineering Attacks</li>
                <li>Safe Browsing Practices</li>
            </ul>
        `;
    }

    if (project === "p2") {

        text.innerHTML = `
            <h2>Secure Coding Review</h2>

            <p>
                Security analysis project focused on reviewing
                Python code and identifying vulnerabilities.
            </p>

            <h3>Areas Reviewed</h3>

            <ul>
                <li>Input Validation</li>
                <li>Password Security</li>
                <li>Authentication Logic</li>
                <li>Secure Coding Practices</li>
            </ul>
        `;
    }

    modal.style.display = "block";
}
function openCert(cert) {

    const modal = document.getElementById("modal");
    const text = document.getElementById("modal-text");

    if (cert === "c2") {

        text.innerHTML = `
            <h2>Mastering Kali Linux: From Commands to Cyber Control</h2>

            <p><strong>Provider:</strong> DevTown</p>

            <p>
                Successfully completed a 5-day bootcamp focused on
                Kali Linux tools, Linux commands and
                cybersecurity fundamentals.
            </p>

            <img
                src="kali-linux.jpg"
                alt="Kali Linux Certificate"
                class="certificate-image">
        `;
    }

    if (cert === "c5") {

        text.innerHTML = `
            <h2>Grand Checkmate (Chess)</h2>

            <p><strong>Event:</strong> Kurukshetra'26</p>

            <p>
                Participated in Grand Checkmate,
                demonstrating analytical thinking,
                planning and strategic decision making.
            </p>

            <img
                src="chess.jpg"
                alt="Chess Certificate"
                class="certificate-image">
        `;
    }

    modal.style.display = "block";
}
function closeModal() {

    document.getElementById("modal").style.display = "none";
}
window.onclick = function(event) {

    const modal = document.getElementById("modal");

    if (event.target === modal) {

        modal.style.display = "none";
    }
};
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeModal();
    }
});
function revealOnScroll() {

    const elements =
        document.querySelectorAll(".reveal");

    elements.forEach(element => {

        const windowHeight =
            window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active");
        }
    });
}

window.addEventListener(
    "scroll",
    revealOnScroll
);
function updateProgressBar() {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    document.getElementById(
        "progress-bar"
    ).style.width = progress + "%";
}

window.addEventListener(
    "scroll",
    updateProgressBar
);

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 10
    ) {
        current = "contact";
    }

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }
    });

});
document.addEventListener("mousemove", (e) => {

    const trail = document.createElement("div");

    trail.classList.add("trail");

    trail.style.left = e.clientX + "px";
    trail.style.top = e.clientY + "px";

    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 700);

});
