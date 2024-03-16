document.querySelectorAll('.icon-container').forEach(icon => {
  icon.addEventListener('touchstart', () => {
    icon.classList.add('touched');
  });
  icon.addEventListener('touchend', () => {
    icon.classList.remove('touched');
  });
});


document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.icon-container').forEach((icon, index) => {
    icon.addEventListener('touchstart', () => {
      const scaleValue2 = 1 + Math.random() * 0.1; // Random scale between 1.0 and 1.1
      const scaleValue3 = 1 + Math.random() * 0.1; // Random scale between 1.0 and 1.1
      icon.style.setProperty('--random-scale2', scaleValue2);
      icon.style.setProperty('--random-scale3', scaleValue3);
    });
  });
});
