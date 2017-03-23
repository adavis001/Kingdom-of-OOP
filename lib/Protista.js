
var Eukaryota = require('./Eukaryota');

module.exports = class Fungi extends Eukaryota {

	constructor(name,uniCellular, mobile, heterotroph){
		super(name,uniCellular, true, mobile, heterotroph);
	}

};