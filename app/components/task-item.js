import {notEmpty} from "@ember/object/computed";
import Component from "@glimmer/component";
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";
import {guidFor} from "@ember/object/internals";

export default class TaskItemComponent extends Component {
	@tracked isEditing = false;
	elementId = guidFor(this);
	@notEmpty("args.task.title") hasTitle;
	@notEmpty("args.task.dueDate") hasDueDate;
	@notEmpty("args.task.description") hasDescription;

	@action
	async onSave(submitEvent) {
		submitEvent.preventDefault();
		await this.args.task.save();
		this.isEditing = !this.isEditing;
	}

	constructor() {
		super(...arguments);
		if (!this.hasTitle) {
			this.isEditing = true;
		}
	}
}
