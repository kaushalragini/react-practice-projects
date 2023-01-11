import React from 'react'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
const BookCard = ({ id, book_name, category, release_year, author }) => {
    const navigate = useNavigate()
    return (
        <div key={id}>
            <div>
                <Link to={`/books/${id}`} >
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOSr6ReTXsPwAzvBwH8Y6RhSztZqq2WhVPYA&usqp=CAU'
                        alt='Book-Cover'
                        width="100%"
                    />
                </Link>

            </div>
            <div>{book_name}</div>
            <div>{category}</div>
            <div>{release_year}</div>
            <div>{author}</div>
            <button onClick={() => {
                navigate(`/books/${id}/edit`)
            }}>Edit</button>
        </div>
    )
}
export default BookCard
