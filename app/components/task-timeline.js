import {filter, sort} from "@ember/object/computed";
import Component from "@glimmer/component";
import {tracked} from "@glimmer/tracking";
import {guidFor} from "@ember/object/internals";

export default class TaskTimelineComponent extends Component {
	componentID = guidFor(this);
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
			let today = new Date();
			const otherDate = today.getDate() + interval;
			today.setDate(otherDate);
			return today;
		});
		this.startFilterDate = null;
	}
}
