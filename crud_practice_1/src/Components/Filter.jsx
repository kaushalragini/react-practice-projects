import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';


const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams({});
    console.log(searchParams.getAll("category"));
    const [category, setCategory] = useState(searchParams.getAll("category") || []);
    const changeHandler = (e) => {
        const newArr = [...category];
        if (newArr.includes(e.target.value)) {
            const index = newArr.indexOf(e.target.value);
            newArr.splice(index, 1);
            setCategory(newArr);
        }
        else {
            setCategory([...category, e.target.value]);
        }
    }
    useEffect(() => {
        const params = {};
        params.category = category;
        setSearchParams(params);

    }, [category])
    return (
        <div>
            <h3>Filter</h3>
            <div>
                <input
                    type="checkbox"
                    value="Novel"
                    onChange={changeHandler}
                    checked={category.includes("Novel")}
                />
                <label>Novel</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    value="Science_Fiction"
                    onChange={changeHandler}
                    checked={category.includes("Science_Fiction")}
                />
                <label>Science Fiction</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    value="Thriller"
                    onChange={changeHandler}
                    checked={category.includes("Thriller")}
                />
                <label>Thriller</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    value="Motivational"
                    onChange={changeHandler}
                    checked={category.includes("Motivational")}
                />
                <label>Motivational</label>
            </div>
        </div>
    )
}

export default Filter
