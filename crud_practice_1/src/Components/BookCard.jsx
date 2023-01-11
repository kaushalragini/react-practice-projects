import React from 'react'

const BookCard = ({ id, author, book_name, category, release_year }) => {
    return (
        <div>
            <img src="https://www.adobe.com/express/create/cover/media_181e3d2c78f153ae7bf0e19a2faeb9a76e234da30.jpeg?format=jpeg&optimize=medium&width=100%" />
            <h3>{book_name}</h3>
            <h4>{category}</h4>
            <p>{author}</p>
            <p>{release_year}</p>
        </div>
    )
}

export default BookCard
