import { HeatMap, Legend, Tooltip, ILoadedEventArgs, HeatMapTheme } from '@syncfusion/ej2-heatmap';

HeatMap.Inject(Tooltip, Legend);

let defaultData = [
    [73, 39, 89, 39, 94, 55],
    [93, 58, 53, 38, 26, 68],
    [99, 28, 22, 0, 66, 90],
    [14, 46, 97, 69, 69, 3],
    [7, 16, 47, 47, 88, 6],
    [41, 55, 73, 23, 3, 79],
    [56, 69, 21, 86, 13, 33],
    [45, 7, 53, 81, 95, 79],
    [60, 77, 74, 68, 88, 51],
    [25, 100, 10, 12, 78, 14],
    [25, 56, 55, 58, 12, 82],
    [74, 33, 88, 23, 86, 59]
   ];
   
    let heatmap: HeatMap = new HeatMap({
        titleSettings: {
            text: 'Sales Revenue per Employee (in 1000 US$)',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        },
        xAxis: {
            labels: ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne', 'Paul', 'Karin', 'Mario'],
        },
        yAxis: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        },
        dataSource: defaultData
    });
    heatmap.appendTo('#container');

    let heatmap_RTL: HeatMap = new HeatMap({
        titleSettings: {
            text: 'Sales Revenue per Employee (in 1000 US$)',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        },
        xAxis: {
            labels: ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne', 'Paul', 'Karin', 'Mario'],
        },
        yAxis: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        },
        dataSource: defaultData,
        enableRtl: true
    });
    heatmap_RTL.appendTo('#rtl');


    let heatmap_Persist: HeatMap = new HeatMap({
        titleSettings: {
            text: 'Sales Revenue per Employee (in 1000 US$)',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        },
        xAxis: {
            labels: ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne', 'Paul', 'Karin', 'Mario'],
        },
        yAxis: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        },
        dataSource: defaultData,
        allowSelection: true,
        enablePersistence: true
    });
    heatmap_Persist.appendTo('#persistence');