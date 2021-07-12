'use strict'

var mongoose = require('mongoose');
var ficha = mongoose.model('ficha');


//GET ALL
exports.lista_todas_as_fichas = function(req, res){
  ficha.find({}, function(err, fichas){
    if(err){
      res.send(err);
    }
    res.json(fichas);

  });
}

//GET ID
exports.lista_uma_ficha = function(req, res){
  ficha.findOne({"_id": req.params.fichaId}, function(err, ficha){
    if(err){
      res.send(err);
    }
    res.json(ficha);

  });
}

//POST
exports.adiciona_uma_ficha = function(req, res){
  var nova_ficha = new ficha(req.body);
  nova_ficha.save(function(err, ficha){
    if(err){
      res.send(err);
    }
    res.json(ficha);

  });
}

//PUT
exports.atualiza_uma_ficha = function(req, res){
  ficha.findOneAndUpdate({_id: req.params.fichaId}, req.body, {new: true}, 
    function(err, ficha){
      if(err){
        res.send(err);
      }
        res.json(ficha);
    });
}

//DELETE
exports.remove_uma_ficha = function(req, res){
  ficha.remove({_id: req.params.fichaId}, function(err, ficha){
    if(err){
      res.send(err);
    }
    res.json({"Mensagem": "Ficha deletada com sucesso!"});
  });
}