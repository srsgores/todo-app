import {filter, sort} from "@ember/object/computed";
import Component from "@ember/component";

export default Component.extend({
	tagName: "aside",
	title: "Tasks",
	filterName: "Last 7 Days",
	tasks: null,
	filteredTasks: filter("tasks", ["startFilterDate"], function(task) {
		return task.get("createdAt") >= this.startFilterDate;
	}),
	sortedFilteredTasks: sort("filteredTasks", "taskSorting"),
	taskSorting: Object.freeze(["createdAt:desc"]),
	startFilterDate: null,
	classNameBindings: [":widget"],
	init() {
		const dayIntervals = [-1, 7, 14];
		this.set("startDates", dayIntervals.map((interval) => {
			const today = new Date();
			const otherDate = today.getDate() + interval;
			today.setDate(otherDate);
			return today;
		}));
		this.set("startFilterDate", this.get("startDates.firstObject"));
		return this._super(...arguments);
	},
	actions: {
		setFilterDate(day) {
			return this.set("startFilterDate", day);
		}
	}
});
