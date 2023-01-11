import React from 'react'
import Filter from '../Components/Filter'
import BookList from '../Components/BookList'
const Books = () => {
    return (

        <div>
            <div>
                <Filter />
            </div>
            <div>
                <BookList />
            </div>

        </div>
    )
}

export default Books
