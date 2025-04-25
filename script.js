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
  let calcNow = document.querySelector('#clacNow');
  let showTotal = document.querySelector('#showTotal');

  selectedOption.addEventListener('change', () => {
    
    calcNow.onclick = () => {
      if (selectedOption.value === 'Cleaning') {
        
      let regRooms = parseInt(document.querySelector('#selectRooms').value || 0);
      let bathRooms = parseInt(document.querySelector('#selectBathrooms').value || 0);
      let addSqft = parseInt(document.querySelector('#selectSqft').value || 0);

      const fridgePrice = document.querySelector('#frideInput').checked ? 25 : 0;
      const microwavePrice = document.querySelector('#microwaveInput').checked ? 55 : 0;
      const ovenPrice = document.querySelector('#ovenInput').checked ? 25 : 0;

      const basePrice = 200;
      let perRoomRate = 0;
      let flatRate = 0;

      if (addSqft <= 425) {
        flatRate = 60;         
        perRoomRate = 55;
      } else if (addSqft >= 425 && addSqft <= 545) {
        flatRate = 180;
        perRoomRate = 60;
      } else if (addSqft > 545 && addSqft <= 725) {
        flatRate = 540;
        perRoomRate = 65;
      } else {
        flatRate = 720;
        perRoomRate = 70;
      }

      const totalRoomCost = regRooms * perRoomRate;
      const totalBathCost = bathRooms * 7.99;
      const totalAddOns = fridgePrice + microwavePrice + ovenPrice;

      const totalPrice = flatRate + totalBathCost + totalAddOns + totalRoomCost + basePrice;

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

  (function () {
    emailjs.init({
      publicKey: "su-hnKG1xLGLM9OFi", 
    });
  })();


  const sendMassage = () => {
    const rawTime = document.querySelector("#time").value;
  
    const convertTimeTo12Hour = (time24) => {
      const [hour, minute] = time24.split(":").map(Number);
      const ampm = hour >= 12 ? "PM" : "AM";
      const hour12 = hour % 12 || 12;
      return `${hour12}:${minute.toString().padStart(2, '0')} ${ampm}`;
    };
  
    const formattedTime = convertTimeTo12Hour(rawTime);
  
    const params = {
      fname: document.querySelector("#fName").value,
      lName: document.querySelector("#lName").value,
      email: document.querySelector("#email").value,
      date: document.querySelector("#date").value,
      time: formattedTime,
      consultation: document.querySelector("#consultation").value
    };
  
    const serviceID = "service_572uf3z";
    const userTemplateID = "template_0a6xjl3";
    const adminTemplateID = "template_o9362po";
  
    emailjs.send(serviceID, userTemplateID, params)
      .then((res) => {
        console.log("User confirmation sent:", res);
        return emailjs.send(serviceID, adminTemplateID, params);
      })
      .then((res) => {
        console.log("Admin notification sent:", res);
  
        document.querySelector("#fName").value = '';
        document.querySelector("#lName").value = '';
        document.querySelector("#email").value = '';
        document.querySelector("#date").value = '';
        document.querySelector("#time").value = '';
        document.querySelector("#consultation").value = '';
  
        alert("Message sent successfully!");
      })
      .catch((err) => {
        console.error("Error sending email:", err);
        alert("Something went wrong. Please try again later.");
      });
  };


const bookbtn = document.querySelector('#bookNow');

bookbtn.addEventListener('click', function(){
  sendMassage();

})

  
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