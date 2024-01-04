function scrollAbout() {
    const about = document.querySelector(".about");
    about.scrollIntoView();
}


function scrollTechStack() {
    const techStack = document.querySelector(".tech-stack");
    techStack.scrollIntoView();
}


function scrollProjects() {
    const projects = document.querySelector(".projects");
    projects.scrollIntoView();
}



function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 5;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  