/*--------------------------------toggle icon navbar---------------------------------*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle(fa - x);
  navbar.classList.toggle('active')
}

/*--------------------------------scroll section active link---------------------------------*/

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header new  a');

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = setoffsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach.apply(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });

  /*--------------------------------sticky navbar---------------------------------*/
  let header = documnet.querySelector('header');
  header.classList.toggle('sticky', window.scrolly > 100);

  /*-------------------------------- remove toggle icon and navbar---------------------------------*/

  menuIcon.classList.remove('fa-x');
  navbar.classList.remove('active');

};

/*-------------------------------- scroll revel --------------------------------*/

ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-container,headling', { origin: 'top' });
ScrollReveal().reveal('.home-img .skills-container, .project-box, .contact form', { origin: 'button' });
ScrollReveal().reveal('.home-container h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-container p, .about-content', { origin: 'right' });
ScrollReveal().reveal('.skills-container i, .skils-percentage', { origin: 'right' });


/*-------------------------------- typed js --------------------------------*/
const typed = new Typed('.multiple-text', {
  strings: ['Computer Application Student', 'Fresher'],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

/*-------------------------------- Email js --------------------------------*/


emailjs.init('IgJUTI7M001WGwS_k'); 

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  emailjs.sendForm('service_lpp2foe', 'template_ijg83p5', this)
    .then(function (response) {
      alert('Message sent successfully!');
      console.log('SUCCESS:', response);
    }, function (error) {
      alert('Failed to send message.');
      console.log('ERROR:', error);
    });
});


