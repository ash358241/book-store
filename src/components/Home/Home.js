import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Book from '../Book/Book';
const Home = () => {
    const [books, setBooks] = useState([]);
    const [spinner, setSpinner] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5055/books')
        .then(res => res.json())
        .then(data => {
            setBooks(data);
            setSpinner(false);
        })
    }, [])
    return (
        <div className="row text-center w-100 mx-auto">
            {
                spinner && <Spinner animation="border" role="status" className="spinner my-5" style={{color: 'blue', margin: '0 auto'}}>
                <span className="sr-only">Loading...</span>
              </Spinner>
            }

            {
                books.map((book) => <Book book={book} key={book._id}></Book>)
            }
        </div>
    );
};

export default Home;