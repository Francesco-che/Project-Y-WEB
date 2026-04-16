const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('header-transparent');
        } else {
            header.classList.remove('header-transparent');
        }
    });