import {attr, hasMany} from "@ember-data/model";
import {Model} from "ember-pouch";

export default class UserModel extends Model {
	@attr("string") name;
	@attr("string") role;
	@attr("boolean") imageURL;
	@attr("string") online;
	@hasMany("message") email;
	@hasMany("task") messages;
}
