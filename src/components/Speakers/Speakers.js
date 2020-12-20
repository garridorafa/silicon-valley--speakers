import React from 'react';

const Speakers = () => {
  const speakers = [
    {
      imageSrc: 'speaker-component-1',
      name: 'Douglas Crockford'
    },
    {
      imageSrc: 'speaker-component-2',
      name: 'Tamara Baker'
    },
    {
      imageSrc: 'speaker-component-3',
      name: 'Eugene Chuvyrov'
    }
  ]
  return (
    <div>
      {speakers.map(({ imageSrc, name }) => {
        return <img src={`/images/${imageSrc}.png`} 
          alt={name} key={imageSrc} />;
      })}
    </div>
  );
}

export default Speakers;
