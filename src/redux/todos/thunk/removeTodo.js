import { removed } from "../actions";
const removeTodo = (todoId) => {
    return async (dispatch) => {
        try {
            const res = await fetch(`http://localhost:8080/todos/${todoId}`, {
                method: "DELETE",
            });

            if (!res.ok) {
                throw new Error("Failed to delete todo");
            }
            dispatch(removed(todoId));
        } catch (error) {

            return { "code": 500, "status": "Failed to delete todo" };
        }
    }
}

export default removeTodo;