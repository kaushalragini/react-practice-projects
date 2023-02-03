import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { getBooks } from '../Redux/AppData/action';
import BookCard from './BookCard';
import { useSearchParams } from "react-router-dom"
const BookList = () => {
    const dispatch = useDispatch();
    const books = useSelector((store) => store.AppReducer.books)
    const location = useLocation()
    const [searchParams] = useSearchParams()
    useEffect(() => {
        // if I dont have any books in redux, then make an API call
        if (location || books.length === 0) {
            const sortBy = searchParams.get('sort')
            const getBookParams = {
                params: {
                    category: searchParams.getAll('category'),
                    _sort: sortBy && 'release_year',
                    _order: sortBy

                }
            }
            dispatch(getBooks(getBookParams))
        }
    }, [books.length, dispatch, location.search])
    return (
        <div>
            {
                books.length > 0 && books.map(singleBook => {
                    return <BookWrapper key={singleBook.id}><BookCard {...singleBook} /></BookWrapper>
                })
            }
        </div>
    )
}
export default BookList
export const BookWrapper = styled.div`
    width :300px;
`
