import EmberRouter from "@ember/routing/router";
import config from "todo-app/config/environment";

export default class Router extends EmberRouter {
	location = config.locationType;
	rootURL = config.rootURL;
}

Router.map(function() {
	this.route("tasks", function() {
		this.route("new");
		this.route("task", {path: ":task_id"});
	});
	this.route("notifications");
	this.route("settings");
	this.route("inbox");
});
