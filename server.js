var express = require("express");
var ip = require("ip");

var app = express();

app.get("/", function(req, res){
	var language = req.headers["accept-language"];
	var software = req.headers["user-agent"];
	var l = language.split(',');
	language = l[0];
	var s = software.split('(');
	software = s[1];
	s = software.split(')');
	software = s[0];
	var obj = {
		ip: ip.address(),
		language: language,
		software: software
	};
	res.json(obj);
});
app.listen(process.env.PORT||8080);