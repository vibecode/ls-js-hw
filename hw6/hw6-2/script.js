/*
Загрузить города при помощи AJAX из
https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json
(сервер поддерживает AJAX CORS)
Отсортировать города по алфавиту и вывести на странице.*/

const citiesUrl = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';
const citiesContainer = document.querySelector('.cities');

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

const loadCities = document.getElementById('loadCities');

loadCities.addEventListener('click', (e) => {
    sendRequest(citiesUrl)
        .then((result) => {
            let cities = JSON.parse(result);

            cities.sort((a, b) => {
                let cityA = a.name.toUpperCase();
                let cityB = b.name.toUpperCase();

                if (cityA < cityB) {
                    return -1;
                }
                if (cityA > cityB) {
                    return  1;
                }

                return 0;
            });

            citiesContainer.innerHTML = "";

            for (let cityObj of cities) {
                citiesContainer.innerHTML += `<p>${cityObj.name}</p>`;
            }

        }, (error) => {
            citiesContainer.innerHTML = `<p>${error}</p>`;
            });
});
