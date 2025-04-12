// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  mobileMenuBtn.innerHTML = navLinks.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll down button
const scrollDownBtn = document.getElementById("scrollDown");
scrollDownBtn.addEventListener("click", () => {
  document.querySelector("#about").scrollIntoView({
    behavior: "smooth",
  });
});

// Animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    ".section-title, .about-content, .work-card, .gallery-item"
  );

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (elementPosition < screenPosition) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
};

// Set initial state for animated elements
document
  .querySelectorAll(".section-title, .about-content, .work-card, .gallery-item")
  .forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

// Run on load and scroll
window.addEventListener("load", animateOnScroll);
window.addEventListener("scroll", animateOnScroll);

// FAQ Accordion Functionality
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentElement;
    const answer = question.nextElementSibling;
    const icon = question.querySelector("i");

    // Close all other items
    document.querySelectorAll(".faq-item").forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.querySelector(".faq-answer").style.maxHeight = "0";
        otherItem.querySelector(".faq-answer").style.padding = "0 1.5rem";
        otherItem.querySelector("i").style.transform = "rotate(0deg)";
      }
    });

    // Toggle current item
    if (answer.style.maxHeight === "0px" || !answer.style.maxHeight) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.style.padding = "0 1.5rem 1.5rem";
      icon.style.transform = "rotate(180deg)";
    } else {
      answer.style.maxHeight = "0";
      answer.style.padding = "0 1.5rem";
      icon.style.transform = "rotate(0deg)";
    }
  });
});

// Animate FAQ items on scroll
const animateFAQOnScroll = () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item, index) => {
    const itemPosition = item.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (itemPosition < screenPosition) {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }
  });
};

// Set initial state for FAQ items
document.querySelectorAll(".faq-item").forEach((item, index) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(20px)";
  item.style.transition = `opacity 0.5s ease ${
    index * 0.1
  }s, transform 0.5s ease ${index * 0.1}s`;
});

// Run on load and scroll
window.addEventListener("load", animateFAQOnScroll);
window.addEventListener("scroll", animateFAQOnScroll);

// Activity card hover animations
document.querySelectorAll(".activity-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
    card.querySelector(".activity-icon").style.transform =
      "translateY(-10px) scale(1.1)";
    card.querySelector(".activity-icon").style.background =
      "linear-gradient(135deg, var(--accent), #e9c46aaa)";
    card.querySelector("h3").style.color = "white";
    card.querySelector("p").style.color = "rgba(255,255,255,0.9)";
    card.querySelector(".hover-effect").style.opacity = "1";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
    card.querySelector(".activity-icon").style.transform =
      "translateY(0) scale(1)";
    card.querySelector(".activity-icon").style.background =
      "linear-gradient(135deg, var(--primary), #2a9d8faa)";
    card.querySelector("h3").style.color = "var(--secondary)";
    card.querySelector("p").style.color = "#666";
    card.querySelector(".hover-effect").style.opacity = "0";
  });
});

// Animate on scroll
const animateActivities = () => {
  const cards = document.querySelectorAll(".activity-card");
  const section = document.querySelector(".key-activities");
  const sectionTop = section.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (sectionTop < screenPosition) {
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 100);
    });
  }
};

// Set initial state
document.querySelectorAll(".activity-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "all 0.6s ease";
});

// Run on load and scroll
window.addEventListener("load", animateActivities);
window.addEventListener("scroll", animateActivities);

// Load Lottie Animation
const contactAnimation = lottie.loadAnimation({
  container: document.getElementById("lottie-contact"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://assets1.lottiefiles.com/packages/lf20_1pxqjqps.json", // Replace with your preferred contact animation
});

// Animate contact section on scroll
const animateContactSection = () => {
  const section = document.querySelector(".contact-section");
  const card = document.querySelector(".contact-card");
  const lottieContainer = document.getElementById("lottie-contact");

  if (section.getBoundingClientRect().top < window.innerHeight - 100) {
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
    lottieContainer.style.opacity = "1";
    lottieContainer.style.transform = "translateY(0)";
  }
};

// Set initial state
document.querySelector(".contact-card").style.opacity = "0";
document.querySelector(".contact-card").style.transform = "translateY(30px)";
document.querySelector(".contact-card").style.transition = "all 0.6s ease";

document.getElementById("lottie-contact").style.opacity = "0";
document.getElementById("lottie-contact").style.transform = "translateY(30px)";
document.getElementById("lottie-contact").style.transition =
  "all 0.6s ease 0.2s";

// Run on load and scroll
window.addEventListener("load", animateContactSection);
window.addEventListener("scroll", animateContactSection);
