var tablinks = document.getElementsByClassName('tab-links');
    var tabcontents = document.getElementsByClassName('tab-contents');

    function opentab(tabname){
      for(tablink of tablinks){
        tablink.classList.remove('active-link');
      }
      for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
      }
      event.currentTarget.classList.add('active-link');
      document.getElementById(tabname).classList.add('active-tab');
    }

    var sidemenu = document.getElementById('sidemenu');

    function openmenu(){
      sidemenu.style.right = '0';
    }
    function openmenu(){
      sidemenu.style.right = '-200px';
    }

    // ======================================render=====================================



// Personal information
const name = "Mduduzi";
const surname = "Malapane";
const bio = "As an aspiring web developer, I bring a diverse skill set and a passion for technology.";
const educationalBackground = [
  { year: "2021", Certificate: "Data Engineering", institution: "Umuzi" },
  { year: "2019", Certificate: "Data Science", institution: "ExploreAI" },
  { year: "2014", Certificate: "IT", institution: "Boston City Campus" }
];
const contactInfo = {
  email: "mduduzimalapane596@gmail.com",
  phone: "+27710303767",
  socialMedia: {
    facebook: "",
    twitter: "https://twitter.com/MduduziKatlego",
    instagram: "https://www.instagram.com/mduduzikatlego/",
    linkedin: "https://www.linkedin.com/in/mduduzi-malapane-a1ba62b5/"
  }
};

// Projects
const projects = [
  {
    title: "Data Projects",
    description: "Data related projects",
    image: "images/Data_work.PNG",
    link: "https://github.com/mduduzimalapane/Data-Analysis"
  },
  
];

// Function to render personal information
function renderPersonalInfo() {
  document.getElementById("header-title").innerText = `Hi, I'm ${name} ${surname}`;
  document.querySelector(".header-text p").innerText = bio;
}

// Function to render educational background
function renderEducation() {
  const educationList = document.getElementById("education");
  educationalBackground.forEach(education => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<span>${education.year}</span><br>${education.degree} at ${education.institution}`;
    educationList.appendChild(listItem);
  });
}

// Function to render contact information
function renderContactInfo() {
  document.querySelector(".contact-left p:nth-of-type(1)").innerHTML = `<i class="fas fa-paper-plane"></i> ${contactInfo.email}`;
  document.querySelector(".contact-left p:nth-of-type(2)").innerHTML = `<i class="fas fa-phone-square-alt"></i> ${contactInfo.phone}`;
  const socialIcons = document.querySelector(".social-icons");
  for (const [platform, link] of Object.entries(contactInfo.socialMedia)) {
    if (link) {
      const icon = document.createElement("a");
      icon.href = link;
      icon.innerHTML = `<i class="fab fa-${platform}"></i>`;
      socialIcons.appendChild(icon);
    }
  }
}

// Function to render projects
function renderProjects() {
  const portfolioSection = document.getElementById("portfolio");
  const workList = document.querySelector(".work-list");
  projects.forEach(project => {
    const work = document.createElement("div");
    work.className = "work";
    work.innerHTML = `
      <img src="${project.image}">
      <div class="layer">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
      </div>`;
    workList.appendChild(work);
  });
}

// Call functions to render content
renderPersonalInfo();
renderEducation();
renderContactInfo();
renderProjects();
