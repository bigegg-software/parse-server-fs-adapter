# parse-server-fs-adapter
parse-server file system storage adapter 

with getFileStream support

# installation

`npm install --save @bigegg/fs-files-adapter`

# usage with parse-server

### using a config file

```
{
  "appId": 'my_app_id',
  "masterKey": 'my_master_key',
  // other options
  "filesAdapter": {
    "module": "@bigegg/fs-files-adapter",
    "options": {
      "filesSubDirectory": "my/files/folder" // optional
    } 
  }
}
```

### passing as an instance

```
var FSFilesAdapter = require('@bigegg/fs-files-adapter');

var fsAdapter = new FSFilesAdapter({
      "filesSubDirectory": "my/files/folder" // optional
    });

var api = new ParseServer({
	appId: 'my_app',
	masterKey: 'master_key',
	filesAdapter: fsAdapter
})
```

