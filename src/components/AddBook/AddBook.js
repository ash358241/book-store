import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from 'react';
import './AddBook.css';
const AddBook = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

    const [addBook, setAddBook] = useState(false);

  const onSubmit = data => {
    const bookData = {
        name: data.name,
        author: data.author,
        price: data.price,
        imageURL: imageURL
    }
    const url = `https://afternoon-hollows-44126.herokuapp.com/addBook`

    console.log(bookData)

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(bookData)
    })
    .then(res => console.log('server side responded'))
    .then(data => {
        setAddBook(true);
    })
  };

  const handleImageUpload = event => {
      console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set('key', 'b86c0ab7beeb42c384775d3b62a113c0');
    imageData.append('image', event.target.files[0])

    axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

    return (
        <div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <input className="btn btn-light" name="" onChange={handleImageUpload} type="file" />
           <br/>
           <input className="form-input" name="name" defaultValue="Choose Your Book" ref={register} />
          <br/>
          <input className="form-input" name="author" ref={register} placeholder="author"/>
          <br/> 
          <input className="form-input" type="number" name="price" ref={register} placeholder="price"/>
          <br/>        
          <input  className="btn btn-success text-center mr-2" type="submit" />
          <input className="btn btn-primary text-center ml-2" type="reset" value="Reset"/>
        </form>
        {
            addBook && <span>Book is Added Successfully!</span>
        }
        </div>
    );
};

export default AddBook;