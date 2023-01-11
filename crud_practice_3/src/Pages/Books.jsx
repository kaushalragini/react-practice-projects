import React from 'react'
import BookList from '../Components/BookList'
import Filter from '../Components/Filter'

const Books = () => {
    return (
        <div>
            <div><Filter /></div>
            <div><BookList /></div>
        </div>
    )
}

export default Books
