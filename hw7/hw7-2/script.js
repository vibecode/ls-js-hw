function listCookies() {
    const table = document.getElementById('table');
    let cookies = storeCookies();
    let tContent = '';
    let tHead = `<thead><tr><th>Name</th><th>Value</th><th></th></tr></thead>`;

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

function setCookie(name, value, expires) {

    if (typeof expires == "number" && expires) {
        let d = new Date();
        d.setTime(d.getTime() + expires * 86400000);
        expires = d;
    }

    if (expires && expires.toUTCString) {
        expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    document.cookie = `${name}=${value}; expires=${expires}`;
}

document.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.classList.contains('del-button')) {
        let name = e.target.dataset.name;
        let confirmDelete = window.confirm(`Delete cookie with name ${name}?`);

        if (confirmDelete) {
            deleteCookie(name);
            listCookies();
        }
    }

    if (e.target.classList.contains('add-button')) {
        const inputs = document.getElementById('add-form').elements;
        let name = inputs['cookieName'].value.trim(),
            value = inputs['cookieValue'].value.trim(),
            expires = parseInt(inputs['cookieExpires'].value.trim());

        if (name && value && expires) {
            setCookie(name, value, expires);
            listCookies();
        } else {
            alert('Все поля должны быть заполнены');
        }

        for (input of inputs) {
            if (input.name !== 'cookieSubmit') {
                input.value = '';
            }
        }
    }
});

listCookies();
