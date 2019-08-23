import DS from "ember-data";
import Task from "./task";
import {computed} from "@ember/object";

export default Task.extend({
	from: DS.belongsTo("user", {inverse: null}),
	to: DS.belongsTo("user", {inverse: null}),
	subject: DS.attr("string"),
	title: computed.alias("subject"),
	text: computed.alias("body"),
	body: DS.attr("string")
});
