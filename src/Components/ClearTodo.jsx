
import { useDispatch } from "react-redux"
import { clearAllTodos } from "../Redux/Actions/actions"

const styles = {
    "backgroundColor": "white",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "margin": "1.5rem auto",
    "height": "3rem",
    "width": "15rem",
    "fontSize": "1.2rem"
}

const ClearTodo = () => {
    const dispatch = useDispatch();

    return (
        <div style={{ "width": "100vw" }}>
            <button style={styles}
                onClick={
                    () => dispatch(clearAllTodos())
                }
            >
                ✅ Check List ✅
            </button>
        </div>
    )
}

export default ClearTodo
