import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, setTodos, filterTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filterTodos.map((todo) => (
                    <Todo text ={todo.text} key ={todo.id}
                    todo = {todo} todos={todos} setTodos={setTodos}/>))}
            </ul>
        </div>
    );
}

export default Todos;