angular.module('MyApp', ['appRoutes', 'mainCtrl', 'userCtrl', 'authService', 'userService', 'storyService', 'storyCtrl', 'reverseDirective'])

.config(function($httpProvider) {
	$httpProvider.interceptors.push('AuthInterceptor');
});