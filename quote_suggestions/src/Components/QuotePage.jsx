import React, { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import axios from "axios";
import { useEffect } from 'react';
const QuotePage = () => {
    const [currentQuote, setCurrentQuote] = useState("");
    const fetchQuotes = () => {
        axios.get("https://api.adviceslip.com/advice")
        .then((res) => {
            setCurrentQuote(res.data.slip.advice);
        })
    }
    const clickHandler = () => {
        fetchQuotes();
    }
    useEffect(() => {
        fetchQuotes();
    }, [])
  return (

        <div className="quote">
            <div class="quote_card">
                <h1 className="quote_text">{currentQuote}</h1>
                <button class="btn purple-gradient more_qupte_btn" onClick={clickHandler}>Give more advice !!!</button>
            </div>

        </div>
   
  )
}

export default QuotePage