/*ДЗ - 3

удаляет все текстовые узлы рекурсивно*/

const deleteTextNodesRec = function(el) {
  let childNodes = el.childNodes;
  let i = childNodes.length;

  while (i--) {
    if (childNodes[i].nodeType === 3) {
      el.removeChild(childNodes[i]);

    } else if (childNodes[i].nodeType === 1) {
      deleteTextNodesRec(childNodes[i]);
    }
  }

  return el;
};

module.exports = deleteTextNodesRec;
