import {helper} from "@ember/component/helper";

export default helper(function formatDate([date]) {
	return (date && date instanceof Date) ? [date.getFullYear(), date.getUTCMonth(), date.getUTCDay()].join("-") : undefined;
});
