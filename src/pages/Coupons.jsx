import { ErrorOutline, FileCopy, HeadsetMic, KeyboardReturn } from '@mui/icons-material';
import React from 'react';

function Coupons() {

  const coupons = [
    {
      title: 'BUY-HUB Global Marketplace',
      link: 'Visit Store',
      price: '5% OFF',
      desc: '5% OFF on total orders within 3 days of Registration',
      code: 'Code: BUY-HUBWELCOME'
    },
    {
      title: 'BUY-HUB Global Marketplace',
      link: 'Visit Store',
      price: '₦1,500.00 OFF',
      desc: 'Min Spend ₦75,000.00 from BUY-HUB Global Marketplace to get ₦1,500.00 OFF on total orders',
      code: 'Code: BUY-HUBEXCLUSIVE23'
    },
    {
      title: 'BUY-HUB Global Marketplace',
      link: 'Visit Store',
      price: '4% OFF',
      desc: 'Min Spend ₦280,000.00 from BUY-HUB Global Marketplace to get 4% OFF on total orders',
      code: 'Code: BUY-HUBSPECIALOFFER88'
    }
  ]

  const info = [
    {
      icon: <FileCopy />,
      text: 'Terms & conditions'
    },
    {
      icon: <KeyboardReturn />,
      text: 'Return policy'
    },
    {
      icon: <HeadsetMic />,
      text: 'Support policy'
    },
    {
      icon: <ErrorOutline />,
      text: 'Privacy policy'
    },
  ]

  return (
    <div className=' px-[4%]'>
      <div className='px-4 py-6'>
        <h1 className='text-2xl font-bold'>All Coupons</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
          {coupons.map((item, i) => {
            return (
              <div key={i} className='bg-gradient-to-r from-red-500 to-red-800 p-6 rounded-3xl flex flex-col justify-center gap-3 text-white'>
                <h3 className='font-semibold'>{item.title}</h3>
                <p className='text-lg'>{item.price}</p>
                <hr />
                <p>{item.desc}</p>
                <p className='font-mono'>{item.code}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className='bg-slate-100 py-12'>
        <div className='px-4'>
          <h1 className='text-xl text-slate-500 font-bold'>Your Ultimate Shopping Destination!</h1>
          <p className='text-slate-500 mt-4'>Discover unbeatable deals at BUY-HUB Global Marketplace – your go-to for B2C & B2B shopping! Enjoy diverse products, exclusive discounts, and our eCommerce Guarantee for a worry-free experience. Whether wholesale or retail, find excellence and exciting auctions. Don't miss out on mega sales and special offers – join us for a limitless online shopping journey!</p>
        </div>
        <div className='flex flex-wrap justify-around mt-8'>
          {info.map((item, i) => {
            return (
              <div key={i} className='flex flex-col items-center w-1/2 md:w-1/4 p-4 '>
                <div className=' cursor-pointer'>

                  {item.icon}.
                </div>
                <p className='text-center mt-2 cursor-pointer'>{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Coupons;
