import Component from "@ember/component";
import {debounce} from "@ember/runloop";
import {computed} from "@ember/object";

export default Component.extend({
	tagName: "form",
	attributeBindings: ["role", "method", "action"],
	classNameBindings: [":task-search", "hasValue"],
	hasValue: computed.notEmpty("filter"),
	role: "search",
	method: "GET",
	action: "/",
	searchLabel: "Quick Find...",
	actions: {
		debounceSearch(value) {
			return debounce(this, this.get("onSearch"), value, 1000);
		}
	}
});
