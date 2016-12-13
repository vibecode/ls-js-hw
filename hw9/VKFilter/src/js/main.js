import renderList from './modules/renderList';
import search from './modules/search';
import dataAll from './data/dataAll';
import dataFiltered from './data/dataFiltered';
import dragNdrop from './modules/dragNdrop';
import moveByButton from './modules/moveByButton';
import saveToLocalStorage from './modules/saveToLocalStorage';
import getFromLocalStorage from './modules/getFromLocalStorage';

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
                getFromLocalStorage(answer);
                renderList(dataAll, 'leftList');
                renderList(dataFiltered, 'rightList');
                search(dataAll, 'inputMain', 'leftList');
                search(dataFiltered, 'inputFiltered', 'rightList');
                dragNdrop();
                moveByButton();
                saveToLocalStorage();

                resolve();
            }
        });
    });
}).catch(function(e) {
    alert(`Ошибка: ${e.message}`);
});
