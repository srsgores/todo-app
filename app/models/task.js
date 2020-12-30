import {attr, belongsTo, hasMany} from "@ember-data/model";
import {Model} from "ember-pouch";

export default class TaskModel extends Model {
	@attr("string") title;
	@attr("string") description;
	@attr("boolean") complete;
	@attr("date") createdAt;
	@attr("date") dueDate;
	@attr({
		defaultValue() {
			return {};
		}
	}) dueDateByDays;
	@attr() dueDateApplicableTimes;
	@belongsTo("task", {inverse: "tasks"}) parentTask;
	@hasMany("task", {inverse: "parentTask"}) tasks;
}
