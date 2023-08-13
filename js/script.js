window.onload = function() {
  const banner = document.querySelector('.banner');
  const headerBanner = document.querySelector('.header');

  const popup = document.querySelector('.banner-pop');
  const headerPopup = document.querySelector('.header-pop');
  const closeBannerButton = document.querySelector('#closeBannerBtn');
  const closePopupButton = document.querySelector('#closePopupBtn');
  const showPopUp = document.querySelector('#projects-folder')
  const popupContainer = document.querySelector('#popupContainer')

  const bannerJpeg = document.querySelector('.banner-jpegs');
  const headerJpeg = document.querySelector('.header-jpegs');
  const jpegsFolder = document.querySelector('#jpegs-folder');
  const jpegsContainer = document.querySelector('#jpegContainer');
  const closeJpegsButton = document.querySelector('#closeJpegBtn');

  const bannerRemilia = document.querySelector('.banner-nfts');
  const headerRemilia = document.querySelector('.header-nfts');
  const remiliaFolder = document.querySelector('#remilia-folder');
  const remiliaNftsContainer = document.querySelector('#remiliaNftsContainer');
  const closeRemiliaNftsButton = document.querySelector('#closeRemiliaNftsBtn');



  let mouseDown = false;
  let startX, startY, initialLeft, initialTop;
  let currentDragFunction = null;
  let isPopupVisible = false;
  let isJpegsVisible = false;
  let isRemiliaNftsVisible = false;


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

  // For jpegs folder

  headerJpeg.addEventListener('mousedown', (e) => {
    mouseDown = true;
    startX = e.clientX;
    startY = e.clientY;
    initialLeft = bannerJpeg.offsetLeft;
    initialTop = bannerJpeg.offsetTop;
    currentDragFunction = calculatePosition(bannerJpeg); // Store reference to function
    window.addEventListener('mousemove', currentDragFunction);
  });

  window.addEventListener('mouseup', () => {
    mouseDown = false;
    if (currentDragFunction) {
        window.removeEventListener('mousemove', currentDragFunction); // Remove the current dragging function
        currentDragFunction = null; // Reset the function reference
    }
  });

  jpegsFolder.addEventListener('click', () => {
    if (!isJpegsVisible) {
      event.stopPropagation();
      jpegsContainer.style.display = "block";
    } else {
      jpegsContainer.style.display = "none";
    }
    isJpegsVisible = !isJpegsVisible;
  });


  closeJpegsButton.addEventListener('click', () => {
    jpegsContainer.style.display = "none";
    isJpegsVisible = false;
  });

  // For Remilia popup

  headerRemilia.addEventListener('mousedown', (e) => {
    mouseDown = true;
    startX = e.clientX;
    startY = e.clientY;
    initialLeft = bannerRemilia.offsetLeft;
    initialTop = bannerRemilia.offsetTop;
    currentDragFunction = calculatePosition(bannerRemilia); // Store reference to function
    window.addEventListener('mousemove', currentDragFunction);
  });

  window.addEventListener('mouseup', () => {
    mouseDown = false;
    if (currentDragFunction) {
        window.removeEventListener('mousemove', currentDragFunction); // Remove the current dragging function
        currentDragFunction = null; // Reset the function reference
    }
  });

  remiliaFolder.addEventListener('click', () => {
    if (!isRemiliaNftsVisible) {
      event.stopPropagation();
      remiliaNftsContainer.style.display = "block";
    } else {
      remiliaNftsContainer.style.display = "none";
    }
    isRemiliaNftsVisible = !isRemiliaNftsVisible; // Toggle the state
  });


  closeRemiliaNftsButton.addEventListener('click', () => {
    remiliaNftsContainer.style.display = "none";
    isRemiliaNftsVisible = false;
  });
};
