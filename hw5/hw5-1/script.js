let accordion = document.getElementById('accordion');

accordion.addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target.classList.contains('accordion__toggle')) {
        let toggle = e.target,
            allToggles = accordion.querySelectorAll('.accordion__toggle'),
            thisSection = toggle.closest('.accordion__section'),
            thisListBox = thisSection.querySelector('.accordion__items-box'),
            allListBoxes = accordion.querySelectorAll('.accordion__items-box'),
            thisList = thisSection.querySelector('.accordion__items-list'),
            allLists = accordion.querySelectorAll('.accordion__items-list');

        if (!toggle.classList.contains('accordion__toggle--active')) {
            //clear all active styles
            clearActive();

            //close all lists
            allListBoxes.forEach((box) => {
                box.classList.remove('accordion__items-box--open');
            });

            allLists.forEach((list) => {
                list.classList.remove('accordion__items-list--open');
            });

            //open the current list
            thisListBox.classList.add('accordion__items-box--open');
            thisList.classList.add('accordion__items-list--open');

            //set toggle active styles
            toggle.classList.add('accordion__toggle--active');

        } else {
            //close the current list
            thisListBox.classList.remove('accordion__items-box--open');
            thisList.classList.remove('accordion__items-list--open');

            //clear all active flags and styles
            clearActive();
        }

        function clearActive() {
            allToggles.forEach((toggle) => {
                toggle.classList.remove('accordion__toggle--active');
            });
        }
    }
});
