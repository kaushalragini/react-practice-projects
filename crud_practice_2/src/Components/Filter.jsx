import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSearchParams } from "react-router-dom"
const Filter = () => {
    const [searchParam, setSerachParam] = useSearchParams()
    console.log(searchParam.getAll("category"))
    const [category, setCategory] = useState(searchParam.getAll("category") || [])
    const changeHandler = (e) => {
        const newArray = [...category]
        if (newArray.includes(e.target.value)) {
            let index = newArray.indexOf(e.target.value)
            newArray.splice(index, 1)
            setCategory(newArray)
        }
        else {
            setCategory([...category, e.target.value])
        }
    }
    useEffect(() => {
        let param = {}
        param.category = category
        // param.name = "ashutosh"
        setSerachParam(param)
    }, [category])


    return (
        <div>
            <h3>Filter</h3>
            <div>
                <input
                    type="CheckBox"
                    value="Novel"
                    onChange={changeHandler}
                    checked={category.includes('Novel')}
                />
                <label> Novel</label>
            </div>
            <div>
                <input
                    type="CheckBox"
                    value="Thriller"
                    onChange={changeHandler}
                    checked={category.includes('Thriller')}
                />
                <label> Thriller</label>
            </div>
            <div>
                <input
                    type="CheckBox"
                    value="Science_Fiction"
                    onChange={changeHandler}
                    checked={category.includes('Science_Fiction')}
                />
                <label> Science_Fiction</label>
            </div>
            <div>
                <input
                    type="CheckBox"
                    value="Motivational"
                    onChange={changeHandler}
                    checked={category.includes('Motivational')}
                />
                <label> Motivational</label>
            </div>
        </div>
    )
}

export default Filter
