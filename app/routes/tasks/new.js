import Route from "@ember/routing/route";

export default Route.extend({
	beforeModel() {
		const createdTask = this.store.createRecord("task");
		return createdTask.save().then((savedTask) => {
			return this.transitionTo("tasks.task", savedTask);
		});
	}
});
