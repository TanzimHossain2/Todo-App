import Todo from "./Todo";
import { useSelector } from "react-redux";



const Todolist = () => {
  const todos =  useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filter);

  const filterByStatus = todo=> {
    const {status} = filters;
    switch (status) {
     case 'Complete':
       return todo.completed;
     case 'Incomplete':
       return !todo.completed;
  
     default:
       return true;
    }
   }
  
   const filterByColor = todo=>{
    const {colors} = filters;
    if(colors.length===0){
      return true;
    }
    return colors.includes(todo?.color);
  } 

  return (
    <>
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {todos.filter(filterByStatus)

            .filter(filterByColor)

            .map((todo) => ( <Todo key={todo.id} todo={todo} /> )) }
        </div>
    </>
  );
};

export default Todolist;
