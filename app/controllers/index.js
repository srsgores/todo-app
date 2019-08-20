import Controller from "@ember/controller";
import {computed} from "@ember/object";

export default Controller.extend({
	tasksCount: computed.alias("model.length"),
	tasksRemainingCount: computed.filterBy("model", "complete", false),
	tasksCompleted: computed.filterBy("model", "complete", true),
	tasksCompletedCount: computed.alias("tasksCompleted.length"),
	tasksToday: computed.gte("model", "today"),
	incompleteTasksToday: computed.filterBy("tasksToday", "complete", false)
});
