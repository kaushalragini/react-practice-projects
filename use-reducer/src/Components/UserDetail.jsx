import React, { useState } from 'react'
import { useReducer } from 'react'

const UserDetail = () => {
    const initialState = {
        Name: "",
        Age: "",
        Gender: "Male",
        Role: "FronEnd Developer",
        MaritalStatus: "Married"
    }
    const reducer = (state, { type, payload }) => {
        switch (type) {
            default:
                return state;
            case "Name":
                return { ...state, Name: payload }
            case "Age":
                return { ...state, Age: payload }
            case "Gender":
                return { ...state, Gender: payload }
            case "Role":
                return { ...state, Role: payload }
            case "MaritalStatus":
                return { ...state, MaritalStatus: payload }
        }
    }
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(data)
        setDisplay([...display, data])

    }
    const [data, dispatch] = useReducer(reducer, initialState)
    const [display, setDisplay] = useState([])
    return (
        <div>
            <form onSubmit={submitHandler} >
                <label >Name :</label>
                <input type="text"
                    placeholder='Enter your full name'
                    value={data.Name}
                    onChange={(e) => {
                        dispatch({ type: "Name", payload: e.target.value })
                    }}
                />
                <label >Age :</label>
                <input type="number"
                    placeholder='Enter your Age'
                    value={data.Age}
                    onChange={(e) => {
                        dispatch({ type: "Age", payload: e.target.value })
                    }
                    }
                />
                <label>
                    Gender :
                </label>
                <select onChange={(e) => {
                    dispatch({ type: "Gender", payload: e.target.value })
                }}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="transgender">TransGender</option>
                </select>
                <label>
                    Role :
                </label>
                <select onChange={(e) => {
                    dispatch({ type: "Role", payload: e.target.value })
                }} >
                    <option value="frontEnd">FronEnd Developer</option>
                    <option value="Backend">Backend Developer</option>
                    <option value="JavaDeveloper">Java Developer</option>
                </select>
                <label>
                    Marital Status:
                </label>
                <select onChange={(e) => {
                    dispatch({ type: "MaritalStatus", payload: e.target.value })
                }}>
                    <option value="married">Married</option>
                    <option value="unmarried">UnMarrried</option>
                    <option value="widow">Widow</option>
                </select>
                <button type='submit'>Submit</button>
            </form>
            {/* <h1>{data.Name}</h1>
            <h2>{data.Age}</h2>
            <h2>{data.Gender}</h2>
            <h3>{data.MaritalStatus}</h3>
            <h3>{data.Role}</h3> */}
            {display.map((item) => {
                return <h1>{item.Name} - {item.Role}</h1>


            })}
        </div>
    )
}

export default UserDetail
