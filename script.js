const toggleBtn = document.querySelector('.nav-togle');
const links = document.querySelector('.links');

toggleBtn.addEventListener('click', () => {
    links.classList.toggle('toggle-links');
});