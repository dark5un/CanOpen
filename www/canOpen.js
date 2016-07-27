function isFunction(functionToCheck) {
	var getType = {};
	return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

module.exports = function CanOpen(app, callback, errorCallback) {
	cordova.exec(
		// Success callback
		callback,
		// Failure callback
		isFunction(errorCallback) ? errorCallback : function(error) { console.log('canOpen:', error.message); },
		// Native Class Name
		"CanOpen",
		// Name of method in native class.
		"appCanOpen",
		// array of args to pass to method.
		[app]
	);
};
