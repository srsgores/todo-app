import {notEmpty} from "@ember/object/computed";
import Component from "@ember/component";

export default Component.extend({
	task: null,
	classNameBindings: [":task-item", "hasTitle", "hasDueDate", "hasDescription", "isEditing", "task.complete"],
	isEditing: false,
	hasTitle: notEmpty("task.title"),
	hasDueDate: notEmpty("task.dueDate"),
	hasDescription: notEmpty("task.description"),
	actions: {
		onSave(task) {
			return task.save().finally(() => {
				this.toggleProperty("isEditing");
			});
		},
		remove(task) {
			return task.destroyRecord();
		}
	},
	init() {
		if (!this.hasTitle) {
			this.set("isEditing", true);
		}
		return this._super(...arguments);
	}
});
