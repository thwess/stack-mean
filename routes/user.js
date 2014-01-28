var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/apptestedb");
var Schema = mongoose.Schema;

var Usuario = mongoose.model("usuario", new Schema({
	ds_email: {type: String, required: true},
	ds_senha: {type: String, required: true},
	nm_usuario: {type: String, required: true},
	ds_endereco: {
		ds_pais : {type: String},
		ds_estado : {type: String},
		ds_cidade : {type: String},
		ds_bairro : {type: String},
		nr_cep : {type: String}
	},
	acesso : {
		st_usuario: {type: String, required: true},
		tp_usuario: {type: String, required: true}
	}
}));

/**
 * Salva um usuário no banco e retorna o mesmo.
 */
exports.addUsuario = function(req, res) {
	var usuario = new Usuario(req.body);
	usuario.save(function(error, data) {
		if(error){
			res.send(500);
		}
		res.json({usuario : data});
	});
};

exports.updateUsuario = function(req, res) {

};

exports.removeUsuario = function(req, res) {

};

exports.findAll = function(req, res) {

};

exports.findByEmail = function(req, res) {

};