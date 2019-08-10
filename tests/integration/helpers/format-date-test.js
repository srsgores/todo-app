import {render} from "@ember/test-helpers";
import {setupRenderingTest} from "ember-qunit";
import hbs from "htmlbars-inline-precompile";
import {module, test} from "qunit";

module("Integration | Helper | format-date", function(hooks) {
	setupRenderingTest(hooks);

	// Replace this with your real tests.
	test("it renders", async function(assert) {
		this.set("inputValue", "1234");

		await render(hbs`{{format-date inputValue}}`);

		assert.equal(this.element.textContent.trim(), "1234");
	});
});
