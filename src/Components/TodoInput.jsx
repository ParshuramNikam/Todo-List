import { useState } from "react";
import TodoInputCSS from "./TodoInput.module.css";

import { addTodo } from "../Redux/Actions/actions";
import { useDispatch } from "react-redux";

const TodoInput = () => {
    const [todoInput, setTodoInput] = useState("");
    const dispatch = useDispatch()

    return (
        <>
            <div className={TodoInputCSS.inputTodo}>
                <input type="text" placeholder=" 📝 Add todo" value={todoInput}
                    onChange={
                        (e) => setTodoInput(e.target.value)
                    }
                />
                <button
                    onClick={
                        () => {
                            if (todoInput) {
                                dispatch(addTodo(todoInput));
                                setTodoInput("")
                            } else {
                                alert("Please Add todo")
                            }
                        }
                    }
                >➕</button>
            </div>
        </>
    );
};

export default TodoInput;