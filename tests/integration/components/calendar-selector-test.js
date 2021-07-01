import {module, test} from "qunit";
import {setupRenderingTest} from "ember-qunit";
import {render} from "@ember/test-helpers";
import {hbs} from "ember-cli-htmlbars";

module("Integration | Component | calendar-selector", function(hooks) {
	setupRenderingTest(hooks);

	test("it renders", async function(assert) {
		await render(hbs`<CalendarSelector/>`);

		assert.equal(this.element.textContent.trim(), "");

		// Template block usage:
		await render(hbs`
			<CalendarSelector>template block text</CalendarSelector>
		`);

		assert.equal(this.element.textContent.trim(), "template block text");
	});
});
