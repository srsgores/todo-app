import Route from "@ember/routing/route";

export default Route.extend({
	setupController(controller, model) {
		const activeUserPromise = this.store.find("user", 1);
		return activeUserPromise.then((activeUser) => {
			controller.set("session", {currentUser: activeUser});
			return this._super(controller, model);
		});
	},
	actions: {
		addTask() {
			return this.store.createRecord("task", {createdAt: new Date()});
		}
	}
});
