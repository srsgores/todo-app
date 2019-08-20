export default function() {
	this.get("/tasks", () => {
		return {
			data: [
				{id: 1, type: "tasks", attributes: {title: "Make my bed", text: "Make my bed", complete: false, "created-at": new Date()}}
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
