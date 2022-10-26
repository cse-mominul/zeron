import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
 </div>
       
        </div>
    );
};

export default Courses;