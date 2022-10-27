import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import picOne from '../../Assects/Images/1.jpg';
import picTwo from '../../Assects/Images/2.jpg';
import picThree from '../../Assects/Images/3.jpg';
import './Home.css'

const Home = () => {
    
    return (
        <div className='mt-4 sliderStyle'>
            <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 imgSt"
          src={picTwo}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgSt"
          src={picThree}
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgSt"
          src={picOne}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
           
        </div>
    );
};

export default Home;