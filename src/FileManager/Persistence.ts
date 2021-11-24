import { FileManager } from '@syncfusion/ej2-filemanager';
import { DetailsView, NavigationPane } from '@syncfusion/ej2-filemanager';
import { Toolbar } from '@syncfusion/ej2-filemanager';
import '../../node_modules/es6-promise/dist/es6-promise';

FileManager.Inject(DetailsView, Toolbar, NavigationPane);
// let hostUrl: string = 'https://ng2jq.syncfusion.com/ej2services/';
let hostUrl = 'http://localhost:62869/';
let feObj: FileManager = new FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileManager/FileOperations',
        uploadUrl: hostUrl +'api/FileManager/Upload',
        downloadUrl: hostUrl +'api/FileManager/Download',
        getImageUrl: hostUrl +'api/FileManager/GetImage'
    },
    enablePersistence : true
});
feObj.appendTo('#file');
