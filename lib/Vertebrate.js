'use strict';

var Bilateral = require('./Bilateral');

module.exports = class Vertebrate extends Bilateral {

	constructor(name){
		super(name, "vertebral-column");
	}
};