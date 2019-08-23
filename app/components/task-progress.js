import Component from "@ember/component";
import {computed} from "@ember/object";

export default Component.extend({
	tagName: "article",
	classNameBindings: [":task-progress", ":widget"],
	tasksCount: computed.alias("tasks.length"),
	tasksRemaining: computed.filterBy("tasks", "complete", false),
	tasksRemainingCount: computed.alias("tasksRemaining.length"),
	tasksCompleted: computed.filterBy("tasks", "complete", true),
	tasksCompletedCount: computed.alias("tasksCompleted.length"),
	tasksToday: computed.gte("tasks", "today"),
	incompleteTasksToday: computed.filterBy("tasksToday", "complete", false)
});
