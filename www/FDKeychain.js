var exec = require('cordova/exec');

var FDKeychain = {
	serviceName: "FDKeychainPlugin",

	getItemForService: function(successCallback, failureCallback, key, forService) {
		exec(successCallback, failureCallback, this.serviceName, "get", [key, forService]);
	},
	getItemForServiceInAccessGroup: function(successCallback, failureCallback, key, forService, inAccessGroup) {
		exec(successCallback, failureCallback, this.serviceName, "get", [key, forService, inAccessGroup]);
	},
	getRawDataForService: function(successCallback, failureCallback, key, forService) {
		exec(successCallback, failureCallback, this.serviceName, "getRaw", [key, forService]);
	},
	getRawDataForServiceInAccessGroup: function(successCallback, failureCallback, key, forService, inAccessGroup) {
		exec(successCallback, failureCallback, this.serviceName, "getRaw", [key, forService, inAccessGroup]);
	},
	setItemForService: function(successCallback, failureCallback, key, value, forService, onlyAccessibleWhenUnlocked) {
		exec(successCallback, failureCallback, this.serviceName, "set", [key, value, forService, onlyAccessibleWhenUnlocked]);
	},
	setItemForServiceInAccessGroup: function(successCallback, failureCallback, key, value, forService, inAccessGroup, onlyAccessibleWhenUnlocked) {
		exec(successCallback, failureCallback, this.serviceName, "set", [key, value, forService, inAccessGroup, onlyAccessibleWhenUnlocked]);
	},
	removeItemForService: function(successCallback, failureCallback, key, forService) {
		exec(successCallback, failureCallback, this.serviceName, "remove", [key, forService]);
	},
	removeItemForServiceInAccessGroup: function(successCallback, failureCallback, key, forService, inAccessGroup) {
		exec(successCallback, failureCallback, this.serviceName, "remove", [key, forService, inAccessGroup]);
	}
};

module.exports = FDKeychain;
