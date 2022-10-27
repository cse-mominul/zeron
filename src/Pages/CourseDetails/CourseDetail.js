import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CourseDetail = () => {
    const course = useLoaderData();
    console.log(course._id)
    return (
        <div>
        
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={course.image_url} />
      <Card.Body>
        <Card.Title>{course.title}</Card.Title>
        <Card.Text>
          {course.details}
        </Card.Text>
        <Link to='/category/08'>
        <Button variant="primary">Back To Course</Button>
        </Link>
       
      </Card.Body>
    </Card>
            
            
        </div>
    );
};

export default CourseDetail;