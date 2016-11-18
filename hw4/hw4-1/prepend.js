/*ДЗ - 1

Создать функцию `prepend`
`prepend` имеет два параметра, в которые нужно передать элементы
Задача функции - вставить второй элемент в начало первого. Например:
`prepend(container, newElement)` - newElement должен быть добавлен в начало элемента container.*/

const prepend = function (container, newElement) {
		let refNode = container.firstChild;
		return container.insertBefore(newElement, refNode);
};

module.exports = prepend;
