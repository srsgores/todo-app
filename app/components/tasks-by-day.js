import Component from "@glimmer/component";
import {computed} from "@ember/object";

export default class TasksByDayComponent extends Component {
	@computed.filterBy("args.tasks", "dueDate", Boolean) tasksWithDueDate;
	get tasksByDueDate() {
		let groupedTasksByDate = {};
		if (this.tasksWithDueDate) {
			this.args.tasks.forEach((task) => {
				const day = task.dueDate?.getDay();
				if (day) {
					groupedTasksByDate[day] = groupedTasksByDate[day] ? [...groupedTasksByDate[day], task] : [task];
				}
			});
		}
		return groupedTasksByDate;
	}
}
