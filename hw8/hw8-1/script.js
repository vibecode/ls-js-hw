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
    const url = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';

    fetch(url).then(function (cities) {
        return cities.json();

    }).then((cities) => {
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
                return inputValue && ~city.name.toLowerCase().indexOf(inputValue);
            });

            result.innerHTML = compileTemplate({cities: citiesFiltered});
        });

    }).catch((error) => {
        console.log(error);
    });
});
