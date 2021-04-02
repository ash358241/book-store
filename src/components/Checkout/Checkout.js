import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {
    const {id} = useParams();
    const [book, setBook] = useState([]);
    const [isCheckOut, setIsCheckOut] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {name, author, price} = book;
    useEffect(() => {
        fetch(`https://afternoon-hollows-44126.herokuapp.com/book/${id}`)
        .then(res => res.json())
        .then(data => setBook(data[0]))
    }, [id])

    const handleCheckOut = () => {
        const checkOutData = {
            name: loggedInUser.name,
            email: loggedInUser.email,
            bookId: id,
            bookName: name,
            bookQuantity: 1,
            bookPrice: price,
            checkOutDate: new Date().toDateString('dd/mm/yyyy'),
            checkOutTime: new Date().toTimeString()
        }

        const url = "https://afternoon-hollows-44126.herokuapp.com/addOrder";

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(checkOutData)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            if(result){
                setIsCheckOut(true);
            }
        })
        console.log('checked')
    }
    return (
        <div className="my-3 text-center" style={{width: '80%', margin: '0 auto'}}>
            <h1>Checkout</h1>
            <br/>
            <table style={{boxShadow: '5px 5px 5px grey'}} className="table">
            <thead>
                <tr className="text-center">
                <th scope="col">Description</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                <tr className="text-center">
                <td>{book.name}</td>
                <td>1</td>
                <td>{book.price}</td>
                </tr>
                <tr className="text-center">
                <td>Total</td>
                <td></td>
                <td>{book.price}</td>
                </tr>
            </tbody>
            </table>
        <Button className="px-4" onClick={() => handleCheckOut()} variant="info" >Check Out</Button>
        <br/>
        {
            isCheckOut && <span>Order has been placed!</span>
        }
                </div>
            );
        };

    export default Checkout;