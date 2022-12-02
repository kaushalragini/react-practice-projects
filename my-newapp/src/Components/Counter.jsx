import React from 'react'
import { AContext } from '../Context/AppContextProvider'
export default function Counter() {
    const ApiContext = React.useContext(AContext);
    const { count, changeCount } = ApiContext;
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => { changeCount(1) }}>Add</button>
        </div>
    )
}
