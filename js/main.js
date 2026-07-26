(function () {
  "use strict";

  var header = document.querySelector("[data-header]");
  var navToggle = document.querySelector("[data-nav-toggle]");
  var navLinks = document.querySelector("[data-nav-links]");
  var message = document.querySelector("[data-site-message]");
  var lightbox = document.querySelector("[data-lightbox]");
  var lightboxImage = document.querySelector("[data-lightbox-image]");
  var lightboxClose = document.querySelector("[data-lightbox-close]");
  var lastFocusedElement = null;

  function setMessage(text) {
    if (!message) {
      return;
    }
    message.textContent = text;
    window.clearTimeout(setMessage.timeout);
    setMessage.timeout = window.setTimeout(function () {
      message.textContent = "";
    }, 3500);
  }

  function setHeaderState() {
    if (!header) {
      return;
    }
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  }

  function closeMenu() {
    if (!navToggle || !navLinks || !header) {
      return;
    }
    navToggle.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("is-open");
    header.classList.remove("is-open");
  }

  function toggleMenu() {
    if (!navToggle || !navLinks || !header) {
      return;
    }
    var willOpen = navToggle.getAttribute("aria-expanded") !== "true";
    navToggle.setAttribute("aria-expanded", String(willOpen));
    navLinks.classList.toggle("is-open", willOpen);
    header.classList.toggle("is-open", willOpen);
  }

  function openLightbox(button) {
    if (!lightbox || !lightboxImage) {
      return;
    }
    lastFocusedElement = document.activeElement;
    lightboxImage.src = button.getAttribute("data-lightbox-src");
    lightboxImage.alt = button.getAttribute("data-lightbox-alt") || "";
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    if (lightboxClose) {
      lightboxClose.focus();
    }
  }

  function closeLightbox() {
    if (!lightbox) {
      return;
    }
    lightbox.hidden = true;
    document.body.style.overflow = "";
    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  }

  function updateActiveNav() {
    var links = Array.prototype.slice.call(document.querySelectorAll(".nav-links a[href^='#']"));
    var sections = links
      .map(function (link) {
        return document.querySelector(link.getAttribute("href"));
      })
      .filter(Boolean);
    var activeSection = sections[0];
    sections.forEach(function (section) {
      if (section.getBoundingClientRect().top <= 140) {
        activeSection = section;
      }
    });
    links.forEach(function (link) {
      link.classList.toggle("is-active", activeSection && link.getAttribute("href") === "#" + activeSection.id);
    });
  }

  setHeaderState();
  updateActiveNav();
  window.addEventListener("scroll", function () {
    setHeaderState();
    updateActiveNav();
  }, { passive: true });

  if (navToggle) {
    navToggle.addEventListener("click", toggleMenu);
  }

  document.querySelectorAll("a[href^='#']").forEach(function (link) {
    link.addEventListener("click", function () {
      closeMenu();
    });
  });

  document.querySelectorAll("[data-audio-placeholder]").forEach(function (button) {
    button.addEventListener("click", function () {
      setMessage("Audio sample coming soon.");
    });
  });

  document.querySelectorAll("[data-video-placeholder]").forEach(function (button) {
    button.addEventListener("click", function () {
      setMessage("Video coming soon.");
    });
  });

  document.querySelectorAll("[data-lightbox-src]").forEach(function (button) {
    button.addEventListener("click", function () {
      openLightbox(button);
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
      closeLightbox();
    }
  });

  var yearTarget = document.getElementById("current-year");
  if (yearTarget) {
    yearTarget.textContent = String(new Date().getFullYear());
  }

  var revealItems = document.querySelectorAll(".section-reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }
}());
