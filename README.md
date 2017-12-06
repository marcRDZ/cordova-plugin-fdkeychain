
# FDKeychain Cordova Plugin

Plugin to provide FDKeychain iOS/OSX Project features to Cordova Framework, mainly access to keychain sharing between apps. For more info visit:  https://github.com/reidmain/FDKeychain.git

##  Installation
The plugin can be installed via the Cordova command line interface:
* Navigate to the root folder for your Cordova/Phonegap/Ionic project.
* Run the command:
```sh
cordova plugin add cordova-plugin-fdkeychain
```
or through this git repo if you want to be running the development version:
```sh
cordova plugin add https://github.com/marcRDZ/cordova-plugin-fdkeychain.git
```

## Supported platforms

- iOS

## Usage

At this moment the only way to import and use is as follows:

```javascript
declare var cordova: any;
```

### Storing values

```javascript

    cordova.plugins.FDKeychain.setItemForService(
      (data)=>{
        console.log('FDKeychain success', data);
      }, (error)=>{
        console.log('FDKeychain error', error);
      }, 'my_key', 'myValue', 'myApplication', <onlyAccessibleWhenUnlocked: boolean>);
    
    cordova.plugins.FDKeychain.setItemForServiceInAccessGroup(
      (data)=>{
        console.log('FDKeychain success', data);
      }, (error)=>{
        console.log('FDKeychain error', error);
      }, 'my_key', 'myValue', 'myApplication', 'XXXXXXXXXXX.myAccessGroup', <onlyAccessibleWhenUnlocked: boolean>);
```

### Retrieving values

```javascript

    cordova.plugins.FDKeychain.getItemForService(
      (data)=>{
        console.log('FDKeychain get success', data);
      }, (error)=>{
        console.log('FDKeychain get error', error);
      }, 'my_key', 'myApplication');
      
      cordova.plugins.FDKeychain.getItemForServiceInAccessGroup((data)=>{
        console.log('FDKeychain', data);
      }, (error)=>{
        console.log('FDKeychain', error);
      }, 'my_key', 'myApplication', 'XXXXXXXXXXX.myAccessGroup');

```

### Retrieving raw data

```javascript

    cordova.plugins.FDKeychain.getRawDataForService(
      (data)=>{
        console.log('FDKeychain get success', data);
      }, (error)=>{
        console.log('FDKeychain get error', error);
      }, 'my_key', 'myApplication');
    
    cordova.plugins.FDKeychain.getRawDataForServiceInAccessGroup(
      (data)=>{
        console.log('FDKeychain', data);
      }, (error)=>{
        console.log('FDKeychain', error);
      }, 'my_key', 'myApplication', 'XXXXXXXXXXX.myAccessGroup');

```

### Removing values

```javascript

    cordova.plugins.FDKeychain.removeItemForService(
      (data)=>{
        console.log('FDKeychain success', data);
      }, (error)=>{
        console.log('FDKeychain error', error);
      }, 'my_key', 'myApplication');
    
    cordova.plugins.FDKeychain.removeItemForServiceInAccessGroup(
      (data)=>{
        console.log('FDKeychain success', data);
      }, (error)=>{
        console.log('FDKeychain error', error);
      }, 'my_key', 'myApplication', 'XXXXXXXXXXX.myAccessGroup');

```
