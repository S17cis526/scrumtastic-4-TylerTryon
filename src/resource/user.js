module.exports = {
	create: create,
	update: update,
	read: read
}

var json = require('./../lib/form-json');
var encryption = 

function crate(req, res){
	json(req, res, function(req, res){
		var user = req.body;
		var salt = encryption.salt;
		var cryptedPassword = encryption.digest(user.password + salt);
		db.run('INSERT INTO users (eid, email, firstName, lastName, cryptedPassword, salt) VALUES (?,?,?,?,?,?)', [
		user.edi,
		user.email,
		user.firstName,
		user.lastName,
		cryptedPassword;
		salt;
		);
	});
}

function read(req, res, db) {
	var id = req.params.id;
	db.get('SELECT edi, email, firstName, lastName FROM user WHERE id=?', [id], function(user) {
		res.setHeader("Content-Type", "text/json");
		res.end(JSON.stringify(user));
	});
}
