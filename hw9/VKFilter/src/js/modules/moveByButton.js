import dataAll from '../data/dataAll';
import dataFiltered from '../data/dataFiltered';
import {addData, removeData} from '../modules/updateData';

export default () => {
    const listContainer = document.getElementById('listContainer'),
        leftList = document.getElementById('leftList'),
        rightList = document.getElementById('rightList');

    listContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('list__move-button')) {
            const item = e.target.closest('.list__item'),
                list = e.target.closest('.list');

            if (list.classList.contains('list--right')) {
                rightList.removeChild(item);
                leftList.insertBefore(item, leftList.firstChild);

                addData(dataAll, dataFiltered, item.dataset.id);
                removeData(dataFiltered, item.dataset.id);

            } else {
                leftList.removeChild(item);
                rightList.appendChild(item);

                addData(dataFiltered, dataAll, item.dataset.id);
                removeData(dataAll, item.dataset.id);
            }
        }
    });
}
