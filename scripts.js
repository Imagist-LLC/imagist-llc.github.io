// scripts.js
document.querySelectorAll('.parallax-icon, .icon-container').forEach(icon => {
    icon.addEventListener('mousemove', e => {
        const rect = icon.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const dx = x - (rect.width / 2);
        const dy = y - (rect.height / 2);
        const layerOffsets = [0.05, 0.1, 0.15];
        icon.querySelectorAll('.layer').forEach((layer, index) => {
            const offset = layerOffsets[index % layerOffsets.length];
            layer.style.transform = `translate(${dx * offset}px, ${dy * offset}px)`;
        });
    });
});
