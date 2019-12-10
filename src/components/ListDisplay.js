import React from "react";

const ListDisplay = (props) => {

    const { taskState, dispatch } = props;

    return (
        <div className="flex-center">
            {taskState.map((task) => (
                <span
                    className={`task${task.completed ? ' completed' : ''}`}
                    onClick={() => dispatch({
                        type: "TOGGLE_COMPLETED",
                        payload: task.id
                    })}>{task.item}</span>
            ))}
        </div >
    )
}

export default ListDisplay;