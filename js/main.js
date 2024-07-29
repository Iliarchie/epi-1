const header = document.querySelector('.header');
const btnOpen = document.querySelector('.btn-open');
const headerLinks = document.querySelectorAll('.header__list-link');
const prItem = document.querySelectorAll('.project__list-item');

btnOpen.addEventListener('click', function() {
    header.classList.toggle('active');
});

headerLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 1080) {
            header.classList.remove('active');
        }
    });
});

prItem.forEach((item) => {
    item.addEventListener('click', function() {
        const bottActive = item.querySelector('.bott-active');
        const bottDis = item.querySelector('.bott-dis');

        if (item.classList.contains('active')) {
            item.classList.remove('active');
            bottActive.classList.remove('active');
            bottDis.classList.remove('active');
        } else {
            prItem.forEach((el) => {
                el.classList.remove('active');
                const bottActiveEl = el.querySelector('.bott-active');
                const bottDisEl = el.querySelector('.bott-dis');
                if (bottActiveEl) {
                    bottActiveEl.classList.remove('active');
                }
                if (bottDisEl) {
                    bottDisEl.classList.remove('active');
                }
            });
            item.classList.add('active');
            bottActive.classList.add('active');
            bottDis.classList.add('active');
        }
    });
});

document.querySelector('.header-contact').addEventListener('click', function() {
    if (window.innerWidth <= 1080) {
        document.querySelector('.header').classList.remove('active');
    }
});
