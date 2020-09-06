import Model, {attr, hasMany} from "@ember-data/model";

export default Model.extend({
	name: attr("string"),
	role: attr("string"),
	imageURL: attr("string"),
	online: attr("boolean"),
	email: attr("string"),
	messages: hasMany("message"),
	tasks: hasMany("task")
});
