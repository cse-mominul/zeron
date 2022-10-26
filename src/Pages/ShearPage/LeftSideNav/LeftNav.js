import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
console.log("love")
    const [categories, setCategories] =useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data));
    },[])
    return (
        <div>
            <h1>All categories {categories.length}</h1>
            {
                categories.map(category => <p key={category.id}> <Link>{category.name}</Link></p>)
            }
        </div>
    );
};

export default LeftNav;