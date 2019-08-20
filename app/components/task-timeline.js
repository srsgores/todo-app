import Component from "@ember/component";
import {computed} from "@ember/object";

export default Component.extend({
	tagName: "aside",
	title: "Tasks",
	filterName: "Last 7 Days",
	tasks: null,
	filteredTasks: computed("tasks", "startFilterDate", function() {
		return this.get("tasks").filter((task) => task.get("createdAt") >= this.get("startFilterDate"));
	}),
	startFilterDate: null,
	init() {
		const dayIntervals = [-1, -14, -7, 7, 14];
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
