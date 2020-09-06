import {alias, filterBy} from "@ember/object/computed";
import Component from "@glimmer/component";
import {guidFor} from "@ember/object/internals";

export default class TaskProgressComponent extends Component {
	elementId = guidFor(this);
	@alias("args.tasks.length") tasksCount;
	@filterBy("args.tasks", "complete", false) tasksRemaining;
	@alias("tasksRemaining.length") tasksRemainingCount;
	@filterBy("args.tasks", "complete", true) tasksCompleted;
	@alias("tasksCompleted.length") tasksCompletedCount;
}
