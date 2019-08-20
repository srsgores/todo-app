import Route from "@ember/routing/route";

export default Route.extend({
	setupController(controller, model) {
		controller.setProperties({
			session: {
				currentUser: {
					role: "Designer",
					name: "John Doe"
				}
			}
		});
		return this._super(controller, model);
	}
});
