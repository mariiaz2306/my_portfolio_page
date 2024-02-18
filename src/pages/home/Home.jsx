import React from 'react'
import Profile from '../../my assets/assets/home.jpg'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import './home.css';


const Home = () => {
  return (
<section className="home section grid">
  <img src={Profile} alt="" className="home__img" />
  <div className="home__content">
    <div className="home__data">
      <h1 className="home__title"><span> Hi, I'm Mariia Ziangirova.</span> Front-end Developer </h1>
      <p className="home__description">High level experience in web design and development knowledge, producing quality work and user-friendly experiences
      </p>
      <Link to = '/about' className='button'>
        More About me
        <span className='button__icon'>
          <FaArrowRight/>
          </span>

      </Link>
    </div>
  </div>
</section>
  )
}

export default Home