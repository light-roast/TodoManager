export default function Counter (props) {
     //According to the todos state array it shows the todo or todos left
    if(props.todos.length === 1) {
        return <h2>{props.todos.length} todo left</h2>
      } else if (props.todos.length > 1) {
        return <h2>{props.todos.length} todos left</h2>
      } else {
        return <h2>Start adding your todos!</h2>
      }
    
};