import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ManageBooks = () => {
    const [booksData, setBooksData] = useState([]);
    useEffect(() => {
        fetch('https://afternoon-hollows-44126.herokuapp.com/books')
        .then(res => res.json())
        .then(data => setBooksData(data))
    }, [])

    const handleDelete = id => {
       console.log(id);
       fetch(`https://afternoon-hollows-44126.herokuapp.com/delete/${id}`, {
           method: 'DELETE'
       })
       .then(res => res.json())
       .then(result => {
           if(result){
               const newBooksData = booksData.filter(book => book._id !== id);
               setBooksData(newBooksData);
           }
       })
    }
    return (
        <Table striped bordered hover variant="dark">
  <thead>
    <tr className="text-center">
      <th>Book</th>
      <th>Author</th>
      <th>Price</th>
      <th>Execution</th>
    </tr>
  </thead>
  <tbody>
    {
    booksData.map(book => 
    <tr className="text-center">
      <td>{book.name}</td>
      <td>{book.author}</td>
      <td>${book.price}</td>
      <td><Button onClick={() => handleDelete(book._id)} variant="danger"><FontAwesomeIcon icon={faTrashAlt} /> Delete</Button></td>
    </tr>
    )
    }
  </tbody>
</Table>
    );
};

export default ManageBooks;