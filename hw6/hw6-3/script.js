/*
Создать страничку с текстовым полем.
После загрузки странички, загрузить список городов при помощи AJAX.
При вводе текста в тестовое поле, выводить под текстовым полем список тех городов,
в названиях которых есть введенный текст.
*/
const citiesUrl = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';
const citiesList = document.querySelector('.cities');

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

            citiesList.innerHTML = "";

            for (let cityObj of cities) {
                citiesList.innerHTML += `<li>${cityObj.name}</li>`;
            }

        }, (error) => {
            citiesList.innerHTML = `<li>${error}</li>`;
            });
});
