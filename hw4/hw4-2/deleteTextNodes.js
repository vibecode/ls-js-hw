/*ДЗ - 2

 Создать функцию `deleteTextNodes`
 Эта функция принимает на вход элемент и должна удалить все текстовые узлы внутри указанного элемента.
 Функция может работать не рекурсивно, то есть не заходить внутрь дочерних элементов контейнера.*/

const deleteTextNodes = function (el) {
    let childNodes = el.childNodes;
    let i = childNodes.length;

    while (i--) {
        if (childNodes[i].nodeType === 3) {
            el.removeChild(childNodes[i]);
        }
    }

    return el;
};

module.exports = deleteTextNodes;
