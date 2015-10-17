angular.module("FinalApp")
.controller("MainController", function($scope){
	$scope.opendDialog = function(dialogId)
	{
	    LxDialogService.open(dialogId);
	};

	$scope.closingDialog = function()
	{
	    LxNotificationService.info('Dialog closed!');
	};

});