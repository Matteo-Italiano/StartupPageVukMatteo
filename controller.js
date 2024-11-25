document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.navbar a');
    const currentUrl = window.location.href;

    links.forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
    });
});

