export default function() {
	this.get("/tasks", () => {
		return {
			data: [
				{id: 1, type: "tasks", attributes: {title: "Make my bed", text: "Lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum", complete: false, "created-at": new Date()}},
				{id: 2, type: "tasks", attributes: {title: "Do the dishes", text: "Lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum", complete: false, "created-at": new Date()}},
				{id: 3, type: "tasks", attributes: {title: "Walk the dog", text: "Lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum", complete: false, "created-at": new Date()}},
				{id: 4, type: "tasks", attributes: {title: "Make lunch", text: "Lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum", complete: false, "created-at": new Date()}},
			]
		};
	});
	this.get("/messages", () => {
		return {
			data: [
				{id: 1, type: "messages", attributes: {title: "Make my bed", text: "Make my bed", complete: false, "created-at": new Date()}}
			]
		};
	});
}
