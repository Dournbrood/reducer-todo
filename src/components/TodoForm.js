import React, { useState } from "react";

const TodoForm = (props) => {

    const { taskState, dispatch } = props;

    const [newTaskText, setNewTaskText] = useState("");

    const handleChanges = e => {
        setNewTaskText(e.target.value);
    };

    const clearCompleted = () => {
        let removedTasks = taskState;
        console.log(removedTasks);

        for (let index = removedTasks.length - 1; index >= 0; index--) {
            const element = removedTasks[index];

            if (element.completed === true) {
                removedTasks.splice(index, 1);
            }
        }
        // this.setState({
        //   tasks: removedTasks,
        // })
        dispatch({ type: "CLEAR_COMPLETED", payload: removedTasks })
    }

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
                <button type="button" onClick={clearCompleted}>Clear Completed</button>
            </form>
        </>
    );
}

export default TodoForm;