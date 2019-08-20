import DS from "ember-data";
import Task from "./task";

export default Task.extend({
	from: DS.belongsTo("user"),
	to: DS.belongsTo("user"),
	subject: DS.attr("string"),
	body: DS.attr("string")
});
