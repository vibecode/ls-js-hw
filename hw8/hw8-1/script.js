/*ДЗ 1: переделать предыдущее ДЗ с загрузкой списка городов по AJAX.
 После загрузки страницы, происходит загрузка городов через AJAX.
 Города сортируются по имени и выводятся на странице при помощи шаблонизатора Handlebars. При вводе значений в текстовое поле, должны скрываться те города, в названии которых нет подстроки, указанной в текстовом поле.*/
new Promise((resolve) => {
    if (document.readyState === 'complete') {
        resolve();
    } else {
        window.onload = resolve;
    }
}).then(() => {
    return new Promise((resolve, reject) => {
        const url = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';

        let xhr = new XMLHttpRequest();

        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.addEventListener('load', (e) => {
            resolve(xhr.response);
        });
        xhr.addEventListener('error', (e) => {
            reject("Упс, что-то пошло не так!");
        });
        xhr.send();
    })
}).then((response) => {
    let cities = response;

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

    let result = document.getElementById('result'),
        input = document.getElementById('cityInput'),
        sourceTemplate = document.getElementById('citiesTemplate').innerHTML,
        compileTemplate = Handlebars.compile(sourceTemplate);

    result.innerHTML = compileTemplate({cities: cities});

    input.addEventListener('input', (e) => {
        let inputValue = e.target.value.toLowerCase();

        let citiesFiltered = cities.filter((city) => {
            return ~city.name.toLowerCase().indexOf(inputValue) && inputValue;
        });

        result.innerHTML = compileTemplate({cities: citiesFiltered});
    });

}, (error) => {
    console.log(error);
});
