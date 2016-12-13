import dataAll from '../data/dataAll';
import dataFiltered from '../data/dataFiltered';
import {addData} from '../modules/updateData';

export default (answer) => {
     const savedAll = JSON.parse(localStorage.getItem('dataAll')),
         savedFiltered = JSON.parse(localStorage.getItem('dataFiltered'));

     if (savedFiltered && savedFiltered.length > 0) {
         addData(dataAll, savedAll);
         addData(dataFiltered, savedFiltered);
     } else {
         addData(dataAll, answer.response.items);
     }
 }
