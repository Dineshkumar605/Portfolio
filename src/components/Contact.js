import React from 'react';

export default function Contact() {
  return (
    <section className='contact' id='contact'>
      <div className='contact-header'>
        <h1>Get in touch</h1>
      </div>
      <div className='contact-info'>
        <p className='contact-info-text'>
          At present, I am working on the software developer. If you have any
          questions, want to collaborate, or just want to say hello, please feel
          free to contact me. I will get back to you as soon as possible !
        </p>
        <a href='mailto:tiwarivarun819.vt33.vt@gmail.com'>
          <button type='submit' className='primary-btn contact-info-button'>
            <p>contact me</p>
          </button>
        </a>
      </div>
    </section>
  );
}
