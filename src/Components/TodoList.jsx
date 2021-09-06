import TodoListCSS from "./TodoList.module.css"
import { useSelector, useDispatch } from "react-redux"
import { removeTodo } from "../Redux/Actions/actions";

const TodoList = () => {

    const todoList = useSelector((state) => state.todoReducer.todoList);
    const dispatch = useDispatch();

    return (
        <>
            {
                todoList.map((todoListItem, index) => {
                    const { id, todo } = todoListItem;
                    return (
                        <div key={id} className={TodoListCSS.item}>
                            <button
                                onClick={
                                    () => {
                                        dispatch(removeTodo(id));
                                        console.log(id);
                                    }
                                }
                            >➖</button>
                            {todo}
                        </div>
                    )
                })
            }
        </>
    )
}

export default TodoList
