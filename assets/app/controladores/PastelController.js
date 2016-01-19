app.controller('PastelController', ['$scope', '$http', 'toastr', '$stateParams', 'PastelFactory', function($scope, $http, toastr, $stateParams, PastelFactory) {
  toastr.info('Info', 'Se cargo la vista Pastel');

  PastelFactory.busquedaPorIdUsuario({
    idUsuario: $stateParams.idUsuario
  }).$promise.then(
    function success(respuesta) {
      toastr.success('Éxito!', 'Se obtuvieron los Pasteles');
      $scope.pasteles = respuesta;
    },
    function error(error) {
      toastr.error('Error!', 'No se obtuvieron los Pasteles');
      console.log(error);
    });
}]);
