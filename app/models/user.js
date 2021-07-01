import {attr, belongsTo, hasMany} from "@ember-data/model";
import {Model} from "ember-pouch";

export default class UserModel extends Model {
	@attr("string") name;
	@attr("string") role;
	@attr("boolean") imageURL;
	@belongsTo("status") status;
	@hasMany("message", {inverse: "owner"}) inbox;
	@hasMany("task") tasks;
}
