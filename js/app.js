const header = document.querySelector("header");

const prt_section = document.querySelector(".portfolio");
const zoom_icons = document.querySelectorAll(".zoom-icon");
const modal_overlay = document.querySelector(".modal-overlay");
const images = document.querySelectorAll(".images img");
const prev_btn = document.querySelector(".prev-btn");
const next_btn = document.querySelector(".next-btn");

const links = document.querySelectorAll(".nav-link");

const toggle_btn = document.querySelector(".toggle-btn");

const hamburger = document.querySelector(".hamburger");

const body = document.querySelector("body");

window.addEventListener("scroll", () => {
  activeLink();
});

/* --------------- Grab elements from DOM --------------- */

/* ---------------  stop scrolling --------------- */

// portfolioImg.addEventListener("click", function () {
//   document.body.classList.add("stopScrolling");
// });

/* --------------- Sticky Navbar --------------- */

function stickyNavbar() {
  header.classList.toggle("scrolled", window.pageYOffset > 0);
}

window.addEventListener("scroll", stickyNavbar);

/* --------------- Reveal Animation --------------- */

// ScrollReveal({ reset: true });

// let sr = ScrollReveal({
//   duration: 2500,
//   distance: "60px",
// });

// sr.reveal(".showcase-info", { delay: 600 });
// sr.reveal(".showcase-image", { origin: "top", delay: 700 });
// sr.reveal(".about", { origin: "top", delay: 400 });
// sr.reveal(".portfolio", { origin: "top", delay: 300 });
// sr.reveal(".contact", { origin: "top", delay: 250 });
// sr.reveal(".term", { origin: "top", delay: 250 });

/* --------------- Portfolio Filter Animation --------------- */

let mixer = mixitup(".portfolio-galery", {
  selectors: {
    target: ".prt-card",
  },
  animation: {
    duration: 500,
  },
});

/* --------------- Change Active Link On Scroll --------------- */

function activeLink() {
  let sections = document.querySelectorAll("section[id");
  let passedSections = Array.from(sections)
    .map((sct, i) => {
      return {
        y: sct.getBoundingClientRect().top - header.offsetHeight,
        id: i,
      };
    })
    .filter((sct) => sct.y <= 0);

  let currSectionID = passedSections.at(-1).id;

  links.forEach((l) => l.classList.remove("active"));
  links[currSectionID].classList.add("active");
}

/* --------------- Change Page Theme --------------- */

let firstTheme = localStorage.getItem("dark");

changeTheme(+firstTheme);

function changeTheme(isDark) {
  if (isDark) {
    document.body.classList.add("dark");
    toggle_btn.classList.replace("uil-moon", "uil-sun");
    localStorage.setItem("dark", 1);
  } else {
    document.body.classList.remove("dark");
    toggle_btn.classList.replace("uil-sun", "uil-moon");
    localStorage.setItem("dark", 0);
  }
}

toggle_btn.addEventListener("click", () => {
  changeTheme(!document.body.classList.contains("dark"));
});

/* --------------- preloader --------------- */
// var loader = document.getElementById("preloader");

// window.addEventListener("load", function () {
//   loader.style.opacity = 1;

//   (function fade() {
//     if ((loader.style.opacity -= 0.1) < 0) {
//       loader.style.display = "none";
//     } else {
//       requestAnimationFrame(fade);
//     }
//   })();
// });

/* --------------- Open & Close Navbar Menu --------------- */

hamburger.addEventListener("click", () => {
  document.body.classList.toggle("open");
  if (body.classList.contains("open")) {
    // Menambahkan class "stopScrolling" saat toggle dibuka
    body.classList.add("stopScrolling");
  } else {
    // Menghapus class "stopScrolling" saat toggle ditutup
    body.classList.remove("stopScrolling");
  }
});

links.forEach((link) =>
  link.addEventListener("click", () => {
    document.body.classList.remove("open");
    document.body.classList.remove("stopScrolling");
  })
);

//preloader
document.addEventListener("DOMContentLoaded", function () {
  var preloader = document.getElementById("preloader");
  var images = document.getElementsByTagName("img");
  var imagesTotal = images.length;
  var imagesLoaded = 0;

  function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded === imagesTotal) {
      document.body.removeChild(preloader);
      document.body.classList.remove("stopScrolling");

      ScrollReveal({ reset: true });

      let sr = ScrollReveal({
        duration: 2500,
        distance: "60px",
      });

      sr.reveal(".showcase-info", { delay: 600 });
      sr.reveal(".showcase-image", { origin: "top", delay: 700 });
      // sr.reveal(".about", { origin: "top", delay: 400 });
      sr.reveal(".portfolio", { origin: "top", delay: 300 });
      // sr.reveal(".contact", { origin: "top", delay: 250 });
      // sr.reveal(".term", { origin: "top", delay: 250 });
    }
  }

  document.body.classList.add("stopScrolling");

  for (var i = 0; i < imagesTotal; i++) {
    if (images[i].complete) {
      imageLoaded();
    } else {
      images[i].addEventListener("load", imageLoaded);
    }
  }
});

//tes email
function SendEmail() {
  // Form
  let form = document.getElementById("FORM");

  if (Checkform(form)) {
    // Email sent confirmation animation
    let emailSent = document.querySelector(".email-not-sent");
    emailSent.classList.add("email-sent");

    // Send form
    form.action = "https://formsubmit.co/iyunkmaulana81@gmail.com";
    form.method = "POST";
    form.submit();

    //
    function SendEmailComplete() {
      emailSent.classList.remove("email-sent");
    }

    setTimeout(SendEmailComplete, 5000);
    form.reset();
  }
}
