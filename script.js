

/* ==========================================
   AOS
========================================== */

if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 1000,
        once: true
    });
}

/* ==========================================
   DARK MODE
========================================== */

const themeBtn = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");

    if (themeBtn) {
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light");

        const isLight = document.body.classList.contains("light");

        localStorage.setItem(
            "theme",
            isLight ? "light" : "dark"
        );

        themeBtn.innerHTML = isLight
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';

    });

}

/* ==========================================
   COUNTDOWN
   Event Date: 15 September 2026
========================================== */

const countdown = () => {

    const eventDate = new Date("september 15,2026,9:00:00").getTime();
    const now= new Date().getTime();

    const distance = eventDate - now;

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    const d = document.getElementById("days");
    const h = document.getElementById("hours");
    const m = document.getElementById("minutes");
    const s = document.getElementById("seconds");

    if (d) d.textContent = days;
    if (h) h.textContent = hours;
    if (m) m.textContent = minutes;
    if (s) s.textContent = seconds;

    if (distance < 0) {

        clearInterval(timer);

        if (d) d.textContent = 0;
        if (h) h.textContent = 0;
        if (m) m.textContent = 0;
        if (s) s.textContent = 0;

    }

};

countdown();

const timer = setInterval(countdown, 1000);
const eventdate=new Date("september 15,2026,9:00:00").getTime();

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        menuBtn.innerHTML = navLinks.classList.contains("active")
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';

    });

}

/* Close menu when clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks) {

            navLinks.classList.remove("active");

        }

        if (menuBtn) {

            menuBtn.innerHTML =
                '<i class="fas fa-bars"></i>';

        }

    });

});

/* ==========================================
   ACTIVE NAV LINK
========================================== */

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});
/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop?.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================================
   FAQ ACCORDION
========================================== */

const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach(button => {

    button.addEventListener("click", () => {

        const answer = button.nextElementSibling;

        const icon = button.querySelector("i");

        document.querySelectorAll(".faq-answer").forEach(item => {

            if (item !== answer) {

                item.style.display = "none";

            }

        });

        document.querySelectorAll(".faq-question i").forEach(i => {

            if (i !== icon) {

                i.classList.remove("fa-minus");

                i.classList.add("fa-plus");

            }

        });

        if (answer.style.display === "block") {

            answer.style.display = "none";

            icon.classList.remove("fa-minus");

            icon.classList.add("fa-plus");

        } else {

            answer.style.display = "block";

            icon.classList.remove("fa-plus");

            icon.classList.add("fa-minus");

        }

    });

});

/* ==========================================
   ANIMATED COUNTERS
========================================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let current = 0;

            const increment = target / 150;

            const updateCounter = () => {

                if (current < target) {

                    current += increment;

                    counter.textContent = Math.ceil(current);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.textContent = target;

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/* ==========================================
   REGISTRATION FORM VALIDATION
========================================== */

const form = document.getElementById("registrationForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const password = form.querySelectorAll("input[type='password']")[0];

        const confirmPassword = form.querySelectorAll("input[type='password']")[1];

        if (password.value.length < 6) {

            alert("Password must contain at least 6 characters.");

            password.focus();

            return;

        }

        if (password.value !== confirmPassword.value) {

            alert("Passwords do not match.");

            confirmPassword.focus();

            return;

        }

        alert("🎉 Registration Successful!\n\nWelcome to TechVerse 2026.");

        form.reset();

    });

}

/* ==========================================
   NEWSLETTER
========================================== */

const newsletterForm = document.querySelector(".newsletter form");

newsletterForm?.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = this.querySelector("input").value.trim();

    if (email === "") {

        alert("Please enter your email.");

        return;

    }

    alert("✅ Thank you for subscribing!");

    this.reset();

});

/* ==========================================
   HEADER SHADOW
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.25)";

    } else {

        header.style.boxShadow = "none";

    }

});

/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/* ==========================================
   HERO BUTTON RIPPLE EFFECT
========================================== */

document.querySelectorAll(".primary-btn, .register-btn, .ticket-btn, .submit-btn").forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height);

        ripple.style.width = ripple.style.height = size + "px";

        ripple.style.left = (e.clientX - rect.left - size / 2) + "px";

        ripple.style.top = (e.clientY - rect.top - size / 2) + "px";

        ripple.className = "ripple";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log(
`==========================================
 TechVerse 2026 Event Website
 Developed with HTML, CSS & JavaScript
 Countdown Target: 15 September 2026
==========================================`
);