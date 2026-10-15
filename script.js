const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
document.querySelectorAll('.gallery-card').forEach((card) => {
  card.addEventListener('click', () => {
    lightboxImage.src = card.dataset.image;
    lightbox.showModal();
  });
});
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox || event.target.closest('.close-lightbox')) lightbox.close();
});
