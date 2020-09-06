import Model, {attr} from "@ember-data/model";

export default class TaskModel extends Model {
	@attr("string") title;
	@attr("string") text;
	@attr("boolean") complete;
	@attr("date") createdAt;
	@attr("date") dueDate;
}
