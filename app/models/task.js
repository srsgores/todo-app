import Model, {attr} from "@ember-data/model";

export default Model.extend({
	title: attr("string"),
	text: attr("string"),
	complete: attr("boolean"),
	createdAt: attr("date"),
	dueDate: attr("date")
});
