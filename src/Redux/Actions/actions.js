export const addTodo = (todo) => {
	return {
		type: "ADD_TODO",
		payload: {
			id: new Date().getTime().toString(),
			todo,
		},
	};
};

export const removeTodo = (id) => {
	return {
		type: "REMOVE_TODO",
		payload: {
			id,
		},
	};
};

export const clearAllTodos = () => {
	return {
		type: "CLEAR_ALL_TODOS",
	};
};
