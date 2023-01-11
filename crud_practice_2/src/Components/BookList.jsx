import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getBooks } from '../Redux/AppReducer/action'
import BookCard from './BookCard'
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
const BookList = () => {
  const location = useLocation()
  console.log(location)
  const [searchParam, setSearchParam] = useSearchParams()
  const books = useSelector((store) => store.AppReducer.books)
  const dispatch = useDispatch()
  useEffect(() => {
    const category = searchParam.getAll("category")
    const defaultParams = {
      params: {
        category: category
      }
    }
    dispatch(getBooks(defaultParams))
  }, [location.search])

  return (
    <div>
      {books && books.length && books.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/books/${item.id}`}>
              <BookCard {...item} />
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default BookList
