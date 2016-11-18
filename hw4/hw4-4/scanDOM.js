/*
 ДЗ - 4 (не обязательно)
 Создать функцию `scanDOM`.
 `scanDOM` должна перебирать все узлы на странице и выводить в консоль статистику по элементам и классам на странице. Например:

 Тэгов div: 10
 Тэгов a: 5
 Тэгов span: 10
 Текстовых узлов: 100

 Элементов с классом c1: 10
 Элементов с классом c2: 20

 Количество и название классов/тегов заранее неизвестно. Функция сама должна определить количество и название тегов/классов.

 Для продвинутой работы с классами элемента, рекомендуется ознакомиться со свойством `classList`.
 */

const scanDom = function (document) {

    let stat = {
        elements: {},
        textNodes: {},
        classes: {}
    };

    function collectStat(document) {
        let children = document.childNodes;

        //collect elements
        for (let node of children) {
            if (node.nodeType === 1) {
                let classList = node.classList;

                if (!stat.elements.hasOwnProperty(node.nodeName)) {
                    stat.elements[node.nodeName] = 1;

                } else {
                    stat.elements[node.nodeName] += 1;
                }

                //collect class names
                for (let className of classList) {
                    if (!stat.classes.hasOwnProperty(className)) {
                        stat.classes[className] = 1;
                    } else {
                        stat.classes[className] += 1;
                    }
                }
            }

            //collect text
            if (node.nodeType === 3) {
                if (!stat.textNodes.hasOwnProperty(node.nodeName)) {
                    stat.textNodes[node.nodeName] = 1;

                } else {
                    stat.textNodes[node.nodeName] += 1;
                }
            }

            if (node.hasChildNodes()) {
                collectStat(node);
            }
        }
    }

    collectStat(document);

    function logStat(statObj) {
        let elements = statObj.elements,
            text = statObj.textNodes,
            classes = statObj.classes;

        for (let key in elements) {
            console.log(`Тэгов ${key.toLowerCase()}: ${elements[key]}`);
        }

        console.log('\n');

        for (let key in text) {
            console.log(`Текстовых узлов: ${text[key]}`);
        }

        console.log('\n');

        for (let key in classes) {
            console.log(`Элементов с классом ${key}: ${classes[key]}`);
        }
    }

    logStat(stat);
};

scanDom(document);

// module.exports = scanDom;
