window.onload = function() {
  const banner = document.querySelector('.banner');
  const header = document.querySelector('.header');

  let mouseDown = false;
  let startX, startY, initialLeft, initialTop;

  const calculatePosition = (e) => {
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    banner.style.left = `${dx + initialLeft}px`;
    banner.style.top = `${dy + initialTop}px`;
  };

  header.addEventListener('mousedown', (e) => {
    mouseDown = true;
    startX = e.clientX;
    startY = e.clientY;
    initialLeft = banner.offsetLeft;
    initialTop = banner.offsetTop;
    window.addEventListener('mousemove', calculatePosition);
  });

  window.addEventListener('mouseup', () => {
    mouseDown = false;
    window.removeEventListener('mousemove', calculatePosition);
  });
};
