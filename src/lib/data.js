import {
  ClockIcon,
  GavelIcon,
  MenuIcon,
  ZapIcon,
} from 'lucide-react'

export const categories = [
  {
    id: 1,
    name: 'Electronics & Computers',
    slug: 'electronics',
    icon: '/icons/electronics.gif',
    content: 'Electronics and Computers...',
  },
  {
    id: 2,
    name: 'Home & Kitchenware',
    slug: 'home-and-kitchenware',
    icon: '/icons/homeware.gif',
    content: 'Home and Kitchenware...',
  },
  {
    id: 3,
    name: 'Advanced Digital Courses',
    slug: 'digital-courses',
    icon: '/icons/courses.gif',
    content: 'Digital Courses...',
  },
  {
    id: 4,
    name: "Babies' & Kids' Toys",
    slug: 'kids',
    icon: '/icons/kids.gif',
    content: 'Kids...',
  },
  {
    id: 5,
    name: 'Phones & Tablets',
    slug: 'phones-and-tablets',
    icon: '/icons/phones.gif',
    content: 'Phones and Tabs...',
  },
  {
    id: 6,
    name: 'Computers & Accessories',
    slug: 'computers-and-accessories',
    icon: '/icons/computers.gif',
    content: 'Computers and Accessories...',
  },
  {
    id: 7,
    name: 'Automobile & Motorcycles',
    slug: 'automobile-and-motorcycles',
    icon: '/icons/automobile.gif',
    content: 'Automobile and Motorcycles...',
  },
  {
    id: 8,
    name: 'Groceries & Foodstuff',
    slug: 'groceries',
    icon: '/icons/groceries.gif',
    content: 'Groceries and Foodstuff...',
  },
  {
    id: 9,
    name: 'Gaming & Accessories',
    slug: 'gaming',
    icon: '/icons/gaming.gif',
    content: 'Gamig and Accessories...',
  },
  {
    id: 10,
    name: 'Fashion & Wears',
    slug: 'fashion',
    icon: '/icons/fashion.gif',
    content: 'Fashion and Wears...',
  },
]

export const navLinks = [
  { name: 'Home', link: '/' },
  { name: 'Flash Sale', link: '/flash-sale' },
  { name: 'Coupons', link: '/coupons' },
  { name: 'All Brands', link: '/brands' },
  { name: 'All Categories', link: '/categories' },
  { name: 'All Sellers', link: '/sellers' },
  { name: 'Blog', link: '/blog' },
]

export const sideLinks = [
  {
    name: 'All Categories',
    link: '/categories',
    icon: MenuIcon,
  },
  {
    name: 'Flash Sale',
    link: '/flash-sale',
    icon: ZapIcon,
  },
  {
    name: "Today's Deal",
    link: '/deal',
    icon: ClockIcon,
  },
  {
    name: 'Auction',
    link: '/auction',
    icon: GavelIcon,
  },
]

export const footerLinks = {
  socials: [
    {
      title: 'facebook',
      href: 'fb.com',
      src: '/icons/fb.svg',
    },
    {
      title: 'twitter',
      href: 'x.com',
      src: '/icons/twt.svg',
    },
    {
      title: 'instagram',
      href: 'instagram.com',
      src: '/icons/ig.svg',
    },
    {
      title: 'youtube',
      href: 'ytoutube.com',
      src: '/icons/yt.svg',
    },
    {
      title: 'linkedin',
      href: 'linkedin.com',
      src: '/icons/lin.svg',
    },
  ],
  apps: [
    {
      title: 'Google PlayStore',
      href: 'google.com',
      src: '/images/play.png',
    },
    {
      title: 'App Store',
      href: 'apple.com',
      src: '/images/app.png',
    },
  ],
  basicNav: [
    { title: 'WhatsApp Us', href: '/' },
    { title: 'Refer & Earn', href: '/referral' },
    { title: 'Bid & Win', href: '/bid-n-win' },
  ],
  contacts: [
    {
      title: 'Address',
      desc: 'Lorem ipsum, dolor sit - amet consectet UR',
    },
    {
      title: 'Phone',
      desc: '+234 912 345 6789',
      href: 'tel:+2349123456789',
    },
    {
      title: 'Email',
      desc: 'support@ecommerce.com',
      href: 'mailto:support@ecommerce.com',
    },
  ],
  account: [
    { title: 'Login', href: 'Login' },
    { title: 'Order History', href: '/orders/history' },
    { title: 'My Wishlist', href: '/wishlist' },
    { title: 'Track Order', href: '/orders' },
    {
      title: 'Be an Affiliate Partner',
      href: '/affiliate',
    },
  ],
  seller: [
    { title: 'Become a Seller', href: '/shops/create  ' },
    {
      title: 'Login to Seller Panel',
      href: '/seller/login',
    },
  ],
  delivery: [
    {
      title: 'Login to Delivery Boy Panel',
      href: '/delivery/login',
    },
  ],
}
