import Component from "@ember/component";
import {debounce} from "@ember/runloop";

export default Component.extend({
	tagName: "form",
	attributeBindings: ["role", "method", "action"],
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
