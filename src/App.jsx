import './App.css';
import CopyRight from './components/CopyRight';
import Approach from './components/Approach';
import Features from './components/Features';
import Fruits from './components/Fruits';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Hero from './components/Hero';
import Partner from './components/Partner';
import Reviews from './components/Reviews';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import Vegies from './components/Vegies';
import Contact from './Contact';
import Footer from './Footer';
import { useState } from 'react';
import Arraymethods from './Arraymethods';

function App() {
  const [product, setProduct] = useState({});
  const clickHandler = (product) => {
    console.log('product: ', product);
    setProduct(product);
  };
  return (
    <>
      <Header product={product} />
      <Hero />
      <Features />
      <Vegies clickHandler={clickHandler} />
      <Approach />
      <Fruits clickHandler={clickHandler} />
      <Reviews />
      <Team />
      <Testimonial />
      <Gallery />
      <Partner />
      <Contact />
      <Footer />
      <CopyRight />
      <Arraymethods />
    </>
  );
}

export default App;
