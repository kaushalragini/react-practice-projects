import React from 'react'

const BookCard = ({ id, book_name, category, release_year }) => {
    return (
        <div>
            <h1>{id}</h1>
            <img src="https://www.adobe.com/express/create/cover/media_181e3d2c78f153ae7bf0e19a2faeb9a76e234da30.jpeg?width=400&format=jpeg&optimize=medium&width=50%" alt="" />
            <h2>{book_name}</h2>
            <h3>{category}</h3>
            <h4>{release_year}</h4>
        </div>
    )
}

export default BookCard
