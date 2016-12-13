import dataAll from '../data/dataAll';
import dataFiltered from '../data/dataFiltered';
import {addData, removeData} from '../modules/updateData';

export default () => {
    const listContainer = document.getElementById('listContainer');
    let item = null;

    listContainer.addEventListener('dragstart', (e) => {
        item = e.target.closest('.list__item');
        e.dataTransfer.effectAllowed = 'move';
    });

    listContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    });

    listContainer.addEventListener('drop', (e) => {
        const list = e.target.closest('.list');
        list.appendChild(item);

        if (list.classList.contains('list--right')) {
            addData(dataFiltered, dataAll, item.dataset.id);
            removeData(dataAll, item.dataset.id);
        } else {
            addData(dataAll, dataFiltered, item.dataset.id);
            removeData(dataFiltered, item.dataset.id)
        }
    });
}
