import React from 'react';

function CityImage({ imageUrl }) {
  return (
    <div className="city-image-container">
      <img src={imageUrl} alt="City view" className="city-image" />
    </div>
  );
}

export default CityImage;
