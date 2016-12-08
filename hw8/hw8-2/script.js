/*
 Создать приложение для ВКонтакте, которое загружает список ваших друзей
 и выводит их на страницу в следующем формате: Фото, ФИО, Возраст, Дата рождения.
 Друзья должны быть отсортированы по дате рождения в порядке убывания.
 То есть на самом верху списка расположен друг с ближайший датой рождения.
 Использование шаблонизатора приветствуется.
 */

new Promise((resolve) => {
    if (document.readyState === 'complete') {
        resolve();
    } else {
        window.onload = resolve;
    }
}).then(() => {
    return new Promise((resolve, reject) => {
        VK.init({
            apiId: 5761530
        });

        VK.Auth.getLoginStatus(function (response) {
            if (response.session) {
                resolve(response);
            } else {
                VK.Auth.login(function (response) {
                    if (response.session) {
                        resolve(response);
                    } else {
                        reject(new Error('Не удалось авторизоваться'));
                    }
                }, 2);
            }
        });
    });
}).then(function () {
    return new Promise(function (resolve, reject) {
        VK.api('friends.get', {
            v: '5.8',
            fields: 'id,photo_100,first_name,last_name,bdate',
            name_case: 'nom'
        }, function (answer) {

            if (answer.error) {
                reject(new Error(answer.error.error_msg));
            } else {

                let friendsList = answer.response.items;

                function getUserDate(data) {
                    let dateArr = data.split('.');
                    let now = new Date;

                    dateArr[1] = dateArr[1] - 1;
                    dateArr[2] = now.getFullYear();
                    dateArr.reverse();

                    let userDate = new Date(...dateArr);

                    if (userDate.getTime() < now.getTime()) {
                        userDate.setFullYear(dateArr[0] + 1);
                    }

                    return userDate.getTime();
                }

                friendsList.sort((a, b) => {
                    let aDate = !a.bdate ? Number.MAX_SAFE_INTEGER : getUserDate(a.bdate);
                    let bDate = !b.bdate ? Number.MAX_SAFE_INTEGER : getUserDate(b.bdate);

                    return aDate - bDate;
                });

                let result = friendsList.map((friend) => {
                    if (friend.bdate) {
                        let dateArr = friend.bdate.split('.').reverse();

                        if (dateArr.length > 2) {
                            dateArr[1] = dateArr[1] - 1;

                            let friendDate = new Date(...dateArr);
                            let friendTime = friendDate.getTime();

                            let diff = Date.now() - friendTime;
                            friend.age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

                            return friend;
                        } else {
                            friend.age = "скрывает";

                            return friend;
                        }
                    } else {
                        friend.age = "скрывает";
                        friend.bdate = "скрывает";

                        return friend;
                    }
                });

                const friendsTable = document.getElementById('friendsTable'),
                    sourceTemplate = document.getElementById('friendsTemplate').innerHTML,
                    compile = Handlebars.compile(sourceTemplate);
                friendsTable.innerHTML = compile({list: result});
                resolve();
            }
        });
    });
}).catch(function (e) {
    alert(`Ошибка: ${e.message}`);
});
