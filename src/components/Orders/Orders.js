import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5055/orders?email='+loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

    const history = useHistory();
    const handleOrderDetails = (orderId) => {
        const url = `/orderDetails/${orderId}`;
        history.push(url);
    }

    let i=1;

    return (
        <div className="text-center">
            <h1>Order History</h1>
            <Table style={{width: '80%', margin: '0 auto'}} striped bordered hover variant="dark">
  <thead>
    <tr className="text-center">
      <th>Serial</th>
      <th>Description</th>
      <th>Date</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
    orders.map(order => 
    <tr className="text-center">
      <td>{i++}</td>
      <td>{order.bookName}</td>
      <td>{order.checkOutDate}</td>
      <td><Button onClick={() => handleOrderDetails(order._id)} variant="success">Details</Button></td>
    </tr>
    )
    }
  </tbody>
</Table>
        </div>
    );
};

export default Orders;