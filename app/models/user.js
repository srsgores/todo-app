import Model, {attr, hasMany} from "@ember-data/model";

export default class UserModel extends Model {
	@attr("string") name;
	@attr("string") role;
	@attr("boolean") imageURL;
	@attr("string") online;
	@hasMany("message") email;
	@hasMany("task") messages;
}
