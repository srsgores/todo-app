import Route from "@ember/routing/route";

export default class TasksTaskRoute extends Route {
	model(params) {
		return this.store.find("todo", params.task_id);
	}
}
