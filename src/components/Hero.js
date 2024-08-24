import React, { useState } from 'react';
import Resume from '../assets/Dinesh_Resume.pdf';
import photo from '../images/profileImage.png'

export default function Hero() {
  const [download, setDownload] = useState(false);

  return (
    <section className='hero'>
      <div className='hero-header'>
        <p className='hero-small-heading '>Hi, I'am</p>
        <h1 className='hero-big-heading name-heading'>DINESHKUMAR T,</h1>
        <h1 className='hero-big-heading secondry-big-heading'>I'm a </h1>
        <p className='hero-desc'>
          My name is Dineshkumar T, I've completed my degree on Bsc IT in 2022. I have been working as a software developer for the past 1+ years at Mitrahsoft private solution.I've good knowlege and work experience in the frontendand backend thechnology. In frontend technology, I've good knowlege in Javascript and React Js.In the backend technology, I've good knowlege in core Java, Spring boot, microservice and Node Js. In the database, I've good knowlege in postgresql and MongoDB.So far, I have been working three projects.
        </p>
        <div className="photo-container">
          <img src={photo} alt="My Portfolio Photo" className="portfolio-photo" />
        </div>
      </div>
      <button
        className='hero-btn primary-btn'
        onClick={() => setDownload(true)}
      >
        <a href={Resume} download='Dineshkumar-Resume'>
          <p>{download ? 'Thanks For Your Interest !' : 'Download Resume'}</p>
        </a>
      </button>
    </section>
  );
}
