const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

document.getElementById('reservation-form').addEventListener('submit', function(event) {
  event.preventDefault();

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let date = document.getElementById('date').value;
  let time = document.getElementById('time').value;
  let guests = document.getElementById('guests').value;

  let confirmationMessage = `
      <h2>Reservation Confirmed!</h2>
      <p>Thank you, ${name}.</p>
      <p>Your reservation for ${guests} guests on ${date} at ${time} has been confirmed.</p>
      <p>We will contact you at ${phone} or ${email} if we need further information.</p>
  `;

  let confirmationDiv = document.getElementById('confirmation');
  confirmationDiv.innerHTML = confirmationMessage;
  confirmationDiv.classList.remove('hidden');

  document.getElementById('reservation-form').reset();
});


ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".explore__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".explore__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".explore__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".explore__content .explore__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".chef__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".chef__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".chef__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".chef__list li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

function loginUser(event) {
  event.preventDefault();

  
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  
  var storedUsername = localStorage.getItem('username');
  var storedPassword = localStorage.getItem('password');

  
  if (username === storedUsername && password === storedPassword) {
      
      var welcomeModal = document.createElement('div');
      welcomeModal.classList.add('modal');
      welcomeModal.innerHTML = `
          <div class="modal-content">
              <span class="close">&times;</span>
              <h2>Welcome!</h2>
              <p>Welcome, ${username}!</p>
              <button onclick="closeWelcomeModal()">Close</button>
          </div>
      `;
      document.body.appendChild(welcomeModal);

      
      setTimeout(function() {
          window.location.href = 'index.html';
      }, 3000); 

  } else {
      alert('Invalid username or password. Please try again.');
  }
}

function registerUser(event) {
  event.preventDefault();
  
 
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);

 
  alert('Registration successful! Please login.');

  
  window.location.href = 'login.html';

}

function closeWelcomeModal() {
  var welcomeModal = document.querySelector('.modal');
  if (welcomeModal) {
      welcomeModal.remove();
  }
}


function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  // Get all elements with class="tab-content" and hide them
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tab-link" and remove the class "active"
  tablinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Open the first tab by default
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".tab-link").click();
  
});


