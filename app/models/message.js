import DS from "ember-data";
import Todo from "./todo";

export default Todo.extend({
	from: DS.belongsTo("user"),
	to: DS.belongsTo("user"),
	subject: DS.attr("string"),
	body: DS.attr("string")
});
