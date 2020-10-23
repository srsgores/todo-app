import Controller from "@ember/controller";
import {action} from "@ember/object";

export default class IndexController extends Controller {
	@action
	async addTask() {
		const task = this.store.createRecord("task", {createdAt: new Date()});
		return task.save();
	}
}
