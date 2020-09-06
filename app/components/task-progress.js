import {alias, filterBy} from "@ember/object/computed";
import Component from "@ember/component";

export default Component.extend({
	tagName: "aside",
	tasksCount: alias("tasks.length"),
	tasksRemaining: filterBy("tasks", "complete", false),
	tasksRemainingCount: alias("tasksRemaining.length"),
	tasksCompleted: filterBy("tasks", "complete", true),
	tasksCompletedCount: alias("tasksCompleted.length")
});
