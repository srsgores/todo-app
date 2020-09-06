import {notEmpty} from "@ember/object/computed";
import Component from "@ember/component";
import {debounce} from "@ember/runloop";

export default Component.extend({
	tagName: "form",
	attributeBindings: ["role", "method", "action"],
	classNameBindings: [":task-search", "hasValue"],
	hasValue: notEmpty("filter"),
	role: "search",
	method: "GET",
	action: "/",
	searchLabel: "Quick Find...",
	actions: {
		debounceSearch(value) {
			return debounce(this, this.onSearch, value, 1000);
		}
	}
});
