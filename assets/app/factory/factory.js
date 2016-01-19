app.factory('UsuarioFactory', ['$resource', function($resource) {
  var factory = $resource('http://localhost:1337/Usuario/:idUsuario', {
    idEntrenador: '@idUsuario'
  }, {
    update: {
      method: 'PUT',
      params: {
        idUsuario: '@idUsuario'
      }

    }
  });
  return factory;
}]);

app.factory('PastelFactory', ['$resource', function($resource) {
  var factory = $resource('http://localhost:1337/Pastel/:idPastel', {
    idEntrenador: '@idPastel'
  }, {
    busquedaPorIdUsuario: {
      url: 'http://localhost:1337/Pastel?idUsuario=:idUsuario',
      method: 'GET',
      params: {
        idUsuario: '@idUsuario'
      },
      isArray: true
    }
  });
  return factory;
}]);

app.factory('IngredienteFactory', ['$resource', function($resource) {
  var factory = $resource('http://localhost:1337/Ingrediente/:idIngrediente', {
    idEntrenador: '@idIngrediente'
  });
  return factory;
}]);
