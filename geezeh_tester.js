var traceur = require('traceur');
traceur.experimental = true;

traceur.require.makeDefault(function(filename) {
  if (filename.indexOf("Geezeh.js") != -1) {
    return true;
  } else {
    return false;
  }
});

var Geezeh = require('./Geezeh.js');

var geezeh = new Geezeh();
geezeh.bar();