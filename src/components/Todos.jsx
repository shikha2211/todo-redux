import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store/todos";

const Todos = () => {

    const {todos} = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const Remove = (id) => {
        dispatch(todoActions.remove(id));
    }

    return (
        <div>
            <h3>Todos</h3>
            {todos.map((todo) => {
                return(<div key={todo.id}>
                    <p>{todo.title} <button onClick={() => Remove(todo.id)}>Delete</button></p>
                </div>);
            })}
        </div>
    );

}

export default Todos;