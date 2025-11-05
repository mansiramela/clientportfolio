document.addEventListener("DOMContentLoaded", () => {
  // Highlight active menu item
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      navLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Keep correct page active even after reload or navigation
  const currentPage = window.location.pathname.split("/").pop();
  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});



// Sidebar Toggle Script
document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openSidebar");
  const closeBtn = document.getElementById("closeSidebar");
  const sidebar = document.getElementById("customSidebar");
  const overlay = document.getElementById("sidebarOverlay");
  const header = document.getElementById("mainHeader");

  // Open sidebar
  openBtn.addEventListener("click", () => {
    sidebar.classList.add("show");
    overlay.classList.add("show");
  });

  // Close sidebar
  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show");
    overlay.classList.remove("show");
  });

  // Click outside to close
  overlay.addEventListener("click", () => {
    sidebar.classList.remove("show");
    overlay.classList.remove("show");
  });

  // Header scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});

    
    // hero js

    const skills = [
      "Web Developer",
      "WordPress",
      "Shopify",
      "UI UX Design",
      "Laravel",
      "Figma",
      "Web Design",
      "Mobile Design",
      "Figma to HTML",
      "WooCommerce",
      "API Integration",
      "PHP",
      "React JS",
      "SEO",
      "Support & Maintenance",
    ];

    let skillIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;
    const typingElement = document.getElementById("typing-text");

    function typeSkill( ) {
      const current = skills[skillIndex];
      const speed = isDeleting ? 80 : 150;
      console.log(current); 

      typingElement.textContent = current.substring(0, letterIndex);

      if (!isDeleting && letterIndex < current.length) {
        letterIndex++;
      } else if (isDeleting && letterIndex > 0) {
        letterIndex--;
      } else if (!isDeleting && letterIndex === current.length) {
        isDeleting = true;
        setTimeout(typeSkill, 1200);
        return;
      } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        skillIndex = (skillIndex + 1) % skills.length;
      }

      setTimeout(typeSkill, speed);
    }

    typeSkill();

    function downloadCV() {
      const link = document.createElement("a");
      link.href = "/resume.pdf"; // Put your resume in public folder or server
      link.download = "Ashish-Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }



    // portfolio


  //     function scrollPortfolio(direction) {
  //   const scrollContainer = document.getElementById('portfolio-scroll');
  //   const cardWidth = 310; // Approx width of each card + gap
  //   scrollContainer.scrollBy({
  //     left: direction === 'left' ? -cardWidth : cardWidth,
  //     behavior: 'smooth'
  //   });
  // }


  // resume

  const skillss = [
    { name: "HTML5", level: 100 },
    { name: "CSS3", level: 100 },
    { name: "SASS", level: 70 },
    { name: "Tailwind CSS", level: 100 },
    { name: "Bootstrap", level: 70 },
    { name: "Git", level: 90 },
    { name: "JavaScript", level: 60 },
    { name: "Figma", level: 90 },
    { name: "Adobe Photoshop", level: 80 },
    { name: "Corel Draw", level: 90 },
  ];

  // Render Skills
  const skillsList = document.getElementById("skillsList");
  skillss.forEach(skill => {
    const col = document.createElement("div");
    col.className = "col-md-6";
    col.innerHTML = `
      <div class="fw-medium">${skill.name}</div>
      <div class="progress">
        <div class="progress-bar bg-danger" role="progressbar" style="width:0%;" data-level="${skill.level}">
          0%
        </div>
      </div>
    `;
    skillsList.appendChild(col);
  });

  // Tabs functionality
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // set active tab
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // show content
      const target = btn.getAttribute("data-target");
      tabPanes.forEach(pane => {
        pane.style.display = (pane.id === target) ? "block" : "none";
      });

      // Animate skills when opening skills tab
      if (target === "skills") {
        const bars = document.querySelectorAll("#skillsList .progress-bar");
        bars.forEach((bar, i) => {
          bar.style.width = "0%";
          bar.innerText = "0%";
          setTimeout(() => {
            const level = bar.getAttribute("data-level");
            bar.style.width = level + "%";
            bar.innerText = level + "%";
          }, i * 200);
        });
      }
    });
  });

  



// About us
// ========== Counter Animation Script ==========






  // contact us script

   document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Form submitted successfully! (You can connect backend here)");
  });


  // footer


   document.getElementById("year").textContent = new Date().getFullYear();