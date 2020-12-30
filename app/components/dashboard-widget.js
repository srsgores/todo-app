import Component from "@glimmer/component";
import {computed} from "@ember/object";

export default class DashboardWidgetComponent extends Component {
	@computed.notEmpty("args.title") hasTitle;
}
