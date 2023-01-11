import React from 'react'
import BookList from '../Components/BookList'
import Filter from '../Components/Filter'

const Books = () => {
    return (
        <div>
            <Filter />
            <br />
            <hr />
            <BookList />
        </div>
    )
}

export default Books
