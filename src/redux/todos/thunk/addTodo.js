import { added } from "../actions";
const addTodo = (todoText) => {
    return async (dispatch) => {
        const res = await fetch("http://localhost:8080/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({ text: todoText, completed: false })
        });
        const todo = await res.json();
        dispatch(added(todo.text));
    }
}

export default addTodo;