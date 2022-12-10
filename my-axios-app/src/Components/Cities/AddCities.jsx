
import React, { useState } from 'react'
// name
// population
// country



const AddCities = ({ handleAddCity }) => {
    const [formState, setFormState] = useState({
        name: "",
        population: "",
        country: "India"
    })


    const handleChange = (e) => {
        const { name, value, type } = e.target;
        const val = type === "number" ? Number(value) : value;
        setFormState({ ...formState, [name]: val })
    }

    const { name, population } = formState
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formState)
        handleAddCity(formState)
        setFormState(
            {
                name: "",
                population: "",
                country: "India"
            }
        )
    }

    return (
        <div style={{ padding: "25px", border: "1px solid black", width: "50%", margin: "auto" }}>
            <h1>Add City</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label > Name :</label>
                    <input
                        name='name'
                        type="text"
                        value={name}
                        onChange={handleChange}
                        placeholder="Add City Name" />
                </div>
                <div>
                    <label > Population :</label>
                    <input
                        name='population'
                        type="number"
                        value={population}
                        onChange={handleChange}
                        placeholder="Enter the population" />
                </div>
                <input
                    type="submit"
                    value="ADD CITY"
                />
            </form>
        </div>
    )
}

export default AddCities
