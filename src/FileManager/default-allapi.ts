import { FileManager } from '@syncfusion/ej2-filemanager';
import { NavigationPane, DetailsView } from '@syncfusion/ej2-filemanager';
import { Toolbar } from '@syncfusion/ej2-filemanager';
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
    fileLoad: (args: FileLoadEventArgs) => {
        addEventLog(args.module + ' fileLoad event is triggered');
    },
    fileOpen: (args: FileOpenEventArgs) => {
        addEventLog('The ' + (args.fileDetails as any)["name"] + ((<any>args.fileDetails).isFile ? ' file' : ' folder') + ' will be opened.');
    },
    beforeSend: (args: BeforeSendEventArgs) => {
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
        addEventLog(args.item.text + 'toolbar item is clicked');
    }
});
feObj.appendTo('#file');

function addEventLog(text: string) {
    let clog = document.getElementById('events');
    clog.innerHTML = text + '\n' + clog.innerHTML;
}