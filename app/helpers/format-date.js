import {helper} from "@ember/component/helper";

export default helper(function formatDate(params/*, hash*/) {
	return (params && params[0] && params[0] instanceof Date) ? [params[0].getFullYear(), params[0].getUTCMonth(), params[0].getUTCDay()].join("-") : params;
});
