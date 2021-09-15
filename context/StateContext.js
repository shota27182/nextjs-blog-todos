import { createContext, useState } from "react";

export const StateContext = createContext()

export default function StateContextProvider(props) {
    const [selectedTask, setSelectedTask] = useState({id: 0, title: ''})
    return (
        <StateContext.Provider value={{selectedTask, setSeelectedTask}}>
            {props.children}
        </StateContext.Provider>
    )
}