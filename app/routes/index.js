import Route from "@ember/routing/route";
import rsvp from "rsvp";

export default Route.extend({
	model() {
		return this.store.findAll("todo");
	},
	setupController(controller, model) {
		rsvp.hash({messages: this.store.findAll("message"), users: this.store.findAll("user")}).then((combinedPayload) => {
			controller.setProperties(combinedPayload);
		});
		controller.set("today", new Date());
		return this._super(controller, model);
	}
});
