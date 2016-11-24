/*
 Создать страничку с текстовым полем.
 После загрузки странички, загрузить список городов при помощи AJAX.
 При вводе текста в тестовое поле, выводить под текстовым полем список тех городов,
 в названиях которых есть введенный текст.
 */
const citiesUrl = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';
const citiesList = document.querySelector('.cities');
const input = document.getElementById('cityInput');
let cities;

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
            citiesList.innerHTML = `<li>${error}</li>`;
        });
});

input.addEventListener('input', (e) => {
    let inputValue = e.target.value.toLowerCase();

    citiesList.innerHTML = '';
    for (let cityObj of cities) {
        let city = cityObj.name.toLowerCase();

        if (city.startsWith(inputValue)) {
            citiesList.innerHTML += `<li>${cityObj.name}</li>`;
        }
    }
});
