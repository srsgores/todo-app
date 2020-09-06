import {attr, belongsTo} from "@ember-data/model";
import Task from "./task";

export default class MessageModel extends Task {
	@belongsTo("user") from;
	@belongsTo("user") to;
	@attr("string") subject;
	@attr("string") body;
}
