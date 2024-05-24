// JavaScript to handle the sticky header
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.classList.remove('sticky');
            header.classList.add('hidden-header');
        } else {
            header.classList.remove('hidden-header');
            header.classList.add('sticky');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scroll values
    });
});

            