import Component from "@ember/component";

export default Component.extend({
	classNameBindings: [":dashboard-widget", ":widget"],
	title: null,
	count: null
});
