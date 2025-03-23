let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
const totalSlides = slides.length;

function showSlide(index) {
  slidesContainer.style.transform = `translateX(${-index * 25}%)`;
}

document.querySelector('.next').addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide(slideIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  showSlide(slideIndex);
});

const modal = document.getElementById('myModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const closeBtn = document.querySelector('.close');


slides.forEach((slide) => {
  slide.addEventListener('click', (event) => {

    if (event.target.classList.contains('prev') || event.target.classList.contains('next')) {
      return;
    }

    const img = slide.querySelector('img');
    const title = slide.querySelector('h2');
    const text = slide.querySelector('p');

    modalImage.src = img.src;
    modalTitle.textContent = title ? title.textContent : "";
    modalText.textContent = text ? text.textContent : "";

    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
