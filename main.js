
    const menu = document.getElementById('menu');
        menulink = document.getElementById('toggle-menu');

        menulink.addEventListener('click', function(e) {
            menu.classList.toggle('active');
            e.preventDefault();
        });



