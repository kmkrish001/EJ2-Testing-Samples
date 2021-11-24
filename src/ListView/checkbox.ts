/**
 * ListView Checkbox Sample
 */
import { ListView, SelectedItem } from '@syncfusion/ej2-lists';

let data: { [key: string]: Object }[] = [
    { text: 'Hennessey Venom', id: 'list-01', checked: true },
    { text: 'Bugatti Chiron', id: 'list-02', checked: true },
    { text: 'Bugatti Veyron Super Sport', id: 'list-03' },
    { text: 'SSC Ultimate Aero', id: 'list-04' },
    { text: 'Koenigsegg CCR', id: 'list-05', checked: true },
    { text: 'McLaren F1', id: 'list-06' },
    { text: 'Aston Martin One- 77', id: 'list-07' },
    { text: 'Jaguar XJ220', id: 'list-08' },
    { text: 'McLaren P1', id: 'list-09' },
    { text: 'Ferrari LaFerrari', id: 'list-10' },
];
let listObj: ListView = new ListView({
    //Set defined data to dataSource property, enable checkbox and map the checked in the fields.
    dataSource: data, showCheckBox: true,
    enablePersistence: true,
     fields: { isChecked: 'checked' }
});

listObj.appendTo('#checkbox-list');

document.getElementById('list_check').onclick = function () {
    listObj.checkAllItems();
};
document.getElementById('list_uncheck').onclick = function () {
    listObj.uncheckAllItems();
};

document.getElementById('rtl').onclick = (e: Event) => {
    listObj.enableRtl = true;
};

