import { FileManager, Toolbar, NavigationPane, DetailsView } from '@syncfusion/ej2-filemanager';

FileManager.Inject(Toolbar, NavigationPane, DetailsView)
import '../../node_modules/es6-promise/dist/es6-promise';

FileManager.Inject(DetailsView, Toolbar, NavigationPane);
// let hostUrl: string = 'https://ng2jq.syncfusion.com/ej2services/';
let hostUrl = 'http://localhost:62869/';
let feObj: FileManager = new FileManager({
    ajaxSettings: {
        url: hostUrl + 'api/FileAccess/FileOperations',
        uploadUrl: hostUrl +'api/FileAccess/Upload',
        downloadUrl: hostUrl +'api/FileAccess/Download',
        getImageUrl: hostUrl +'api/FileAccess/GetImage'
    }
});
feObj.appendTo('#file');