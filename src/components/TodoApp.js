import {useState} from "react";
import Todo from "./Todo";
import Counter from "./Counter";
import "./todoApp.css";
export default function TodoApp() {
    //Set two states: one for the title of the todo and one to contain all the todos.
    const [title, setTitle] = useState("");
    const [todos, setTodos] = useState([]);
    
    //Function to handle interaction in the main form to add the name of the todo to the title state
    const handleChange = e => {
        const value = e.target.value;
        setTitle(value);
    };

    //Function to handle the submit button action: adds the new todo with an id and a complete key to the todos state
    const handleSubmit = e => {
        //Prevent refreshing
        e.preventDefault();
        
        if (title.length === 0) {
            alert(`You can't provide an empty value`);
        } else {
        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
            };
        
        setTodos([...todos, newTodo]);
        //Reset title state
        setTitle("");
    };
    };

    //Function to pass as prop to the Todo component, it serves the purpose of adding the new title of a specific todo on the edit forma of a Todo
    const handleUpdate = (id, value) => {
        if(value.length === 0) {
            alert(`You can't provide an empty value`);
        } else {
        const temp = [...todos];
        const todo = temp.find( (todo) => todo.id === id);
        todo.title = value;
        setTodos(temp); };
    };
    //Function to pass as a prop to the Todo component, it server the pu
    const handleClickDelete = (id) => {
        const temp = todos.filter(todo => todo.id !== id);
        setTodos(temp);
    };
    
    return (
    <main>
    <div className="todoContainer">
        <Counter todos={todos}/>
        <form 
        className="todoCreateForm"
        onSubmit={handleSubmit}>
            <input 
            className="todoInput" 
            value={title}
            onChange={handleChange}
            />
            <input 
            className="buttonCreate" 
            type="submit" 
            value="Create todo"
            />
        </form>
        <div className="todosContainer">
            {
                todos.map(todo => (
                    <Todo key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleClickDelete}/>
                ))
            }
        </div>
    </div>
    </main>
    );
};