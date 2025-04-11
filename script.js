document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeModal = document.getElementById('closeModal');
    const nextBtn = document.getElementById('nextImage');
    const prevBtn = document.getElementById('prevImage');
    const images = document.querySelectorAll('[data-carousel-item] img');
    let currentIndex = 0;

    function openModal(index) {
      currentIndex = index;
      modalImg.src = images[currentIndex].src;
      modal.classList.remove('hidden');
    }

    function showNextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      modalImg.src = images[currentIndex].src;
    }

    function showPrevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      modalImg.src = images[currentIndex].src;
    }

    images.forEach((img, index) => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => openModal(index));
    });

    closeModal.addEventListener('click', () => modal.classList.add('hidden'));
    nextBtn.addEventListener('click', showNextImage);
    prevBtn.addEventListener('click', showPrevImage);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });

    document.addEventListener('keydown', (e) => {
      if (!modal.classList.contains('hidden')) {
        if (e.key === 'ArrowRight') showNextImage();
        if (e.key === 'ArrowLeft') showPrevImage();
        if (e.key === 'Escape') modal.classList.add('hidden');
      }
    });
  });