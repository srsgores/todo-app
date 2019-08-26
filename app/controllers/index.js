import Controller from "@ember/controller";

export default Controller.extend({
	actions: {
		addTask() {
			return this.store.createRecord("task", {createdAt: new Date()});
		}
	}
});
