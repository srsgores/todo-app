import Route from "@ember/routing/route";

export default class TasksRoute extends Route {
	model() {
		return this.store.findAll("task");
	}
}
