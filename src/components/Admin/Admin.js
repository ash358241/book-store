import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import AddBook from '../AddBook/AddBook';
import ManageBooks from '../ManageBooks/ManageBooks';




const Admin = require => {

  const [addBook, setAddBook] = useState(false);
  const [manageBooks, setManageBooks] = useState(true);

  return(

    <div className="row w-100 mt-3">
      <aside className="col-md-3 col-sm-12 fixed-left">
        <div className="list-group w-100">
          <Button onClick={() =>{setAddBook(false); setManageBooks(true)}}>Manage Books</Button>
          <br/>
          <Button onClick={() =>{setAddBook(true); setManageBooks(false)}}>Add Book</Button>
        </div>
      </aside>

      <div className="col-md-9 col-sm-12">
      {
        manageBooks && <ManageBooks></ManageBooks>
      }
    
      {
        addBook && <AddBook></AddBook>
      }
      </div>
    </div>

  )
}


export default Admin;