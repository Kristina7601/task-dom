/*
  В функцию appendToBody() передаются 3 параметра: tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++) {
        const element = document.createElement(tag);
        element.textContent = content;
        document.body.appendChild(element);
    }
}

/*
  Функция generateTree() принимает два параметра - childrenCount и level.
  Создайте дерево вложенных тегов DIV. Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level. Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности (с единицы).
  Сформированное дерево верните в качестве результата.
*/
export function generateTree(childrenCount, level) {
    let currentLevel = 1;
    function createNode(currentLevel) {
        const div = document.createElement('div');
        div.className = `item_${currentLevel}`;
        if (currentLevel < level) {
            for (let i = 0; i < childrenCount; i++) {
                div.appendChild(createNode(currentLevel + 1));
            }
        }
        return div;
    }
    return createNode(currentLevel);
}

/*
  Создайте функцию replaceNodes(). Используйте функцию generateTree() для создания дерева (вложенность 3, элементов 2).
  Замените все узлы второго уровня (класс item_2) на теги SECTION. Остальную структуру сохраните.
*/
export function replaceNodes() {
    const tree = generateTree(2, 3);
    const nodesToReplace = tree.querySelectorAll('.item_2');
    nodesToReplace.forEach((node) => {
        const section = document.createElement('section');
        section.className = node.className;
        section.innerHTML = node.innerHTML;
        node.parentNode.replaceChild(section, node);
    });
    return tree;
}
