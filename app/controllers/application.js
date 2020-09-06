import Controller from "@ember/controller";

export default class ApplicationController extends Controller {
	filter = null;
	queryParams = ["filter"]
}
