import dataAll from '../data/dataAll';
import dataFiltered from '../data/dataFiltered';

export default () => {
    const saveBtn = document.getElementById('save');
        saveBtn.addEventListener('click', (e) => {
            if (confirm('Сохранить списки?')) {
                localStorage.setItem('dataAll', JSON.stringify(dataAll));
                localStorage.setItem('dataFiltered', JSON.stringify(dataFiltered));
            }
        });
}
