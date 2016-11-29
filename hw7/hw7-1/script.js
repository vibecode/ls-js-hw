/*
 ДЗ 1:
 Создать страницу, которая выводит все имеющиеся cookie в виде таблицы (имя, значение).
 Для каждой cookie в таблице, необходимо добавить кнопку "удалить".
 При нажатии на "удалить", на экран должен быть выведен confirm с текстом 'Удалить cookie с именем ?'
 Вместо … необходимо подставить имя удаляемой cookie.
 Если пользователь ответил положительно, то соответствующая cookie должна быть удалена.
 */

//Генератор только для тестов
for (let i = 1; i < 11; i++) {
    document.cookie = `cookie-${i}=${Math.random()};`;
}

function listCookies() {
    const table = document.getElementById('table');
    let cookies = storeCookies();
    let tContent = '';
    let tHead = `<thead></thead><tr><th>Name</th><th>Value</th><th></th></tr></thead>`;

    if (cookies) {
        cookies.forEach((cookie) => {

            tContent += `<tr><td>${cookie.name}</td><td>${cookie.value}</td><td><button class="del-button" data-name="${cookie.name}">&#x2718;</button></td></tr>`;

        });
    }

    table.innerHTML = tHead + tContent;
}

function storeCookies() {
    let cookies = document.cookie;

    if (cookies) {
        cookies = cookies.split(';');
        cookies = cookies.map((cookie) => {
            let cookieBox = {};

            cookie = cookie.trim().split(/=(.*)/, 2);

            cookieBox.name = cookie[0];
            cookieBox.value = cookie[1];

            return cookieBox;
        });
    }

    return cookies;
}

function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

document.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
        let name = e.target.dataset.name;
        let confirmDelete = window.confirm(`Delete cookie with name ${name}?`);

        if (confirmDelete) {
            deleteCookie(name);
            listCookies();
        }
    }
});

listCookies();
