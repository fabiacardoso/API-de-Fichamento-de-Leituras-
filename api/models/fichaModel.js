'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fichaSchema = new Schema({
  tema:{
    type: String,
    required: 'Por favor digite o tema'
  },
  palavra_chave:{
    type: String,
    required: 'Por favor digite as palavras chave'
  },
  tituloLivro:{
    type: String,
    required: 'Por favor digite o titulo do livro, revista, artigo etc.'
  },
  autor:{
    type: String,
    required: 'Por favor digite o nome do autor'
  },
  citacao:{
    type: String,
    required: 'Por favor digite citação'
  },
  pagina:{
    type: String,
    required: 'Por favor digite a página onde está esta citação'
  },
  comentario:{
    type: String,
    required: 'Digite seu comentátio'
  },
  referencia:{
    type: String,
    required: 'Digite sua referência'
  },
  disponivel_em:{
    type: String,
    required: 'Digite aqui a origem do livro, artigo, revista etc. Ex.: link do site, nome da revista...'
  },
  acessado_em:{
    type: String,
    required: 'Informe a data em que você leu está citação. Ex.:04 de julho 2021'
  },

});

module.exports = mongoose.model('ficha', fichaSchema);