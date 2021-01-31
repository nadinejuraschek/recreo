const menuBtn = document.getElementById('nav-button');
const menuDropdown = document.getElementById('nav-dropdown');

menuBtn.addEventListener('click', () => {
  menuDropdown.classList.toggle('hidden');
});