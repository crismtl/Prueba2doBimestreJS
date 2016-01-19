var app = angular.module('prueba', ['ui.router', 'ngAnimate', 'ngResource', 'toastr']);

app.config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: "/home",
          templateUrl: "rutas/home.html",
          controller: 'HomeController'
        })
        .state('nuevoUsuario', {
          url: "/nuevoUsuario",
          templateUrl: "rutas/nuevoUsuario.html",
          controller: 'NuevoUsuarioController'
        })
        .state('pastel', {
          url: "/:idUsuario/pastel",
          templateUrl: "rutas/pastel.html",
          controller: 'PastelController'
        });
        $urlRouterProvider.otherwise("/home");
    });
