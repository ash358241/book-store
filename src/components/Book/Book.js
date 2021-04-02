import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Book.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Book = (props) => {
    const {name, imageURL, author, price, _id} = props.book;
    const history = useHistory();
    const handleClick = () => {
        const url = `/book/${_id}`;
        history.push(url);
    }
    return (
        <div className="col-md-3 col-sm-12 my-3">
            <Card className="card" style={{ width: '18rem', margin: '0 auto', borderRadius: '24px' }}>
            <Card.Img variant="top" src={imageURL} style={{ width: '100%', height: '300px', borderRadius: '24px'}}/>
            <Card.Body>
                <Card.Title><h3>{name}</h3></Card.Title>
                <Card.Title><h4>{author}</h4></Card.Title>
                <div className="d-flex justify-content-between align-items-center"> 
                <Card.Title><span style={{color: 'blue'}}>${price}</span></Card.Title>
                <Button onClick={() => handleClick(_id)} variant="primary"><FontAwesomeIcon icon={faShoppingCart} /> Buy Now</Button>
                </div>
            </Card.Body>
            </Card>

        </div>
    );
};

export default Book;