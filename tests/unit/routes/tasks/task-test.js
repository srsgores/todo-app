import {setupTest} from "ember-qunit";
import {module, test} from "qunit";

module("Unit | Route | tasks/task", function(hooks) {
	setupTest(hooks);

	test("it exists", function(assert) {
		let route = this.owner.lookup("route:tasks/task");
		assert.ok(route);
	});
});
