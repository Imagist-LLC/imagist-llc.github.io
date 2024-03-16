document.querySelectorAll('.icon-container').forEach(icon => {
  const updateAnimation = () => {
    const scaleValue2 = 1 + Math.random() * 0.1;
    const scaleValue3 = 1 + Math.random() * 0.1;
    icon.style.setProperty('--random-scale2', scaleValue2);
    icon.style.setProperty('--random-scale3', scaleValue3);
  };

  icon.addEventListener('touchstart', updateAnimation);
  icon.addEventListener('mouseenter', updateAnimation); // For mouse hover on non-touch devices
});
