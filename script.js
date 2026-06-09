const text =
"Cybersecurity Enthusiast | Blue Team Learner | Secure Web Developer";

let i = 0;

/* =========================
   TYPING EFFECT
========================= */

function typeWriter() {

    if (i < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 70);
    }
}

/* =========================
   PAGE LOAD
========================= */

window.onload = function () {

    typeWriter();

    createParticles();

    revealOnScroll();

    updateProgressBar();
};

/* =========================
   PARTICLES
========================= */

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

/* =========================
   PROJECT MODALS
========================= */

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

/* =========================
   CERTIFICATE MODALS
========================= */

function openCert(cert) {

    const modal = document.getElementById("modal");
    const text = document.getElementById("modal-text");

    /* CISCO */

    if (cert === "c1") {

        text.innerHTML = `
            <h2>Introduction to Cybersecurity</h2>

            <p><strong>Provider:</strong> Cisco</p>

            <p>
                Completed Cisco's Introduction to Cybersecurity
                certification covering cyber threats,
                security principles and cybersecurity fundamentals.
            </p>

            <img
                src="cisco.jpg"
                alt="Cisco Certificate"
                class="certificate-image">
        `;
    }

    /* KALI */

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

    /* CTF */

    if (cert === "c3") {

        text.innerHTML = `
            <h2>CTF Certifications</h2>

            <p>
                Participated in multiple Capture The Flag competitions
                involving cybersecurity, networking,
                web security and problem solving.
            </p>

            <hr>

            <h3>EncipherX 4.0</h3>
            <p>St. Vincent Pallotti College of Engineering and Technology</p>

            <img
                src="encipherx.jpg"
                class="ctf-image">

            <hr>

            <h3>CREST CTF 2026</h3>
            <p>School of Computer Applications, Pimpri Chinchwad University</p>

            <img
                src="crest.jpg"
                class="ctf-image">

            <hr>

            <h3>Signal Processing Based Virtual CTF</h3>
            <p>BMS Institute of Technology and Management</p>

            <img
                src="signal.jpg"
                class="ctf-image">

            <hr>

            <h3>CRACK-IN 2.0 CTF</h3>
            <p>Gyan Ganga Institute of Technology and Sciences</p>

            <img
                src="crackin.jpg"
                class="ctf-image">

            <hr>

            <h3>CyberGeek CTF</h3>
            <p>GeekHaven, IIIT Allahabad</p>

            <img
                src="cybergeek.jpg"
                class="ctf-image">
        `;
    }

    /* PYTHON */

    if (cert === "c4") {

        text.innerHTML = `
            <h2>Python for Data Science</h2>

            <p><strong>Provider:</strong> Infosys Springboard</p>

            <p>
                Completed certification covering
                Python programming fundamentals,
                data handling and introductory
                data science concepts.
            </p>

            <img
                src="python.jpg"
                alt="Python Certificate"
                class="certificate-image">
        `;
    }

    /* CHESS */

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

/* =========================
   CLOSE MODAL
========================= */

function closeModal() {

    document.getElementById("modal").style.display = "none";
}

/* =========================
   CLICK OUTSIDE CLOSE
========================= */

window.onclick = function(event) {

    const modal = document.getElementById("modal");

    if (event.target === modal) {

        modal.style.display = "none";
    }
};

/* =========================
   ESC KEY CLOSE
========================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeModal();
    }
});

/* =========================
   SCROLL REVEAL
========================= */

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

/* =========================
   PROGRESS BAR
========================= */

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
/* =========================
   NEON TRAIL EFFECT
========================= */

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
