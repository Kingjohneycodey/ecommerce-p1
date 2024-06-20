import React from 'react'
import "slick-carousel/slick/slick.css"; // Import slick styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme styles


function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "black", display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', right: '-40px' }}
      onClick={onClick}
    />
  );
}

export default NextArrow
