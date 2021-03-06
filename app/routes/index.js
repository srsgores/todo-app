import Route from "@ember/routing/route";
import RSVP from "rsvp";

export default class IndexRoute extends Route {
	model() {
		return this.store.findAll("task");
	}
	setupController(controller, model) {
		RSVP.hash({messages: this.store.findAll("message"), users: this.store.findAll("user")}).then((combinedPayload) => {
			controller.setProperties(combinedPayload);
		});
		controller.set("today", new Date());
		return super.setupController(controller, model);
	}
}
