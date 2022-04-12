const toggleBtn = document.querySelector('.Nav__toggleBtn');
const list = document.querySelector('.Nav__list');
const icon = document.querySelector('.Nav__icon');

toggleBtn.addEventListener('click', () => {
    list.classList.toggle('active');
    icon.classList.toggle('active');
})