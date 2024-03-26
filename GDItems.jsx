import { PiLeafLight } from 'react-icons/pi';
import { LuShovel } from 'react-icons/lu';
import { GoSun } from 'react-icons/go';
import { CiHeart, CiTrophy } from 'react-icons/ci';
import { CiShop } from 'react-icons/ci';
import { BsPersonLinesFill } from 'react-icons/bs';
import { FaGooglePlusG, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { GoClockFill } from 'react-icons/go';
import { FaLocationArrow } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { IoSearchOutline } from 'react-icons/io5';
import { HiBars3 } from 'react-icons/hi2';
// import ShoppingCart from './src/components/ShoppingCart';

export const navItems = [
  {
    id: 1,
    nav_item: 'Home',
  },
  {
    id: 2,
    nav_item: 'products',
  },
  {
    id: 3,
    nav_item: 'Team',
  },
  {
    id: 4,
    nav_item: 'Testimonial',
  },
  {
    id: 5,
    nav_item: 'Gallery',
  },
  {
    id: 6,
    nav_item: 'Contact Us',
  },
];

export const cartitems = [
  {
    id: 1,
    product_img: 'https://ld-wt73.template-help.com/wt_prod-22316/images/product-mini-1-108x100.png',
    product_name: 'Blueberries',
    cart_del: '-',
    cart_add: '+',
    product_quantity: '8',
    product_price: '$550',
  },
  {
    id: 2,
    product_img: 'https://ld-wt73.template-help.com/wt_prod-22316/images/product-mini-2-108x100.png',
    product_name: 'Avacados',
    cart_del: '-',
    cart_add: '+',
    product_quantity: '5',
    product_price: '$250',
  },
];
// --------------Products box items  vegies----------
export const productBoxItems = [
  {
    id: 1,
    product_img: 'https://ld-wt73.template-help.com/wt_prod-22316/images/product-5-270x280.png',
    product_name: 'Avacados',
    product_price: '$59:00',
    p_discount: '$28:00',
  },
  {
    id: 2,
    product_img: 'https://ld-wt73.template-help.com/wt_prod-22316/images/product-6-270x280.png',
    product_name: 'Corn',
    product_price: '$28:00',
  },
  {
    id: 3,
    product_img: 'https://ld-wt73.template-help.com/wt_prod-22316/images/product-8-270x280.png',
    product_name: 'Artichokes',
    product_price: '$27:00',
  },
  {
    id: 4,
    product_img: 'https://ld-wt73.template-help.com/wt_prod-22316/images/product-7-270x280.png',
    product_name: 'Broccoli',
    product_price: '$25:00',
  },
];

// --------------Products box items  fruits----------

export const productFruits = [
  {
    product_img: 'https://ld-wt73.template-help.com/wt_prod-22316/images/product-1-270x280.png',
    product_name: 'Peaches',
    product_price: '$59:00',
    p_discount: '$28:00',
  },
  {
    product_img: 'https://ld-wt73.template-help.com/wt_prod-22316/images/product-3-270x280.png',
    product_name: 'Apples',
    product_price: '$21:00',
  },
  {
    product_img: 'https://ld-wt73.template-help.com/wt_prod-22316/images/product-4-270x280.png',
    product_name: 'Kiwis',
    product_price: '$27:00',
  },
  {
    product_img: 'https://ld-wt73.template-help.com/wt_prod-22316/images/product-2-270x280.png',
    product_name: 'Blueberries',
    product_price: '$25:00',
  },
];

// -----------navbar icons----------

export const navbarIcons = [
  // {
  //   id: 1,
  //   nav_icon: <ShoppingCart className="nav-icon" />,
  // },
  {
    id: 2,
    nav_icon: <IoSearchOutline className="nav-icon" />,
  },
  {
    id: 3,
    nav_icon: <HiBars3 className="nav-icon" />,
  },
];

export const GDFeaturesItems = [
  {
    feature_icon: <PiLeafLight className="feature_icon" />,
    title: 'Natural & Organic',
  },
  {
    feature_icon: <LuShovel className="feature_icon " />,
    title: 'Best Equipment',
  },
  {
    feature_icon: <GoSun className="feature_icon" />,
    title: 'Dedicated Team',
  },
];

// ----------------------review section -----------------------

export const GDreview = [
  {
    review_num: '12',
    review_icon: <CiTrophy className="r-icon" />,
    riew_title: 'Awards',
  },
  {
    review_num: '2K',
    review_icon: <CiShop className="r-icon" />,
    riew_title: 'Products',
  },
  {
    review_num: '12',
    review_icon: <CiHeart className="r-icon" />,
    riew_title: 'Happy Clients',
  },
  {
    review_num: '12',
    review_icon: <BsPersonLinesFill className="r-icon" />,
    riew_title: 'Farmers',
  },
];

// -------------------------------GD Team data-------------

export const profileTeam = [
  {
    profile_img: 'https://ld-wt73.template-help.com/wt_prod-22316/images/team-1-370x406.jpg',
    profile_title: 'Ryan Wilson',
    profile_post: 'Founder',
  },
  {
    profile_img: 'https://ld-wt73.template-help.com/wt_prod-22316/images/team-2-370x406.jpg',
    profile_title: 'Jill Peterson',
    profile_post: 'Garden Manager',
  },
  {
    profile_img: 'https://ld-wt73.template-help.com/wt_prod-22316/images/team-3-370x406.jpg',
    profile_title: 'Sam Robinson',
    profile_post: 'farmyard Coordinator',
  },
];

// ---------------------------- Gallery section-------------------

export const galleryItems = [
  {
    g_img: 'https://ld-wt73.template-help.com/wt_prod-22316/images/grid-gallery-1-370x303.jpg',
  },
  {
    g_img: 'https://ld-wt73.template-help.com/wt_prod-22316/images/grid-gallery-2-370x303.jpg',
  },
  {
    g_img: 'https://ld-wt73.template-help.com/wt_prod-22316/images/grid-gallery-3-370x303.jpg',
  },
  {
    g_img: 'https://ld-wt73.template-help.com/wt_prod-22316/images/grid-gallery-4-370x303.jpg',
  },
  {
    g_img: 'https://ld-wt73.template-help.com/wt_prod-22316/images/grid-gallery-5-370x303.jpg',
  },
  {
    g_img: 'https://ld-wt73.template-help.com/wt_prod-22316/images/grid-gallery-6-370x303.jpg',
  },
];

// ---------------------------gd partner section data------

export const partnerData = [
  {
    p_img: 'https://ld-wt73.template-help.com/wt_prod-22316/images/clients-1-270x145.png',
  },
  {
    p_img: 'https://ld-wt73.template-help.com/wt_prod-22316/images/clients-2-270x145.png',
  },
  {
    p_img: 'https://ld-wt73.template-help.com/wt_prod-22316/images/clients-3-270x145.png',
  },
  {
    p_img: 'https://ld-wt73.template-help.com/wt_prod-22316/images/clients-4-270x145.png',
  },
];

// --------------------contact way items -------

export const contactWayData = [
  {
    contact_icon: <FaPhoneAlt className="contact-icon" />,
    contact: '+922387492892',
  },
  {
    contact_icon: <GoClockFill className="contact-icon" />,
    contact: 'Mon-Sat: 07:00AM - 05:00PM',
  },
  {
    contact_icon: <FaLocationArrow className="contact-icon" />,
    contact: '4730 Crystal Springs Dr, Los Angeles, CA 90027',
  },
];

// ------------------------social icons-----------------
export const contactSocialItem = [
  {
    id: 1,
    s_icon: <FaFacebookF />,
  },
  {
    id: 2,
    s_icon: <FaTwitter />,
  },
  {
    id: 3,
    s_icon: <FaGooglePlusG className="google" />,
  },
  {
    id: 4,
    s_icon: <AiFillInstagram />,
  },
];

// -----------------footer gallery-----------

export const fGallery = [
  {
    id: 1,
    footer_gallery_img: 'https://ld-wt73.template-help.com/wt_prod-22316/images/gallery-image-1-129x120.jpg',
  },
  {
    id: 2,
    footer_gallery_img: 'https://ld-wt73.template-help.com/wt_prod-22316/images/gallery-image-2-129x120.jpg',
  },
  {
    id: 3,
    footer_gallery_img: 'https://ld-wt73.template-help.com/wt_prod-22316/images/gallery-image-3-129x120.jpg',
  },
  {
    id: 4,
    footer_gallery_img: 'https://ld-wt73.template-help.com/wt_prod-22316/images/gallery-image-4-129x120.jpg',
  },
];
