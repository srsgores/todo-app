export default function() {
	const activeUser = {
		id: 1,
		type: "users",
		attributes: {
			name: "Ellen Ramos",
			role: "UX/UI Designer",
			"image-url": "https://images.unsplash.com/photo-1482849297070-f4fae2173efe?auto=format&fit=crop&w=600&h=600&q=160"
		}
	};
	this.get("/tasks", () => {
		return {
			data: [
				{id: 1, type: "tasks", attributes: {title: "Make my bed", text: "Lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum", complete: false, "created-at": new Date()}},
				{id: 2, type: "tasks", attributes: {title: "Do the dishes", text: "Lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum", complete: false, "created-at": new Date()}},
				{id: 3, type: "tasks", attributes: {title: "Walk the dog", text: "Lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum", complete: false, "created-at": new Date()}},
				{id: 4, type: "tasks", attributes: {title: "Make lunch", text: "Lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum", complete: false, "created-at": new Date()}}
			]
		};
	});
	this.get("/users", () => {
		return {
			data: [
				activeUser,
				{
					id: 2,
					type: "users",
					attributes: {
						name: "John Doe",
						role: "Developer",
						"image-url": "https://images.unsplash.com/photo-1482961674540-0b0e8363a005?auto=format&fit=crop&w=1950&q=80"
					}
				}
			]
		}
	});
	this.get("/users/1", () => {
		return {
			data: activeUser
		}
	});
	this.get("/messages", () => {
		return {
			data: [
				{
					id: 1,
					type: "messages",
					attributes:
						{
							subject: "Mei eu dicunt utamur groccis.  Vel ad eipuit laboritis perinax.",
							body: "Lorem ipsum text.",
							complete: false,
							"created-at": new Date()
						},
					relationships: {
						from: {
							data: {type: "users", id: 1}
						},
						to: {
							data: {type: "users", id: 2}
						}
					}
				}
			]
		};
	});
}
