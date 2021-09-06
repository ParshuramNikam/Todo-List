import React from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";
import ClearTodo from "./Components/ClearTodo";

const App = () => {
	return (
		<div>
			<TodoInput />
			<TodoList />
			<ClearTodo />
		</div>
	);
};

export default App;
