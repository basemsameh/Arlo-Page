// Start Up Page
let startUpPage = document.querySelector('.start-up-page');
// Cursor Movement
let cursorMove = document.querySelector('.cursor-move');
let cursorShape = document.querySelectorAll('.shapes .cursor');
// Navbar 
let navbar = document.querySelector('.navbar');
let logoHome = document.querySelector('[alt="Home-Logo"]');
let navLinks = document.querySelectorAll('.nav-link');
// Colors of page
let btnColors = document.querySelector('.btn-colors');
let colors = document.querySelectorAll('.color');
let eleColor = document.querySelectorAll('.change-color');
// Auto Writing
let complete = document.querySelector('.typing');
let aboutTyping = document.querySelector('.about-typing');
// Portfolio
let listPortfolio = document.querySelectorAll('.list-portfolio li a');
let imgsPortfolio = document.querySelectorAll('.portfolio-imgs figure');
let layerPortfolio = document.querySelectorAll('.portfolio-imgs figure .layer');
// Counter
let count = document.querySelectorAll('.count h2');
let started = false;


// Start Up Page -- WHen Open the Page
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
    startUpPage.style.setProperty('--display-start-up-page', 'none');
    startUpPage.style.height = '100vh';
  }, 2000);
}).then(() => {
  setTimeout(() => {
    if (startUpPage.style.height === '100vh') {
      startUpPage.style.display = 'none';
      document.querySelector('.container-start').style.display = 'block';
      document.body.classList.remove('dark');
    }
  }, 350);
})


// Auto Writing in Home
let typed = new Typed('.home-typing', {
  strings: ['Web Developer', 'Freelancer', 'Photographer'],
  typeSpeed: 100,
  loop: true
});

// Auto Writing in About
let aboutWriting = new Typed('.about-typing', {
  strings: ['Web Developer', 'Freelancer', 'Photographer'],
  typeSpeed: 80,
  loop: true
});

// Cursor Movement
addEventListener('mousemove', function (e) {
  if (cursorMove.classList.contains('active')) {
    cursorMove.style.top = `${e.y - 35}px`;
    cursorMove.style.left = `${e.x - 35}px`;
  }
  else {
    cursorMove.style.top = `${e.y}px`;
    cursorMove.style.left = `${e.x}px`;
  }
});

// Make cursor large when hover on an element that have cursor pointer
document.addEventListener('mouseover', function (e) {
  if (window.getComputedStyle(e.target).cursor === 'pointer') {
    cursorMove.classList.add('active');
  } else {
    cursorMove.classList.remove('active');
  }
})

// Control on the shape of cursor
cursorShape.forEach(e => {
  e.onclick = () => {
    cursorShape.forEach(ele => { ele.classList.add('hide') });
    e.classList.remove('hide');
    if (e === cursorShape[0]) {
      cursorMove.style.display = 'block';
    } else {
      cursorMove.style.display = 'none';
    }
  }
})

// Hide circle cursor & apper it according to width of screen
window.onresize = () => {
  if (window.innerWidth >= 1024) {
    cursorMove.style.display = 'none';
  } else {
    cursorMove.style.display = 'block';
  }
}

// Increasing number of counter
function counter(ele) {
  let goal = ele.getAttribute('data-goal');
  let count = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == goal) {
      clearInterval(count);
    }
  }, 500 / goal);
}

window.onscroll = () => {
  // When scrolled to counter area
  if (window.scrollY >= document.querySelector('.counter').offsetTop - 300) {
    if (!started) {
      count.forEach((num) => counter(num));
    }
    started = true;
  }
  // Changing navbar backgroundColor and Source of logo image when scroll
  if (window.scrollY >= 100) {
    navbar.classList.add('active');
    document.querySelector('.navbar-toggler').classList.add('active')
    logoHome.src = 'images/dark.png';
    check();
  }
  else {
    document.querySelector('.navbar-toggler').classList.remove('active')
    navbar.classList.remove('active');
    logoHome.src = 'images/light.png';
    check();
  }
}

// Give active to nav link that scrolled to its area
function check() {
  if (window.scrollY >= 0) {
    navLinks.forEach(ele => { ele.classList.remove('active') });
    navLinks[0].classList.add('active');
  }
  if (window.scrollY >= 700) {
    navLinks.forEach(ele => { ele.classList.remove('active') });
    navLinks[1].classList.add('active');
  }
  if (window.scrollY >= 1700) {
    navLinks.forEach(ele => { ele.classList.remove('active') });
    navLinks[2].classList.add('active');
  }
  if (window.scrollY >= 3100) {
    navLinks.forEach(ele => { ele.classList.remove('active') });
    navLinks[3].classList.add('active');
  }
  if (window.scrollY >= 4700) {
    navLinks.forEach(ele => { ele.classList.remove('active') });
    navLinks[4].classList.add('active');
  }
  if (window.scrollY >= 5700) {
    navLinks.forEach(ele => { ele.classList.remove('active') });
    navLinks[5].classList.add('active');
  }
}

// When click on navbar link 
navLinks.forEach(e => {
  e.onclick = () => {
    navLinks.forEach(ele => { ele.classList.remove('active') });
    e.classList.add('active');
  }
})

// Click on Button that show colors of page
btnColors.onclick = () => {
  if (btnColors.classList.contains('active')) {
    btnColors.classList.remove('active');
    document.querySelector('.page-colors').classList.remove('show');
  } else {
    btnColors.classList.add('active');
    document.querySelector('.page-colors').classList.add('show');
  }
}

// Click on a specific color that will change colors of some elements
colors.forEach(e => {
  e.onclick = () => {
    cursorMove.style.setProperty('--color', `${e.getAttribute('data-value')}`);
    eleColor.forEach(ele => {
      ele.style.setProperty('--color', `${e.getAttribute('data-value')}`);
    });
  }
})

// When click on anchor item of portfolio list
listPortfolio.forEach(e => {
  e.onclick = () => {
    listPortfolio.forEach(ele => {
      ele.classList.remove('active');
    })
    e.classList.add('active');
    if (e.textContent !== 'All') {
      for (let img of imgsPortfolio) {
        document.querySelector('.portfolio-imgs').classList.add('small');
        if (img.getAttribute('data-value') === e.textContent) {
          img.classList.remove('hide');
        } else {
          img.classList.add('hide');
        }
      }
    } else {
      imgsPortfolio.forEach(e => { e.classList.remove('hide') });
      document.querySelector('.portfolio-imgs').classList.remove('small');
    }
  }
})

// When hover on figures of Portfolio section
imgsPortfolio.forEach((figure, index) => {
  figure.addEventListener('mouseover', function () {
    addEventListener('mousemove', ele => {
      layerPortfolio[index].style.top = `${ele.y + 45}px`;
      layerPortfolio[index].style.left = `${ele.x + 45}px`;
    })
  })
})