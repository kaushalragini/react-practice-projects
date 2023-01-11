import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from "react-router-dom"
import BookCard from '../Components/BookCard'
import { getBooks } from '../Redux/AppData/action'
const SingleBook = () => {
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
  }, [id,books])
  return (
    <div>
      <h1>SingleBookPage</h1>
      <img src="https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg?fit=fill&w=480&h=270" alt='' />
      <div>{currentBook.author}</div>
      <div>{currentBook.book_name}</div>
      <div>{currentBook.no_of_chapters}</div>
      <div>{currentBook.release_year} </div>
      {/* <BookCard bookData={currentBook} /> */}

    </div>
  )
}

export default SingleBook

// search paramss : anything after quetsion marks
// params : annythng before question marks