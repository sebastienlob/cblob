const ham = document.querySelector('.ham');
const cross = document.querySelector('.cross');
const container = document.querySelector('.container');
ham.addEventListener('click', reveal);
cross.addEventListener('click', hide);

function reveal() {
    container.classList.add('show');
    cross.classList.remove('hidden');
    ham.classList.add('hidden');
}

function hide() {
    container.classList.remove('show');
    container.classList.add('hidden');
    cross.classList.add('hidden');
    ham.classList.remove('hidden');
}