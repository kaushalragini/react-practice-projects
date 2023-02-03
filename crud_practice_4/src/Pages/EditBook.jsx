import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from "react-router-dom"
import BookCard from '../Components/BookCard'
import { getBooks } from '../Redux/AppData/action'
const EditBook = () => {
  const [title, setTitle] = useState("")
  const books = useSelector(store => {
    return store.AppReducer.books;
  })
  const location = useLocation()
  const { id } = useParams() //data = {id} destructuring
  const [currentBook, setCurrentBook] = useState({})
  const dispatch = useDispatch()
  useEffect(() => {
    if (books.length === 0) {
      dispatch(getBooks())
    }
  }, [books.length, dispatch])
  useEffect(() => {
    if (id) {
      const book = books.find((item) => item.id === Number(id))
      book && setCurrentBook(book)
      book && setTitle(book.book_name)
    }
  }, [id, books])
  return (
    <div>
      <h1>Edit Page</h1>
      <div>
        <input value={title} onChange={(e) => {
          setTitle(e.target.value)
        }} />
        <button>update</button>
      </div>
      <div>
        <input />
        <button>update</button>
      </div>
    </div>
  )
}
export default EditBook
// search paramss : anything after quetsion marks
// params : annythng before question marks
