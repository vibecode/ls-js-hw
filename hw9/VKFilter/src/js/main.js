import renderList from './modules/renderList';
import data from './modules/data';
import search from './modules/search';

new Promise(function(resolve) {
    if (document.readyState === 'complete') {
        resolve();
    } else {
        window.onload = resolve;
    }
}).then(function() {
    return new Promise(function(resolve, reject) {
        VK.init({
            apiId: 5761530
        });

        VK.Auth.getLoginStatus(function(response) {
            if (response.session) {
                resolve(response);
            } else {
                VK.Auth.login(function(response) {
                    if (response.session) {
                        resolve(response);
                    } else {
                        reject(new Error('Не удалось авторизоваться'));
                    }
                }, 2);
            }
        });
    });
}).then(function() {
    return new Promise(function(resolve, reject) {
        VK.Api.call('friends.get', {
            v: '5.8',
            fields: 'id, photo_50, first_name, last_name, bdate',
            name_case: 'nom'
        }, function(answer) {

            if (answer.error) {
                reject(new Error(answer.error.error_msg));
            } else {
                Object.assign(data, answer.response.items);
                console.log(data);

                renderList(data, 'leftList');
                search(data, 'inputMain', 'leftList');

                resolve();
            }
        });
    });
}).catch(function(e) {
    alert(`Ошибка: ${e.message}`);
});
