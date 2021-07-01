import {attr} from "@ember-data/model";
import {Model} from "ember-pouch";

export default class StatusModel extends Model {
	@attr("string") name;
}
