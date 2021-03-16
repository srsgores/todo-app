import {notEmpty} from "@ember/object/computed";
import Component from "@glimmer/component";
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";
import {guidFor} from "@ember/object/internals";
import {isEmpty} from "@ember/utils";

export default class TaskItemComponent extends Component {
	@tracked isEditing = false;
	@tracked hasFlexibleDueDate = false;
	elementId = guidFor(this);
	@notEmpty("args.task.title") hasTitle;
	@notEmpty("args.task.dueDate") hasDueDate;
	@notEmpty("args.task.description") hasDescription;

	DAYS = [
		"sunday",
		"monday",
		"tuesday",
		"wednesday",
		"thursday",
		"friday",
		"saturday"
	];

	get todayDate() {
		const today = new Date();
		return [today.getFullYear(), today.getMonth(), today.getDay()].join("-");
	}

	get dueDateByDays() {
		return this.DAYS.map((day) => {
			const isDueOnDay = Boolean(this.args.task.dueDateByDays[day] && this.args.task.dueDateByDays[day].startTime);
			const dayDueDateTimes = isDueOnDay ? this.args.task.dueDateByDays[day] : {};
			return {
				day,
				selected: isDueOnDay,
				...dayDueDateTimes
			};
		});
	}

	@action async onSave() {
		return await this.args.task.save();
	}

	constructor() {
		super(...arguments);
		if (!this.hasTitle) {
			this.isEditing = true;
		}
		this.hasFlexibleDueDate = Object.values(this.args.task.dueDateByDays).some(day => !isEmpty(day.startTime));
	}
}
