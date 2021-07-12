'use strict'

module.exports = function(app){
  var fichaController = require('../controllers/fichaController')

  app.route('/ficha')
    .get(fichaController.lista_todas_as_fichas)
    .post(fichaController.adiciona_uma_ficha)

  app.route('/ficha/:fichaId')
    .get(fichaController.lista_uma_ficha)
    .put(fichaController.atualiza_uma_ficha)
    .delete(fichaController.remove_uma_ficha)
}