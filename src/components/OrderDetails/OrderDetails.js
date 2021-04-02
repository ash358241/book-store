import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';

const OrderDetails = () => {
    const {orderId} = useParams();
    const [orderDetails, setOrderDetails] = useState([]);
    const {name, email, bookName, bookQuantity, bookPrice, checkOutDate, checkOutTime} = orderDetails || {};
    useEffect(() => {
        fetch(`http://localhost:5055/orderDetails/${orderId}`)
        .then(res => res.json())
        .then(data => setOrderDetails(data))
    }, [orderId])

    return (
        <div>
                <h1>Order Details</h1>
                <div className="text-left m-3">
                    <h3>Name: {name}</h3>
                    <h4>Email: {email}</h4>
                    <h5>Placing Date: {checkOutDate}</h5>
                    <h6>Placing Time: {checkOutTime}</h6>
                </div>
                <Table striped bordered hover variant="dark">
  <thead>
    <tr className="text-center">
      <th>Description</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr className="text-center">
      <td>{bookName}</td>
      <td>{bookQuantity}</td>
      <td>{bookPrice}</td>
    </tr>
    
  </tbody>
</Table>

        <div className="text-right m-5">
        <h4>Product Price: ${bookPrice}</h4>
        <h4>Shipment Cost: $7</h4>
        <h4>Payment Process: Cash Only!</h4>
        <h3>Total : ${parseInt(bookPrice)+7}</h3>
        </div>
        </div>
    );
};

export default OrderDetails;