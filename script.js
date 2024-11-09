const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');   

});

new Swiper('.card-wrapper', {
    loop: true,
    //Space Between Cards
    spaceBetween: 50, 
  
    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true, 
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
  });

  // Set the maximum number of words you want to display
  const maxWords = 13;

  // Select all elements with the class 'card-title'
  const cardTitles = document.querySelectorAll('.card-title');

  // Loop through each 'card-title' element
  cardTitles.forEach((title) => {
    // Split the text content into an array of words
    const words = title.innerText.split(' ');

    // Check if the number of words exceeds the maximum limit
    if (words.length > maxWords) {
      // Limit the text content to the maximum number of words and add an ellipsis
      title.innerText = words.slice(0, maxWords).join(' ') + '...';
    }
  });


  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isInteresting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));

//Slider

window.addEventListener('DOMContentLoaded', (event) => {
  let currentSlide = 0;
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;

  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
  }, 5000); // Change every 5 seconds
  });

