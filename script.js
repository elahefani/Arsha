const swipList = document.querySelector(".client-section__swiper");
let imgContainers = document.querySelectorAll(".client-section__img-container");
let imgContainerWidth = imgContainers[0].offsetWidth;
let currentIndex = 0;


const h3Elements = document.querySelectorAll('.wideDown__h3');


const listItems = document.querySelectorAll('.portfolio-section__item');

document.addEventListener('DOMContentLoaded', function() {
    new Swiper('.swiper-container', {
      spaceBetween: 50,
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      speed : 1000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });


listItems.forEach(item => {
    item.addEventListener('click', function () {
        const activeItem = document.querySelector('.portfolio-section__item--active');
        
        
        if (activeItem) {
            activeItem.classList.remove('portfolio-section__item--active');
        }

        
        this.classList.add('portfolio-section__item--active');
    });
});



h3Elements.forEach(h3 => {
    
    h3.addEventListener('click', function () {
        
        const targetId = h3.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        
        const svgElement = h3.nextElementSibling;

        
        if (targetElement.style.maxHeight === '0px' || targetElement.style.maxHeight === '') {
            
            targetElement.style.maxHeight = targetElement.scrollHeight + 'px';

            
            h3.classList.add('h3-active');

            
            if (svgElement) {
                svgElement.classList.remove('svg-inactive');
                svgElement.classList.add('svg-active');
            }
        } else {
            
            targetElement.style.maxHeight = '0px'; 

            
            h3.classList.remove('h3-active');

            
            if (svgElement) {
                svgElement.classList.remove('svg-active');
                svgElement.classList.add('svg-inactive');
            }
        }
    });
});





function swipper() {

    swipList.style.transition = 'transform 1s ease-in-out';
    swipList.style.transform = `translateX(${-imgContainerWidth}px)`;

    
    setTimeout(() => {
        
        swipList.style.transition = 'none';
        swipList.appendChild(swipList.firstElementChild);
        swipList.style.transform = 'translateX(0)';

        
        imgContainers = document.querySelectorAll(".client-section__img-container");
    }, 1000);
}

setInterval(swipper, 5000);
