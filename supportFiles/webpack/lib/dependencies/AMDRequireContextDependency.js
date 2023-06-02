/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const makeSerializable = require("../util/makeSerializable");
const ContextDependency = require("./ContextDependency");

/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

class AMDRequireContextDependency extends ContextDependency {
	constructor(options, range, valueRange) {
		super(options);

		this.range = range;
		this.valueRange = valueRange;
	}

	get type() {
		return "amd require context";
	}

	get category() {
		return "amd";
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;

		write(this.range);
		write(this.valueRange);

		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;

		this.range = read();
		this.valueRange = read();

		super.deserialize(context);
	}
}

makeSerializable(
	AMDRequireContextDependency,
	"webpack/lib/dependencies/AMDRequireContextDependency"
);

AMDRequireContextDependency.Template = require("./ContextDependencyTemplateAsRequireCall");

module.exports = AMDRequireContextDependency;
