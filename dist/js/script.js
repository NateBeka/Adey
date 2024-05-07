document.addEventListener('DOMContentLoaded', () => {
    const ring = document.querySelector('.progress-ring1');
    const circleFill = ring.querySelector('.progress-circle-fill1');
    const text = ring.querySelector('.progress-text1');
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
document.addEventListener('DOMContentLoaded', () => {
    const ring = document.querySelector('.progress-ring2');
    const circleFill = ring.querySelector('.progress-circle-fill2');
    const text = ring.querySelector('.progress-text2');
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
document.addEventListener('DOMContentLoaded', () => {
    const ring = document.querySelector('.progress-ring3');
    const circleFill = ring.querySelector('.progress-circle-fill3');
    const text = ring.querySelector('.progress-text3');
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
