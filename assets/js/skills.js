// Function to generate skill HTML
function generateSkill(skillIcon, skillName, proficiency) {
  return `
    <div class="progress">
      <div class="row">
        <div class="col-2">
          <span class="skill">${skillIcon}</span>
        </div>
        <div class="col-10">
          <div class="row">
            <i class="val">${proficiency}</i>
          </div>
          <div class="placeholder">
            <div aria-valuenow="${proficiency}" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
    </div>`;
}

function addAnimationOnScroll() {
  const elements = document.querySelectorAll('.skills-content .col-12');
  elements.forEach(element => {
    element.setAttribute('data-aos', 'fade-up');
  });
  const otherElements = document.querySelectorAll('.col-10 .row');
  otherElements.forEach(el => {
    el.classList.add('skills-percent');
  });
  const finalElements = document.querySelectorAll('.col-10 .placeholder div');
  finalElements.forEach (elem => {
    elem.setAttribute('role', 'progressbar');
    elem.classList.add('progress-bar');
  });
  const sadElements = document.querySelectorAll('.col-10 .placeholder');
  sadElements.forEach(elemen => {
    elemen.classList.add('progress-bar-wrap');
  })
}

// Array of skills data
const skillsData = [
  {
    icon: '<i class="devicon-css3-plain-wordmark tech-icon" data-text="CSS"></i>',
    name: "CSS",
    proficiency: "85",
  },
  {
    icon: '<i class="devicon-javascript-plain tech-icon" data-text="Javascript"></i>',
    name: "JavaScript",
    proficiency: "100",
  },
  // Add more skills here
];

// Insert skills HTML into the document
const skillsContainer = document.getElementById("skillsContent");
let skillsContentHtml = '<div class="col-12">';
skillsData.forEach((skill) => {
  skillsContentHtml += generateSkill(
    skill.icon,
    skill.name,
    skill.proficiency
  );
});
skillsContentHtml += '</div>';
skillsContainer.innerHTML += skillsContentHtml;
addAnimationOnScroll();

