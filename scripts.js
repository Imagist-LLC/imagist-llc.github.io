document.querySelectorAll('.parallax-icon').forEach(icon => {
  icon.addEventListener('touchstart', () => {
    icon.classList.add('touched');
  });
  icon.addEventListener('touchend', () => {
    icon.classList.remove('touched');
  });
});
