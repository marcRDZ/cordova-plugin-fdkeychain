
# FDKeychain Cordova Plugin

Plugin to provide FDKeychain iOS/OSX Project features to Cordova Framework, mainly access to keychain sharing between apps. For more info visit:  https://github.com/reidmain/FDKeychain.git

##<a name="installation"></a>Installation
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

###<a name="reinstalling_dev"></a>Reinstalling/installing developer version
Remove the plugin from the current project:
```sh
cordova plugin remove cordova-plugin-nativestorage
```
Install the developer version from Github:
```sh
cordova plugin add https://github.com/marcRDZ/cordova-plugin-fdkeychain.git
```

##<a name="supported_platforms"></a>Supported platforms

- iOS

##<a name="usage"></a>Usage

At this moment the only way to import and use is as follows:

```javascript
declare var cordova: any;
```

###<a name="storing_values"></a>Storing values
```javascript

    cordova.plugins.FDKeychainPlugin.setItemForService((data)=>{
      console.log('FDKeychain success', data);
    }, (error)=>{
      console.log('FDKeychain error', error);
    }, 'my_key', 'myValue', 'myApplication');
    
    cordova.plugins.FDKeychainPlugin.setItemForServiceInAccessGroup((data)=>{
      console.log('FDKeychain success', data);
    }, (error)=>{
      console.log('FDKeychain error', error);
    }, 'my_key', 'myValue', 'myApplication', 'XXXXXXXXXXX.myAccessGroup');
```

###<a name="retrieving_values"></a>Retrieving values
```javascript

    cordova.plugins.FDKeychainPlugin.getItemForService((data)=>{
      console.log('FDKeychain get success', data);
    }, (error)=>{
      console.log('FDKeychain get error', error);
    }, 'my_key', 'myApplication');
    
    cordova.plugins.FDKeychainPlugin.getItemForServiceInAccessGroup((data)=>{
      console.log('FDKeychain', data);
    }, (error)=>{
      console.log('FDKeychain', error);
    }, 'my_key', 'myApplication', 'XXXXXXXXXXX.myAccessGroup');

```

###<a name="retrieving_values"></a>Retrieving raw data
```javascript

    cordova.plugins.FDKeychainPlugin.getRawDataForService((data)=>{
      console.log('FDKeychain get success', data);
    }, (error)=>{
      console.log('FDKeychain get error', error);
    }, 'my_key', 'myApplication');
    
    cordova.plugins.FDKeychainPlugin.getRawDataForServiceInAccessGroup((data)=>{
      console.log('FDKeychain', data);
    }, (error)=>{
      console.log('FDKeychain', error);
    }, 'my_key', 'myApplication', 'XXXXXXXXXXX.myAccessGroup');

```

###<a name="removing_values"></a>Removing values

Removing a single variable:
```javascript

    cordova.plugins.FDKeychainPlugin.removeItemForService((data)=>{
      console.log('FDKeychain success', data);
    }, (error)=>{
      console.log('FDKeychain error', error);
    }, 'my_key', 'myApplication');
    
    cordova.plugins.FDKeychainPlugin.removeItemForServiceInAccessGroup((data)=>{
      console.log('FDKeychain success', data);
    }, (error)=>{
      console.log('FDKeychain error', error);
    }, 'my_key', 'myApplication', 'XXXXXXXXXXX.myAccessGroup');
```
