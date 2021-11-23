import { FileManager, Toolbar, NavigationPane, DetailsView } from '@syncfusion/ej2-filemanager';

import {
    BeforeSendEventArgs, FileOpenEventArgs, FileSelectEventArgs, MenuClickEventArgs, MenuOpenEventArgs,
    ToolbarClickEventArgs
} from '@syncfusion/ej2-filemanager';

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
    fileOpen: (args: FileOpenEventArgs) => {
        addEventLog('The ' + (args.fileDetails as any)["name"] + ((<any>args.fileDetails).isFile ? ' file' : ' folder') + ' will be opened.');
    },
    beforeSend: (args: BeforeSendEventArgs) => {
        addEventLog('beforeSend');
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
    success: (args: Object) => {
        addEventLog('Success');
    },
    failure: (args: Object) => {
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