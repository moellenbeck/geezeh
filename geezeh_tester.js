var traceur = require("./node_modules/traceur/bin/traceur");
traceur.experimental = true;

var Geezeh = require('./Geezeh.js');

var geezeh = new Geezeh();
geezeh.bar();