import Component from "@ember/component";

export default Component.extend({
	message: null,
	classNameBindings: [":message-item"],
	tagName: "article"
});
