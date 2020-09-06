import Route from "@ember/routing/route";

export default class TasksNewRoute extends Route {
	beforeModel() {
		const createdTask = this.store.createRecord("task");
		return createdTask.save().then((savedTask) => {
			return this.transitionTo("tasks.task", savedTask);
		});
	}
}
