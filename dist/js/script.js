document.addEventListener('DOMContentLoaded', () => {
    const ring = document.querySelector('.progress-ring');
    const circleFill = ring.querySelector('.progress-circle-fill');
    const text = ring.querySelector('.progress-text');
    const progress = parseInt(ring.dataset.progress);
    const dashoffset = 565 - (progress / 100) * 565;
    circleFill.style.strokeDashoffset = dashoffset;
    text.innerText = `${progress}%`;

    ring.addEventListener('mouseenter', () => {
        text.style.opacity = 1;
    });

    ring.addEventListener('mouseleave', () => {
        text.style.opacity = 1;
    });
});
