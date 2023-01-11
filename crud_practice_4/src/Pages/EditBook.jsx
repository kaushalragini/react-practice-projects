import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from "react-router-dom"
import BookCard from '../Components/BookCard'
import { getBooks } from '../Redux/AppData/action'
const EditBook = () => {
  const books = useSelector(store => {
    // console.log(store);
    return store.AppReducer.books;
  })
  const location = useLocation()
  const { id } = useParams() //data = {id} destructuring
  const [currentBook, setCurrentBook] = useState({})
  const dispatch = useDispatch()
  console.log(id);
  console.log(books);
  useEffect(() => {
    if (books.length === 0) {
      dispatch(getBooks())
    }
  }, [books.length, dispatch])
  // fetching the data
  // get the data from redux store

  console.log("singlepage", location)
  useEffect(() => {
    if (id) {
      const book = books.find((item) => item.id === Number(id))
      console.log(book)
      book && setCurrentBook(book)

    }
  }, [id, books])
  return (
    <div>
      <h1>Edit Page</h1>
      <div>
        <input />
      </div>
      <div>
        <input />
      </div>
    </div>
  )
}

export default EditBook

// search paramss : anything after quetsion marks
// params : annythng before question marks
