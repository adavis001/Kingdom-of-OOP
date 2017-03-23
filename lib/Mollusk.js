'use strict';

var Bilateral = require('./Bilateral');

module.exports = class Mollusk extends Bilateral {

	constructor(name){
		super(name, "soft-bodied");
	}
};