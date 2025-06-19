import React from 'react';
import Typewriter from 'typewriter-effect';

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          'Informatic Engineering Student',
          'web Developer',
          'UI/UX Designer',
          'Problem Solver',
          'Tech Enthusiast',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        delay: 50,
      }}
    />
  );
};

export default Type; 