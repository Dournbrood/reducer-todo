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
            return (
                action.payload
            );

        case "TOGGLE_COMPLETED":
            let completedTasks = state;
            console.log("TOGGLE COMPLETED INVOKED WITH STATE ", state);
            completedTasks.forEach((element, index) => {
                if (element.id === action.payload) {
                    element.completed = !element.completed
                }
            });
            console.log("COMPLETED TASK LIST IS: ", completedTasks);
            return (completedTasks);
        default:
            return state;
    }
}