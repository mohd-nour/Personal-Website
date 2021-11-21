/*==================== Hidden Menu ====================*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/*==================== Toggle/Close Navbar ====================*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  })
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  })
}

const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  navMenu.classList.remove("show-menu");
}

navLink.forEach(link => link.addEventListener("click", linkAction));

/*==================== Toggle/Close skills ====================*/

const skillsContent = document.querySelectorAll(".skills-content");
const skillsHeader = document.querySelectorAll(".skills-header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills-content skills-closed";
  }

  if (itemClass === "skills-content skills-closed") {
    this.parentNode.className = "skills-content skills-open";
  }
}

skillsHeader.forEach((element) => {
  element.addEventListener("click", toggleSkills);
});

/*==================== Qualification Tabs ====================*/

const tabs = document.querySelectorAll(".qualification-button");
const tabContents = document.querySelectorAll(".qualification-content");

function toggleContent() {
  if (this.classList.contains("education")) {
    document.querySelector("#education").className = "qualification-content qualification-active";
    document.querySelector("#work").className = "qualification-content qualification-inactive";
    document.querySelector("#educbtn").className = "qualification-button education btn-active";
    document.querySelector("#workbtn").className = "qualification-button work btn-inactive";
  } else if (this.classList.contains("work")) {
    document.querySelector("#work").className = "qualification-content qualification-active";
    document.querySelector("#education").className = "qualification-content qualification-inactive";
    document.querySelector("#workbtn").className = "qualification-button work btn-active";
    document.querySelector("#educbtn").className = "qualification-button education btn-inactive";
  }
}

tabs.forEach((tab) => {
  tab.addEventListener("click", toggleContent);
});

/*==================== Project Swiper ====================*/

let swiper = new Swiper(".projects-container", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== Active Link ====================*/
const sections = document.querySelectorAll('section')

window.addEventListener("scroll", scrollActive)

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  })
}
