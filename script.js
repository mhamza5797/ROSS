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
  


  const selectedOption = document.querySelector('#selectedOption');
  const calcNow = document.querySelector('#clacNow');
  const showTotal = document.querySelector('#showTotal');

  selectedOption.addEventListener('change', () => {
    
    calcNow.onclick = () => {
      if (selectedOption.value === 'Cleaning') {
        
        const regRooms = parseInt(document.querySelector('#selectRooms').value || 0);
        const bathRooms = parseInt(document.querySelector('#selectBathrooms').value || 0);
        const addSqft = parseInt(document.querySelector('#selectSqft').value || 0);

        const fridgePrice = document.querySelector('#frideInput').checked ? 100 : 0;
        const microwavePrice = document.querySelector('#microwaveInput').checked ? 50 : 0;
        const ovenPrice = document.querySelector('#ovenInput').checked ? 200 : 0;

        const basePrice = 1500;
        const totalRooms = regRooms * 50;
        const totalBathRooms = bathRooms * 90;
        const totalSqft = addSqft * 1.50;

        const totalPrice = basePrice + totalRooms + totalBathRooms + totalSqft + fridgePrice + microwavePrice + ovenPrice;

        showTotal.innerHTML = '';
        showTotal.append(`$${totalPrice.toFixed(2)}`);
      }else if(selectedOption.value === 'Painting'){
        const regRooms = parseInt(document.querySelector('#selectRooms').value || 0);
        const bathRooms = parseInt(document.querySelector('#selectBathrooms').value || 0);
        const addSqft = parseInt(document.querySelector('#selectSqft').value || 0);

        const fridgePrice = document.querySelector('#frideInput').checked ? 100 : 0;
        const microwavePrice = document.querySelector('#microwaveInput').checked ? 50 : 0;
        const ovenPrice = document.querySelector('#ovenInput').checked ? 200 : 0;

        const basePrice = 2000;
        const totalRooms = regRooms * 150;
        const totalBathRooms = bathRooms * 250;
        const totalSqft = addSqft * 3.50;

        const totalPrice = basePrice + totalRooms + totalBathRooms + totalSqft + fridgePrice + microwavePrice + ovenPrice;

        showTotal.innerHTML = '';
        showTotal.append(`$${totalPrice.toFixed(2)}`);
      }else {
        showTotal.innerHTML = '';
        showTotal.append('Please select a service.');
      }
    };

  });
   


  
  
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    },
  });

});