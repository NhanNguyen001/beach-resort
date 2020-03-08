import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/hero';
import Banner from '../components/banner';

const rooms = () => {
  return (
    <Hero hero='roomsHero'>
      <Banner title='our rooms'>
        <Link to='/' className='btn-primary'>
          return Home
        </Link>
      </Banner>
    </Hero>
  );
};

export default rooms;
