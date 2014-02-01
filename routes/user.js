var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/appyusuarioteste");
var Schema = mongoose.Schema;

var Usuario = mongoose.model("usuario", new Schema({
	ds_email: {type: String, required: true},
	ds_senha: {type: String, required: true},
	nm_usuario: {type: String, required: true}
}));

exports.addUsuario = function(req, res) {
	var usuario = new Usuario(req.body);
	usuario.save(function(error, data) {
		if(error){
			res.send(500);
		}
		res.json({usuario : data});
	});
};

exports.removeUsuario = function(req, res) {

};

exports.findAll = function(req, res) {
	Usuario.find({}, function(error, lista){
		if(error){
			res.send(500);
		}
		res.json({usuarios : lista});
	});
};

exports.findByEmail = function(req, res) {
	var email = req.params.ds_email;
	if(!email){
		console.log("deu merda");
		res.send(500);
	}
	Usuario.findOne({ds_email : email}, function(error, data){
		if(error){
			res.send(500);
		}
		res.json({usuario : data});
	});
};