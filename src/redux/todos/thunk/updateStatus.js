import { toggled } from "../actions";
const updateStatus = (todoId, currentStatus) => {
    return async (dispatch) => {
        const res = await fetch(`http://localhost:8080/todos/${todoId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({completed: !currentStatus })
        });
        const todo = await res.json();
        dispatch(toggled(todo.id));
    }
}

export default updateStatus;