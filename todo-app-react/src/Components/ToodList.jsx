import React from 'react'
import { useSelector } from 'react-redux'

const ToodList = () => {
    const data = useSelector(store => store.todos)
    return (
        <div>
            {data.map((item) => {
                return <li>{item}</li>
            }
            )}
        </div>
    )
}

export default ToodList
