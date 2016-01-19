/**
* Pastel.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    nombre: {
      type: 'string'
    },
    tipo: {
      type: 'string',
      enum: ['hojaldre', 'azucarada', 'escaldadas', 'reposteria'],
    },
    preparacion: {
      type: 'text'
    },
    idUsuario: {
      model: 'Usuario'
    },
    ingredientes: {
      collection: 'Ingrediente',
      via: 'idPastel'
    }
  }
};
