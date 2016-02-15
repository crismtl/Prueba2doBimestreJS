/**
 * PastelController
 *
 * @description :: Server-side logic for managing Pastels
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    suscribirseOPublicar: function (req, res) {
        console.log('Entro a la función del Controlador Pastel');
        var parametros = req.params.all();

        if (req.isSocket && req.method === 'POST') {
            console.log('Es un websocket y usa un método POST', parametros.texto);

            Pastel.create({
                nombre: parametros.nombre,
                tipo: parametros.tipo,
                preparacion: parametros.preparacion,
                idUsuario: parametros.idUsuario
            }).exec(function (err, nuevoPastel) {
                if (err) console.log(err);

                console.log('se creo el pastel: ', nuevoPastel);

                Pastel.publishCreate({
                    nombre: nuevoPastel.nombre,
                    tipo: nuevoPastel.tipo,
                    preparacion: nuevoPastel.preparacion,
                    idUsuario: nuevoPastel.idUsuario
                });
            });
        } else if (req.isSocket) {
            Pastel.watch(req.socket);
            console.log('Se ha suscrito con el id de socket: ' + req.socket.id);
            return res.ok('Suscrito con el id: ' + req.socket.id);

        } else {
            console.log('Bad Request');
        }
    }
};