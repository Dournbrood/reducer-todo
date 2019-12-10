import React, { useState } from "react";

const TodoForm = (props) => {

    const { taskState, dispatch } = props;

    const [newTaskText, setNewTaskText] = useState("");

    const handleChanges = e => {
        setNewTaskText(e.target.value);
    };

    const addTask = (e) => {
        e.preventDefault();
        if (newTaskText !== "" && newTaskText !== undefined) {
            dispatch({ type: "ADD_TASK", payload: newTaskText })
        }
        setNewTaskText("");
    }

    return (
        <>
            <form onSubmit={addTask}>
                <input
                    type="text"
                    name="task"
                    value={newTaskText}
                    onChange={handleChanges}
                />
                <button type="submit">Add Todo</button>
                <button type="button" onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>Clear Completed</button>
            </form>
        </>
    );
}

export default TodoForm;