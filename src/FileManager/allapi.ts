import { FileManager, Toolbar, NavigationPane, DetailsView } from '@syncfusion/ej2-filemanager';

FileManager.Inject(Toolbar, NavigationPane, DetailsView)
import {
    BeforeSendEventArgs, FileOpenEventArgs, FileSelectEventArgs, MenuClickEventArgs, MenuOpenEventArgs,
    ToolbarClickEventArgs, SuccessEventArgs, FailureEventArgs, FileLoadEventArgs
} from '@syncfusion/ej2-filemanager';
import '../../node_modules/es6-promise/dist/es6-promise';

FileManager.Inject(NavigationPane, DetailsView, Toolbar);
// let hostUrl: string = 'https://ng2jq.syncfusion.com/ej2services/';
let hostUrl = 'http://localhost:62869/';
let feObj: FileManager = new FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        uploadUrl: hostUrl +'api/FileManager/Upload',
        downloadUrl: hostUrl +'api/FileManager/Download',
        getImageUrl: hostUrl +'api/FileManager/GetImage'
    },
    // allowMultiSelection: false,
    // contextMenuSettings: {
    //     file: ['Open', 'Download', '|', 'Cut', 'Copy', '|', 'Delete', 'Rename', '|', 'Details', 'Custom'],
    //     folder: ['Open', 'Upload', '|', 'Cut', 'Copy', 'Paste', '|', 'Delete', 'Rename', '|', 'NewFolder', '|', 'Details', 'Custom'],
    //     layout: ['SortBy', 'View', 'Refresh', '|', 'Paste', '|', 'NewFolder', 'Upload', '|', 'Details', '|', 'SelectAll', 'Custom'],
    //     visible: true,
    // },
    cssClass: 'custom',
    // enablePersistence: true,
    // enableRtl: true,
    // gridSettings: {
    //     columnResizing: false,
    //     columns: [{ field: 'name', headerText: 'Name', minWidth: 120, width: 'auto', headerTextAlign: 'Left',
    //         template: '<span class="e-fe-text">${name}</span>' },
    //         { field: 'dateModified', headerText: 'Date Modified', minWidth: 50, width: '190', headerTextAlign: 'Right', textAlign: 'Right' },
    //         { field: 'size', headerText: 'Size', minWidth: 50, width: '110', headerTextAlign: 'Right', textAlign: 'Right' }],
    // },
    // view: 'Details',
    // navigationPaneSettings: {
    //     maxWidth: '600px',
    //     minWidth: '200px',
    //     visible: false,
    // },
    // searchSettings: {
    //     allowSearchOnTyping: false,
    //     filterType: 'startsWith',
    //     ignoreCase: true
    // },
    // showFileExtension: false,
    // navigationPaneSettings: { visible: false },
    fileLoad: (args: FileLoadEventArgs) => {
        if ((args.fileDetails as any).hasChild) {
            var rowDiv = document.createElement('span');
            rowDiv.className += 'new';
            if (args.module === 'TreeView') {
                args.element.querySelector('.e-list-text').appendChild(rowDiv);
            } else if (args.module === 'Grid') {
                args.element.querySelector('.e-fe-text').appendChild(rowDiv);
            } else {
                args.element.querySelector('.e-list-icon').appendChild(rowDiv);
            }
        }
    },
    fileOpen: (args: FileOpenEventArgs) => {
        addEventLog('The ' + (args.fileDetails as any)["name"] + ((<any>args.fileDetails).isFile ? ' file' : ' folder') + ' will be opened.');
    },
    beforeSend: (args: BeforeSendEventArgs) => {
        (args.ajaxSettings as any).success = function () {
            addEventLog("Success");
        };
        addEventLog(args.action + ' beforeSend event is triggered');
    },
    fileSelect: (args: FileSelectEventArgs) => {
        addEventLog(args.action + 'ed: ' + (args.fileDetails as any)["name"]);
    },
    menuClick: (args: MenuClickEventArgs) => {
        addEventLog('"' + args.item.text + '" menu item is clicked');
    },
    menuOpen: (args: MenuOpenEventArgs) => {
        addEventLog('context menu will be opened');
    },
    success: (args: SuccessEventArgs) => {
        addEventLog('Success');
    },
    failure: (args: FailureEventArgs) => {
        addEventLog('Service failure');
    },
    toolbarClick: (args: ToolbarClickEventArgs) => {
        if (args.item && args.item.text == "Custom tool") {
            window.alert("Custom tool is clicked");
        }
        addEventLog((args.fileDetails as any)["name"] + 'toolbar item is clicked');
    }
});
feObj.appendTo('#file');

function addEventLog(text: string) {
    let clog = document.getElementById('events');
    clog.innerHTML = text + '\n' + clog.innerHTML;
}