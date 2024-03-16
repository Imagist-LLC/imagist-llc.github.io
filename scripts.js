

document.querySelectorAll('.icon-container').forEach(icon => {
  const updateAnimation = () => {
    const duration2 = Math.random() * 0.5 + 0.5; // Duration between 0.5s and 1s
    const duration3 = Math.random() * 0.5 + 0.5; // Duration between 0.5s and 1s
    const delay2 = Math.random() * 0.2; // Delay between 0s and 0.2s
    const delay3 = Math.random() * 0.2; // Delay between 0s and 0.2s

    icon.style.setProperty('--duration2', `${duration2}s`);
    icon.style.setProperty('--duration3', `${duration3}s`);
    icon.style.setProperty('--delay2', `${delay2}s`);
    icon.style.setProperty('--delay3', `${delay3}s`);
  };

  icon.addEventListener('touchstart', updateAnimation);
  icon.addEventListener('mouseenter', updateAnimation); // For mouse hover on non-touch devices
});
