import Component from "@glimmer/component";

export default class CalendarSelectorComponent extends Component {
	get dayRange() {
		return this.args.dayRange || 7;
	}
	get timeSegmentCount() {
		return this.args.timeSegmentCount || 24;
	}
	get timeSegments() {
		const today = new Date();
		const tomorrow = new Date();
		tomorrow.setDate(today.getDate() + 1);
		const millisecondsInDay = tomorrow.getTime() - today.getTime();
		const timeIncrement = millisecondsInDay / this.timeSegmentCount;
		return [...Array(this.timeSegmentCount)].map(function(index) {
			const time = new Date();
			time.setTime(today.getTime() + timeIncrement * index);
			return time;
		});
	}
	get days() {
		let dayDate = new Date();
		return [...Array(this.dayRange)].map(function(index) {
			return dayDate.setDate(dayDate.getDate() + index);
		});
	}
}
