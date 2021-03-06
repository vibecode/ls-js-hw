/*
 Создать страничку с текстовым полем.
 После загрузки странички, загрузить список городов при помощи AJAX.
 При вводе текста в тестовое поле, выводить под текстовым полем список тех городов,
 в названиях которых есть введенный текст.
 */
const citiesUrl = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';
const citiesList = document.querySelector('.cities');
const input = document.getElementById('cityInput');
let cities = [];

function sendRequest(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', url);
        xhr.addEventListener('load', (e) => {
            resolve(xhr.responseText);
        });
        xhr.addEventListener('error', (e) => {
            reject("Упс, что-то пошло не так!");
        });
        xhr.send();
    })
}

window.addEventListener('load', (e) => {
    sendRequest(citiesUrl)
        .then((result) => {
            cities = JSON.parse(result);

            cities.sort((a, b) => {
                let cityA = a.name.toUpperCase();
                let cityB = b.name.toUpperCase();

                if (cityA < cityB) {
                    return -1;
                }
                if (cityA > cityB) {
                    return 1;
                }

                return 0;
            });

        }, (error) => {
            citiesList.innerHTML = `<li class="error">${error}</li>`;
        });
});

input.addEventListener('input', (e) => {

    let inputValue = e.target.value.toLowerCase();
    let listMarkup = '';

    citiesList.innerHTML = '';

    for (let cityObj of cities) {
        let city = cityObj.name.toLowerCase();

        if (~city.indexOf(inputValue) && inputValue) {
            listMarkup += `<li tabindex="0">${cityObj.name}</li>`;
        }
    }

    citiesList.innerHTML = listMarkup;

    if (citiesList.firstChild) {
        citiesList.firstChild.classList.add('active');
    }
});

input.addEventListener('keydown', (e) => {
    let activeCity = citiesList.querySelector('.active');

    if (activeCity) {
        if (e.keyCode === 40) {
            if (activeCity.nextElementSibling) {
                activeCity.classList.remove('active');
                activeCity.nextElementSibling.classList.add('active');
            }
        }

        if (e.keyCode === 38) {
            if (activeCity.previousElementSibling) {
                activeCity.classList.remove('active');
                activeCity.previousElementSibling.classList.add('active');
            }
        }

        if (e.keyCode === 13) {
            input.value = activeCity.innerText;
            citiesList.innerHTML = '';
        }
    }
});

citiesList.addEventListener('click', (e) => {
    if (e.target.nodeName === "LI") {
        input.value = e.target.textContent;
        citiesList.innerHTML = '';
    }
});
