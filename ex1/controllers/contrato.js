const mongoose = require('mongoose')
var Contrato = require("../models/contrato")

module.exports.list = () => {
    return Contrato
        .find()
        .exec()
}

module.exports.listContratosByTipo = (tipo) => {
    return Contrato
        .find({"tipoprocedimento": tipo})
        .exec()
}

// GET /plantas
module.exports.listContratosByEntidade = (entidade) => {
    return Contrato
        .find({"NIPC_entidade_comunicante": entidade})
        .exec()
}



module.exports.listEntidades = () => {
    return Contrato
        .distinct("entidade_comunicante")
        .sort()
        .exec()
}



module.exports.listTipos = () => {
    return Contrato
        .distinct("tipoprocedimento")
        .sort()
        .exec()
}


module.exports.findById = id => {
    return Contrato
        .findOne({idcontrato : id})
        .exec()
}

module.exports.insert = contrato => {
    return Contrato.create(contrato)
}

module.exports.update = (id, contrato) => {
    return Contrato
        .findOneAndUpdate({ idcontrato: id }, contrato, { new: true })
        .exec()
}

module.exports.remove = id => {
    return Contrato
        .deleteOne({idcontrato : id})
        .exec()
}