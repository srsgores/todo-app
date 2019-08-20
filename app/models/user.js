import DS from "ember-data";

const {Model} = DS;

export default Model.extend({
	name: DS.attr("string"),
	role: DS.attr("string"),
	imageURL: DS.attr("string"),
	online: DS.attr("boolean"),
	email: DS.attr("string"),
	messages: DS.hasMany("message"),
	todos: DS.hasMany("todo")
});
