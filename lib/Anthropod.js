'use strict';

var Bilateral = require('./Bilateral');

module.exports = class Anthropod extends Bilateral {

	constructor(name){
		super(name, "exoskeleton");
	}
};