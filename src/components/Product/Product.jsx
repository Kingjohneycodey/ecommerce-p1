import React from 'react';
import Slider from 'react-slick';
import { BestSelling, FeaturedProducts, NewProduct } from '../../assets/assets';
import './product.css';
import ProductCard from '../ProductCard/ProductCard';
import "slick-carousel/slick/slick.css"; // Import slick styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme styles


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', right: '-40px' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', position: 'relative', top: '200px', left: '-40px' }}
      onClick={onClick}
    />
  );
}

function Product() {
  // Slider settings
  const settings = {
    dots: false, // Disable navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed in ms
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [ // Responsive settings for different screen sizes
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className='pro'>
      <div className='product'>
        <h1 className='productTitle'>Featured Products</h1>
        <Slider {...settings} className='productCards'>
          {FeaturedProducts.map((item, i) => (
            <ProductCard key={i} product={item} />
          ))}
        </Slider>
      </div>

      <div className='bestSelling'>
        <h1 className='bestTitle'>Best Selling</h1>
        <Slider {...settings} className='BestCards'>
          {BestSelling.map((item, i) => (
            <ProductCard key={i} product={item} />
          ))}
        </Slider>
      </div>

      <div className='bestSelling'>
        <h1 className='bestTitle'>New Products</h1>
        <Slider {...settings} className='BestCards'>
          {NewProduct.map((item, i) => (
            <ProductCard key={i} product={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Product;


