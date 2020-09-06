import {filter, sort} from "@ember/object/computed";
import Component from "@glimmer/component";
import {tracked} from "@glimmer/tracking";

export default class TaskTimelineComponent extends Component {
	title = "Tasks";
	@tracked startFilterDate;
	@filter("args.tasks", ["startFilterDate"], function(task) {
		return task.get("createdAt") >= this.startFilterDate;
	}) filteredTasks;
	@sort("filteredTasks", "taskSorting") sortedFilteredTasks;

	get taskSorting() {
		return this.args.taskSorting || ["createdAt:desc"];
	}

	constructor() {
		super(...arguments);
		const dayIntervals = [-1, -14, -7, 7, 14];
		this.startDates = dayIntervals.map((interval) => {
			const today = new Date();
			const otherDate = today.getDate() + interval;
			today.setDate(otherDate);
			return today;
		});
		this.startFilterDate = this.startDates[0];
	}
}
