import dataAll from '../data/dataAll';
import dataFiltered from '../data/dataFiltered';
import {addData, removeData} from '../modules/updateData';

export default () => {
    const listContainer = document.getElementById('listContainer');
    let item = null;

    listContainer.addEventListener('dragstart', (e) => {
        item = e.target.closest('.list__item');
        // item.style.opacity = '.4';

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', item);
    });

    listContainer.addEventListener('dragenter', (e) => {
        if (e.target.closest('.list')){
            // e.target.classList.add('drag_over');
        }
    });

    listContainer.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    });

    listContainer.addEventListener('dragleave', (e) => {
        // e.target.classList.remove('dragover');
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

    // listContainer.addEventListener('dragend', (e) => {
    //
    // });
}