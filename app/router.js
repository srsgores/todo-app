import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
	location: config.locationType,
	rootURL: config.rootURL
});

Router.map(function() {
	this.route("tasks", function() {
		this.route("new");
		this.route("task", {path: ":task_id"});
	});
	this.route("notifications");
	this.route("settings");
	this.route("inbox");
});

export default Router;
