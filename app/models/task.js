import DS from "ember-data";

const {Model} = DS;

export default Model.extend({
	title: DS.attr("string"),
	text: DS.attr("string"),
	complete: DS.attr("boolean"),
	createdAt: DS.attr("date"),
	dueDate: DS.attr("date")
});
