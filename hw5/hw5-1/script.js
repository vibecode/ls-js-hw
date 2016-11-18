let accordion = document.getElementById('accordion');

accordion.addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target.classList.contains('accordion__toggle')) {
        let toggle = e.target,
            thisSection = toggle.closest('.accordion__section');

        if (!thisSection.classList.contains('active')) {
            let activeSection = accordion.querySelector('.active');

            if (activeSection) {
                activeSection.classList.remove('active');
            }

            thisSection.classList.add('active');

        } else {
            thisSection.classList.remove('active');
        }
    }
});
