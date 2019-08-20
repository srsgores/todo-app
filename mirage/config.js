export default function() {
	this.get("/todos", () => {
		return {
			data: [
				{id: 1, type: "todos", attributes: {title: "Make my bed", text: "Make my bed", complete: false, "created-at": new Date()}}
			]
		};
	});
	this.get("/messages", () => {
		return {
			data: [
				{id: 1, type: "tasks", attributes: {title: "Make my bed", text: "Make my bed", complete: false, "created-at": new Date()}}
			]
		};
	});
}
