import Component from "@ember/component";
import {computed} from "@ember/object";

export default Component.extend({
	task: null,
	classNameBindings: ["hasTitle", "hasDueDate", "hasDescription", "isEditing"],
	isEditing: false,
	hasTitle: computed.notEmpty("task.title"),
	hasDueDate: computed.notEmpty("task.dueDate"),
	hasDescription: computed.notEmpty("task.description"),
	actions: {
		onSave(task) {
			return task.save().finally(() => {
				this.toggleProperty("isEditing")
			});
		}
	},
	init() {
		if (!this.get("hasTitle")) {
			this.set("isEditing", true);
		}
		return this._super(...arguments);
	}
});
