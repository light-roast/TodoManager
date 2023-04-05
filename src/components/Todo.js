import { useState } from "react";

export default function Todo(props){
    //State of the component to see if a form is shown when edit button is clicked
    const [isEdit, setIsEdit] = useState(false);
    
    //
    const handleClickEdit = e => {
        setIsEdit(true);
    };
    const handleClickDelete = e => {
        props.onDelete(props.todo.id);

    }
    
    //Create two inner React Components: one when the inner edit button is clicked, one to show the info of the actual todo component

    //1
    function FormEdit(){
        const [newValue, setNewValue] = useState(props.todo.title)

        const handleSubmit = e => {
            e.preventDefault();
        }

        const handleChange = e => {
            const value = e.target.value;
            setNewValue(value);
        }

        const handleClickUpdate = () => {
            props.onUpdate(props.todo.id, newValue);
            setIsEdit(false);
        }
        
        return (
        <form 
        className="todoUpadateForm" 
        onSubmit={handleSubmit}>
            <input type="text" 
            className="todoInput"
            onChange={handleChange}
            value={newValue}
            />
            <button 
            className="button"
            onClick={handleClickUpdate}>
                Update
            </button>
        </form>);
    };
    //2
    function TodoElement() {
        return (
            <div className="todoInfo">
                <span className="todoTitle">{props.todo.title}</span>
            <button className="button" onClick={handleClickEdit}>Edit</button>
            <button className="buttonDelete" onClick={handleClickDelete}>Delete</button>
            </div>
        );
    };
    return (
        <div className="todo">
            {isEdit ? <FormEdit /> : <TodoElement/>}
            
        </div>
        
    ); 
};