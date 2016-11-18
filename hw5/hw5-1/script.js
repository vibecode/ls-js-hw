let accordion = document.getElementById('accordion');

accordion.addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target.classList.contains('accordion__toggle')) {
        let toggle = e.target,
            allToggles = accordion.querySelectorAll('.accordion__toggle'),
            thisSection = toggle.closest('.accordion__section'),
            allSections = accordion.querySelectorAll('.accordion__section'),
            thisList = thisSection.querySelector('.accordion__items-list'),
            allLists = accordion.querySelectorAll('.accordion__items-list');

        function clearActive() {
            allSections.forEach((section) => {
                section.classList.remove('active');
            });

            allToggles.forEach((toggle) => {
                toggle.classList.remove('accordion__toggle--active');
            });
        }

        if (!thisSection.classList.contains('active')) {
            //clear all active flags and styles
            clearActive();

            //add active flag to the current section
            thisSection.classList.add('active');

            //close all lists
            allLists.forEach((list) => {
                list.style.display = 'none';
            });

            //open the current list
            thisList.style.display = 'block';

            //set toggle active styles
            toggle.classList.add('accordion__toggle--active');

        } else {
            //close the current list
            thisList.style.display = 'none';

            //clear all active flags and styles
            clearActive();
        }
    }
});
