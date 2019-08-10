import {render} from "@ember/test-helpers";
import {setupRenderingTest} from "ember-qunit";
import hbs from "htmlbars-inline-precompile";
import {module, test} from "qunit";

module("Integration | Component | todo-item", function(hooks) {
	setupRenderingTest(hooks);

	test("it renders", async function(assert) {
		// Set any properties with this.set('myProperty', 'value');
		// Handle any actions with this.set('myAction', function(val) { ... });

		await render(hbs`<TodoItem />`);

		assert.equal(this.element.textContent.trim(), "");

		// Template block usage:
		await render(hbs`
      <TodoItem>
        template block text
      </TodoItem>
    `);

		assert.equal(this.element.textContent.trim(), "template block text");
	});
});
