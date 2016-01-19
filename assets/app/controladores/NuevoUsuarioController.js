app.controller('NuevoUsuarioController', ['$scope', '$http', 'toastr', 'UsuarioFactory', function($scope, $http, toastr, UsuarioFactory) {
  toastr.info('Info', 'Se cargo la vista Nuevo Usuario');

  $scope.nuevoUsuario = {
    nombre: '',
    apellido: '',
    edad: '',
    correo: '',
    ciudad: ''
  }

  $scope.agregarUsuario = function() {
    UsuarioFactory.save({
      nombre: $scope.nuevoUsuario.nombre,
      apellido: $scope.nuevoUsuario.apellido,
      edad: $scope.nuevoUsuario.edad,
      correo: $scope.nuevoUsuario.correo,
      ciudad: $scope.nuevoUsuario.ciudad
    }).$promise.then(
      function success(respuesta) {
        toastr.success('Éxito!', 'Se ingresó el Nuevo Usuario');
      },
      function error(error) {
        toastr.error('Error!', 'No se ingresó el Nuevo Usuario');
        console.log(error);
      });
  }
}]);
