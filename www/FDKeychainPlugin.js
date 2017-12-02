var exec = require('cordova/exec');

var FDKeychain = {
	serviceName: "FDKeychainPlugin",

	getItemForService: function(success, error, key, forService) {
		exec(success, error, this.serviceName, "get", [key, forService, inAccessGroup]);
	},
	getItemForServiceInAccessGroup: function(success, error, key, forService, inAccessGroup) {
		exec(success, error, this.serviceName, "get", [key, forService, inAccessGroup]);
	},
	getRawDataForService: function(success, error, key, forService) {
		exec(success, error, this.serviceName, "getRaw", [key, forService, inAccessGroup]);
	},
	getRawDataForServiceInAccessGroup: function(success, error, key, forService, inAccessGroup) {
		exec(success, error, this.serviceName, "getRaw", [key, forService, inAccessGroup]);
	},
	setItemForService: function(success, error, key, value, forService, onlyAccessibleWhenUnlocked) {
		exec(success, error, this.serviceName, "set", [key, value, forService, inAccessGroup, onlyAccessibleWhenUnlocked]);
	},
	setItemForServiceInAccessGroup: function(success, error, key, value, forService, inAccessGroup, onlyAccessibleWhenUnlocked) {
		exec(success, error, this.serviceName, "set", [key, value, forService, inAccessGroup, onlyAccessibleWhenUnlocked]);
	},
	removeItemForService: function(successCallback, failureCallback, key, forService) {
		exec(successCallback, failureCallback, this.serviceName, "remove", [key, forService, inAccessGroup]);
	},
	removeItemForServiceInAccessGroup: function(successCallback, failureCallback, key, forService, inAccessGroup) {
		exec(successCallback, failureCallback, this.serviceName, "remove", [key, forService, inAccessGroup]);
	}
};

module.exports = FDKeychain;
