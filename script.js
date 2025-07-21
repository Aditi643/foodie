

var swiper = new Swiper(".swiper", { 
    slidesPerView: 3, 
    spaceBetween: 15, 
    loop: true,
    grabCursor: true,
    centeredSlides: false,
    
    navigation: {
        nextEl: ".custom-swiper-button-next",
        prevEl: ".custom-swiper-button-prev",
    },

    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
});




document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video');
    const playButton = document.getElementById('play-button');
  
    // Update the play button based on the video's state
    function updatePlayButton() {
      if (video.paused) {
        playButton.style.display = 'block';
      } else {
        playButton.style.display = 'none';
      }
    }
  
    // Event listener for the play/pause button
    playButton.addEventListener('click', function() {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
      updatePlayButton();
    });
  
    // Event listeners for the video element
    video.addEventListener('play', updatePlayButton);
    video.addEventListener('pause', updatePlayButton);
  
    // // Initialize the play button state
    updatePlayButton();
  });
  
  


document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;

    function setupModal(openBtnSelector, modalSelector, closeBtnSelectors) {
        const modal = document.querySelector(modalSelector);
        const openModalBtn = document.querySelector(openBtnSelector);
        const closeModalBtns = document.querySelectorAll(closeBtnSelectors);

        if (!modal || !openModalBtn || closeModalBtns.length === 0) return;

        // Open modal and disable scrolling
        openModalBtn.addEventListener("click", function (event) {
            event.preventDefault();
            modal.style.display = "flex";
            body.classList.add("no-scroll");
        });

        // Close modal when clicking any close button (Cancel or Submit)
        closeModalBtns.forEach(btn => {
            btn.addEventListener("click", function () {
                modal.style.display = "none";
                body.classList.remove("no-scroll");
            });
        });

        // Close modal if clicked outside modal content
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
                body.classList.remove("no-scroll");
            }
        });
    }

    // Apply modal functionality for "Request a Dish" modal
    setupModal(".btn", "#dishRequestPopup", "#closePopup, #submitPopup");

    // Apply modal functionality for "Cart Modal"
    setupModal(".cart-icon", "#cartModal", "#closeModal");
});
