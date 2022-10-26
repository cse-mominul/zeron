import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';

const Category = () => {
    const courses = useLoaderData();
    
    return (
        <div className='CardStyle'>
          {
            courses.map(course => <Courses
            key={course._id}
            course={course}
            >

            </Courses> )
          }
        </div>
    );
};

export default Category;