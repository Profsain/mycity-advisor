import React from 'react';

const PlaceDetails = ({places}) => {
  console.log(places);
  return (
    <div>
      <h1>{places.name}</h1>
    </div>
  )
};

export default PlaceDetails;
