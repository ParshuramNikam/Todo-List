const initialState = {
	todoList: [],
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TODO":
			const { id, todo } = action.payload;
			return {
				...state,
				todoList: [
					...state.todoList,
					{
						id,
						todo,
					},
				],
			};

		case "REMOVE_TODO":
			const newTodoList = state.todoList.filter(
				(todoItem) => todoItem.id !== action.payload.id
			);
			return {
				...state,
				todoList: newTodoList,
			};

		case "CLEAR_ALL_TODOS":
			return {
				...state,
				todoList: [],
			};

		default:
			return state;
	}
};

export default todoReducer;
