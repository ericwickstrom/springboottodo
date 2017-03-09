'use strict';

app.controller('todoController', function($scope, $http, $log){
	$scope.todos = [];
	$scope.getAll = function(){
		$http.get('/todo').then(function(response){
			$scope.todos = response.data._embedded.todo;
		})	
	};
	$scope.create = function(){
		var todo = {
			"text" : $scope.todo
		};
		$http.post('/todo', todo).then(function(){
			$scope.getAll();
			$scope.todo = "";
		});
		
	};
	$scope.deleteTodo = function(todo){
		$http.delete('/todo/'+todo.id).then(function(){
			$scope.getAll();
		});
		
	};
	$scope.getAll();
});
