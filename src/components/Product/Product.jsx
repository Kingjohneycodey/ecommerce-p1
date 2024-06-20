import React from 'react';
import Slider from 'react-slick';
import './product.css';
import ProductCard from '../ProductCard/ProductCard';
import "slick-carousel/slick/slick.css"; // Import slick styles
import "slick-carousel/slick/slick-theme.css"; // Import slick theme styles
import NextArrow from '../NextArrow';
import PrevArrow from '../PrevArrow';
import { BestSelling, FeaturedProducts, NewProduct } from '@/assets/assets';



function Product() {
  // Slider settings
  const settings = {
    dots: false, // Disable navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed in ms
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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


