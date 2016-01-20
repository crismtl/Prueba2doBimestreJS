app.controller('PastelController', ['$scope', '$http', 'toastr', '$stateParams', 'UsuarioFactory', 'PastelFactory', 'IngredienteFactory',
  function($scope, $http, toastr, $stateParams, UsuarioFactory, PastelFactory, IngredienteFactory) {
    toastr.info('Info', 'Se cargo la vista Pastel');

    $scope.nuevoPastel = {
      nombre: '',
      tipo: '',
      preparacion: ''
    }

    $scope.nuevoIngrediente = {
      nombre: ''
    }

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

    UsuarioFactory.get({
      id: $stateParams.idUsuario
    }).$promise.then(
      function success(respuesta) {
        toastr.success('Éxito!', 'Se obtuvo el Usuario');
        $scope.usuario = respuesta;
      },
      function error(error) {
        toastr.error('Error!', 'No se obtuvo el Usuario');
        console.log(error);
      });

    $scope.agregarPastel = function() {
      PastelFactory.save({
        nombre: $scope.nuevoPastel.nombre,
        tipo: $scope.nuevoPastel.tipo,
        preparacion: $scope.nuevoPastel.preparacion,
        idUsuario: $stateParams.idUsuario
      }).$promise.then(
        function success(respuesta) {
          toastr.success('Éxito!', 'Se ingresó el Nuevo Pastel');
        },
        function error(error) {
          toastr.error('Error!', 'No se ingresó el Nuevo Pastel');
          console.log(error);
        });
    }

    $scope.agregarIngrediente = function(pastel) {
      IngredienteFactory.save({
        nombre: $scope.nuevoIngrediente.nombre,
        idPastel: pastel.id
      }).$promise.then(
        function success(respuesta) {
          toastr.success('Éxito!', 'Se ingresó el Nuevo Ingrediente');
        },
        function error(error) {
          toastr.error('Error!', 'No se ingresó el Nuevo Ingrediente');
          console.log(error);
        });
    }
  }
]);
