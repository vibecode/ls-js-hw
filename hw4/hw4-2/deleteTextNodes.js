/*ДЗ - 2

Создать функцию `deleteTextNodes`
Эта функция принимает на вход элемент и должна удалить все текстовые узлы внутри указанного элемента.
Функция может работать не рекурсивно, то есть не заходить внутрь дочерних элементов контейнера.*/

const deleteTextNodes = function(el) {
  let childNodes = el.childNodes;

  for (let node of childNodes) {
    if (node.nodeType === 3) {
      el.removeChild(node);
    }
  }

  return el;
}

module.exports = deleteTextNodes;
