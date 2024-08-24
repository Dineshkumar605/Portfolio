import React from 'react';
import { languages } from '../data';

const Tag = ({ label }) => {
  const language = languages.find((x) => x.name === label);
  return (
    <span className='tag' style={{ color: language && language.color }}>
      {language && language.icon}
    </span>
  );
};

export default Tag;
