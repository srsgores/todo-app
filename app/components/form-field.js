import Component from "@ember/component";
import {computed} from "@ember/object";

export default Component.extend({
	value: null,
	classNameBindings: [":form-field", "hasValue"],
	hasValue: computed.notEmpty("value")
});
