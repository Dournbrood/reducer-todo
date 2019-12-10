export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Learn about reducers 2, electric boogaloo',
        completed: false,
        id: 1743297438
    },
]

export const reducer = (state, action) => {
    console.log("STATE AND ACTION: ", state, action);
    switch (action.type) {
        case "ADD_TASK":
            const newItem = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            console.log("NEW STATE WILL BE ", [...state, newItem]);
            return ([
                ...state,
                newItem
            ])
        case "CLEAR_COMPLETED":
            return state.filter(todo => !todo.completed);

        case "TOGGLE_COMPLETED":
            return state.map((todo, index) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return (todo);
            });

        // console.log("TOGGLE COMPLETED INVOKED WITH STATE ", state);
        // console.log("COMPLETED TASK LIST IS: ", completedTasks);
        default:
            return state;
    }
}