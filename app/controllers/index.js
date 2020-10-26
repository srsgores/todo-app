import Controller from "@ember/controller";
import {action, computed} from "@ember/object";

export default class IndexController extends Controller {
	queryParams = ["viewMode"];
	@computed.equal("viewMode", "calendar") isCalendarMode;
	@action
	async addTask() {
		const task = this.store.createRecord("task", {createdAt: new Date()});
		return task.save();
	}
}
