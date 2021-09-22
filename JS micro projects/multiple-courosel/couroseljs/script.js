(function () {
  var carouselContainer = document.querySelectorAll('.container');
  [].forEach.call(carouselContainer, function (carousel) {
    carouselize(carousel);
  });
})();


function carouselize(carousel) {


  var slide = carousel.querySelector('.slides');
  var nextBtn = carousel.querySelector('.next-btn');
  console.log(nextBtn);
  var prevBtn = carousel.querySelector('.prev-btn');


  var slides = carousel.querySelectorAll('.slide');
  var index = 1;


  var firstClone = slides[0].cloneNode(true);
  var lastClone = slides[slides.length - 1].cloneNode(true);

  firstClone.id = 'first-clone';
  lastClone.id = 'last-clone';

  slide.append(firstClone);
  slide.prepend(lastClone);
  var slideWidth=100;
 // var slideWidth = slides[index].clientWidth;

  console.log(slide.style.transform = `translateX(${-slideWidth * index}%)`);

  console.log(slides);



  var getSlides = () => carousel.querySelectorAll('.slide');

  slide.addEventListener('transitionend', () => {
    slides = getSlides();
    if (slides[index].id === firstClone.id) {
      slide.style.transition = 'none';
      index = 1;
      slide.style.transform = `translateX(${-slideWidth * index}%)`;
    }

    if (slides[index].id === lastClone.id) {
      slide.style.transition = 'none';
      index = slides.length - 2;
      slide.style.transform = `translateX(${-slideWidth * index}%)`;
    }
  });

  const moveToNextSlide = () => {
    slides = getSlides();
    if (index >= slides.length - 1) return;
    index++;
    slide.style.transition = '.5s ease-out';
    slide.style.transform = `translateX(${-slideWidth * index}%)`;
  };

  const moveToPreviousSlide = () => {
    if (index <= 0) return;
    index--;
    slide.style.transition = '.5s ease-out';
    slide.style.transform = `translateX(${-slideWidth * index}%)`;
  };


  nextBtn.addEventListener('click', moveToNextSlide);
  console.log(nextBtn);
  prevBtn.addEventListener('click', moveToPreviousSlide);

}
