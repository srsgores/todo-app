import Component from "@ember/component";
import {computed} from "@ember/object";

export default Component.extend({
	thread: null,
	tagName: "form",
	method: "POST",
	attributeBindings: ["method"],
	classNameBindings: ["hasThread", "hasSubject", "hasRecipient", "hasBody"],
	hasThread: computed.notEmpty("thread"),
	subject: computed.alias("thread.subject"),
	hasSubject: computed.notEmpty("subject"),
	hasRecipient: computed.notEmpty("recipient"),
	hasBody: computed.notEmpty("body"),
	canSend: computed.and("hasRecipient", "hasBody")
});
