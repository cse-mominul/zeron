import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Couses.css'
const Courses = ({course}) => {
    return (
        <div>
            <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img className='imgHeight' variant="top" src={course.image_url} />
            <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.details.slice(0,150)}
                </Card.Text>
                <div className='d-flex justify-content-between'>
                <Link to={`/course/ ${course._id}`}>
                <Button variant="primary">Buy Now</Button>
                </Link>
                <p className='textSty'>$<span>{course.price}</span></p>
                </div>
               
            </Card.Body>
            </Card>
 </div>
       
        </div>
    );
};

export default Courses;