import { colorSelected } from "../actions";
const updateColor = (todoId,color ) => {
    return async (dispatch) => {
        const res = await fetch(`http://localhost:8080/todos/${todoId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({color:  color})
        });
        const todo = await res.json();
        dispatch(colorSelected(todo.id, todo.color));
    }
}

export default updateColor;