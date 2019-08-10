import Route from "@ember/routing/route";

export default Route.extend({
	setupController(controller, model) {
		const today = new Date();
		controller.setProperties({
			today: [today.getFullYear(), today.getUTCMonth(), today.getUTCDay()].join("-")
		});
		return this._super(controller, model);
	}
});
