"use strict";

module.exports = class LivingThing {
	constructor(name, uniCellular, trueNucleus, anaerobic, asexual, mobile) {
		this._name = name;
		this._uniCellular = uniCellular;
		this._trueNucleus = trueNucleus;
		this._anaerobic = anaerobic;
		this._asexual = asexual;
		this._mobile = mobile;
	}

	get name() {
		return this._name;
	}

	set name(str) {
		if (typeof str !== "string") {
			throw new TypeError("Please input valid name.");
		}
		this._name = str;
	}

	get uniCellular() {
		return this._uniCellular;
	}

	set uniCellular(str) {
		if(str === true || str === false){
			this._uniCellular = str;
		} else {
			throw new TypeError("Please insert either 'true' or 'false'.");
		}
	}

	get multiCellular() {
		return !this._uniCellular;
	}

	set multiCellular(uniCellular) {
		this._uniCellular = !uniCellular;
	}

	get eukaryote() {
		return this._trueNucleus;
	}
	set eukaryote(trueNucleus){
		this._trueNucleus = trueNucleus;
	}

	get prokaryote() {
		return !this._trueNucleus;
	}
	set prokaryote(trueNucleus) {
		this._trueNucleus = !trueNucleus;
	}
	
};