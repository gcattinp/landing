window.onload = function() {
  const banner = document.querySelector('.banner');
  const popup = document.querySelector('.banner-pop');
  const headerBanner = document.querySelector('.header');
  const headerPopup = document.querySelector('.header-pop');
  const closeBannerButton = document.querySelector('#closeBannerBtn');
  const closePopupButton = document.querySelector('#closePopupBtn');
  const showPopUp = document.querySelector('#projects-folder')
  const popupContainer = document.querySelector('#popupContainer')

  let mouseDown = false;
  let startX, startY, initialLeft, initialTop;
  let currentDragFunction = null;
  let isPopupVisible = false;

  const calculatePosition = (elem) => (e) => {
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    elem.style.left = `${dx + initialLeft}px`;
    elem.style.top = `${dy + initialTop}px`;
  };

  // For the main banner
  headerBanner.addEventListener('mousedown', (e) => {
    mouseDown = true;
    startX = e.clientX;
    startY = e.clientY;
    initialLeft = banner.offsetLeft;
    initialTop = banner.offsetTop;
    currentDragFunction = calculatePosition(banner); // Store reference to function
    window.addEventListener('mousemove', currentDragFunction);
  });

  // For the popup
  headerPopup.addEventListener('mousedown', (e) => {
    mouseDown = true;
    startX = e.clientX;
    startY = e.clientY;
    initialLeft = popup.offsetLeft;
    initialTop = popup.offsetTop;
    currentDragFunction = calculatePosition(popup); // Store reference to function
    window.addEventListener('mousemove', currentDragFunction);
  });

  window.addEventListener('mouseup', () => {
    mouseDown = false;
    if (currentDragFunction) {
        window.removeEventListener('mousemove', currentDragFunction); // Remove the current dragging function
        currentDragFunction = null; // Reset the function reference
    }
  });

  showPopUp.addEventListener('click', () => {
    if (!isPopupVisible) {
      event.stopPropagation();
      popupContainer.style.display = "block";
      popup.style.display = "block";
    } else {
      popupContainer.style.display = "none";
    }
    isPopupVisible = !isPopupVisible; // Toggle the state
  });

  popupContainer.addEventListener('click', (event) => {
    event.stopPropagation();
  });
  
  closeBannerButton.addEventListener('click', () => {
    document.querySelector(".banner").style.display = "none";
  });

  closePopupButton.addEventListener('click', () => {
    document.querySelector(".banner-pop").style.display = "none";
  });
};
