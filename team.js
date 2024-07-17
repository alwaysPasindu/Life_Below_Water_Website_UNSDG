document.addEventListener('DOMContentLoaded', () => {
    const check = document.getElementById('check');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    check.addEventListener('change', () => {
        if (check.checked) {
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        } else {
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    });
});
