app.controller('HomeController', ['$scope', '$http', 'toastr', 'UsuarioFactory', function($scope, $http, toastr, UsuarioFactory) {
  toastr.info('Info', 'Se cargo la vista Home');

  UsuarioFactory.query().$promise.then(
    function success(respuesta) {
      toastr.success('Éxito!', 'Se obtuvieron los Usuarios');
      $scope.usuarios = respuesta;
    },
    function error(error) {
      toastr.error('Error!', 'No se obtuvieron los Usuarios');
      console.log(error);
    });

  $scope.editarUsuario = function(usuario) {
    UsuarioFactory.update({
      idUsuario: usuario.id
    }, {
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      edad: usuario.edad,
      correo: usuario.correo,
      ciudad: usuario.ciudad
    }).$promise.then(
      function success(respuesta) {
        toastr.success('Éxito!', 'Se actualizó el Usuario');
      },
      function error(error) {
        toastr.error('Error!', 'No se actualizó el Usuario');
        console.log(error);
      });
  }
}]);
