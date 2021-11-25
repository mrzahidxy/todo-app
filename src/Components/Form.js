import React from "react";

const Form = ({ setInputText, setTodos, todos, inputText, setStatus }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() * 1000 },]
        )
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }


    return (
        <div>
            <form>
                <input onChange={inputTextHandler} type="text" value={inputText}
                    className="todo-input" />
                <button
                    onClick={submitTodoHandler} type="submit" className="todo-button">
                    <i className=" fas fa-plus-square"></i>
                </button>

                <div className="select">
                    <select onClick={statusHandler} className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>

                </div>

            </form>
        </div>
    );
}

export default Form;