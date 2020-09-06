import {notEmpty} from "@ember/object/computed";
import Component from "@glimmer/component";
import {debounce} from "@ember/runloop";
import {action} from "@ember/object";
import {guidFor} from "@ember/object/internals";

export default class TaskSearchComponent extends Component {
	elementId = guidFor(this);

	@notEmpty("args.filter") hasValue;

	get searchLabel() {
		return this.args.searchLabel || "Quick Find...";
	}

	@action debounceSearch(value) {
		return debounce(this, this.args.onSearch, value, 1000);
	}
}
