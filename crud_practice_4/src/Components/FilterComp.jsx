import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom"
const FilterComp = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    // whenever the page refreshes, we need to check if the URL had any data, before setting the data to an empty array

    const initialCategory = searchParams.getAll('category')
    console.log("initialCategory", initialCategory)
    const initialSort = searchParams.getAll("sort")
    const [sort, setSortBy] = useState(initialSort[0] || "")
    const [category, setCategory] = useState(initialCategory || [])
    const handleFilterCheckBox = (e) => {
        // check if the data is present in the category
        // if yes , then remove it (the user has un-checked the checkbox)
        const newCategories = [...category]
        // else add it in the category
        if (newCategories.includes(e.target.value)) {
            // remove its
            newCategories.splice(newCategories.indexOf(e.target.value), 1)
        }
        else {
            // else add into the category array
            newCategories.push(e.target.value)
        }
        setCategory(newCategories)

    }
    // console.log(category)
    // if the category changes, then update the value in the URL search paramas

    useEffect(() => {
        let params = {}
        params.category = category;
        sort && (params.sort = sort)
        setSearchParams(params)
    }, [category, setSearchParams, sort])

    const handleSort = (e) => {
        setSortBy(e.target.value)
    }

    return (
        <div>
            <h3>Filter Components</h3>
            <div>
                <div>
                    <input type="checkbox" value={"Novel"} onChange={handleFilterCheckBox}
                        checked={category.includes('Novel')} />
                    <label>Novel</label>
                </div>
                <div>
                    <input type="checkbox" value={"Science_Fiction"} onChange={handleFilterCheckBox}
                        checked={category.includes('Science_Fiction')} />
                    <label>Science_Fiction</label>
                </div>
                <div>
                    <input type="checkbox" value={"Thriller"} onChange={handleFilterCheckBox}
                        checked={category.includes('Thriller')} />
                    <label>Thriller</label>
                </div>
                <div>
                    <input type="checkbox" value={'Motivational'} onChange={handleFilterCheckBox} checked={category.includes('Motivational')} />
                    <label>Motivational</label>
                </div>
            </div>
            <h3>Sort Component</h3>
            <div onChange={handleSort}>
                <input type="radio" value='asc' name='sortBy' defaultChecked={sort === "asc"} />
                <label >Asecending</label>
                <br />
                <input type="radio" value="desc" name="sortBy" defaultChecked={sort === "desc"} />
                <label>Descending</label>
            </div>
        </div>
    )
}

export default FilterComp
