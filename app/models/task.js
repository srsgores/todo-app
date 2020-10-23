import Model, {attr, belongsTo, hasMany} from "@ember-data/model";

export default class TaskModel extends Model {
	@attr("string") title;
	@attr("string") text;
	@attr("boolean") complete;
	@attr("date") createdAt;
	@attr("date") dueDate;
	@belongsTo("task", {inverse: "tasks"}) parentTask;
	@hasMany("task", {inverse: "parentTask"}) tasks;
}
