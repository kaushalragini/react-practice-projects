import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBooks } from '../Redux/AppReducer/action';
import BookCard from './BookCard';
import { useLocation, useSearchParams } from "react-router-dom";

const BookList = () => {
    const books = useSelector((store) => store.AppReducer.books);
    const [searchParams] = useSearchParams();
    const location = useLocation();
    console.log(location);
    const dispatch = useDispatch()
    useEffect(() => {
        let getDefaultParams = {};
        if (location) {
            let category = searchParams.getAll("category");
            getDefaultParams = {
                params: {
                    category: category
                }
            }
        }
        dispatch(getBooks(getDefaultParams));
    }, [location.search]);
    return (
        <div>
            {
                books && books.length && books.map((item) => {
                    return (
                        <div key={item.id}>
                            <Link to={`/book/${item.id}`}>
                                <BookCard {...item} />
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BookList
