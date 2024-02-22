import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTodos from "../../redux/todos/thunk/fetchTodos";
import TodoItem from "../Todos/TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const filterByStatus = (todo) => {
    const { status } = filters;
    switch (status) {
      case "Complete":
        return todo.completed;
      case "Incomplete":
        return !todo.completed;
      default:
        return true;
    }
  };

  const filterByColor = (todo) => {
    const { colors } = filters;
    return colors.length === 0 || colors.includes(todo?.color);
  };

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos.length > 0 &&
        todos
          .filter(filterByStatus)
          .filter(filterByColor)
          .map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
    </div>
  );
};

export default TodoList;
