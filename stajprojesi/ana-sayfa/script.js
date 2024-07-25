
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const scrollY = window.scrollY;
    const opacity = Math.max(1 - scrollY / 200, 0);
    header.style.opacity = opacity;
});


