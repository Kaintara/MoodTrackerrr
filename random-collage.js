// Randomly position collage images around the title block
window.addEventListener('DOMContentLoaded', () => {
  const collage = document.querySelector('.collage');
  const titleBlock = document.querySelector('.title-block');
  const images = collage.querySelectorAll('img');

  // Get collage and title block dimensions
  const collageRect = collage.getBoundingClientRect();
  const titleRect = titleBlock.getBoundingClientRect();

  images.forEach(img => {
    // Get image size from CSS
    const style = window.getComputedStyle(img);
    const imgWidth = parseInt(style.width);
    const imgHeight = parseInt(style.height);

    // Calculate random position around the title block
    // We'll use a ring around the title block
    const centerX = titleRect.left + titleRect.width / 2 - collageRect.left;
    const centerY = titleRect.top + titleRect.height / 2 - collageRect.top;
    const radius = Math.max(titleRect.width, titleRect.height) / 2 + 80 + Math.random() * 60;
    const angle = Math.random() * 2 * Math.PI;
    const x = centerX + radius * Math.cos(angle) - imgWidth / 2;
    const y = centerY + radius * Math.sin(angle) - imgHeight / 2;

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
  });
});
