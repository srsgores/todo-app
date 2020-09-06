import Route from "@ember/routing/route";
import {action} from "@ember/object";

export default class ApplicationRoute extends Route {
	setupController(controller, model) {
		controller.setProperties({
			session: {
				currentUser: {
					role: "Designer",
					name: "John Doe"
				}
			}
		});
		return super.setupController(controller, model);
	}
	@action addTask() {
		return this.store.createRecord("task", {createdAt: new Date()});
	}
}
