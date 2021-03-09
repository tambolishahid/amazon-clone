import React from 'react';
import './Home.css';
import homeImage from './myassets/home-image.jpg';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src={homeImage} alt='' />

        <div className='home__row'>
          <Product
            id='12321341'
            title='Aucma Stand Mixer,6.5-QT 660W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Dough Hook, Wire Whip & Beater (6.5QT, Royal Blue)'
            price={139.99}
            image='https://images-na.ssl-images-amazon.com/images/I/61%2BfrTbCBhL._AC_SY450_.jpg'
            rating={2}
          />
          <Product
            id='49538094'
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={14.99}
            image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
            rating={4}
          />
        </div>
        <div className='home__row'>
          <Product
            id='3254354345'
            title='Echo Dot (3rd Gen) Sandstone with Echo Auto'
            price={44.98}
            image='https://images-na.ssl-images-amazon.com/images/I/61WdpWczUkL._AC_SX425_.jpg'
            rating={4}
          />
          <Product
            id='4903850'
            title='Mi Band 5'
            price={36.99}
            image='https://images-na.ssl-images-amazon.com/images/I/71KsTiNXbdL._AC_SX679_.jpg'
            rating={3}
          />

          <Product
            id='23445930'
            title='New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)'
            price={869.0}
            image='https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SX342_.jpg'
            rating={2}
          />
        </div>
        <div className='home__row'>
          <Product
            id='4903850765'
            title='SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black'
            price={1299.0}
            image='https://images-na.ssl-images-amazon.com/images/I/71tZW1aa%2BPL._AC_SX450_.jpg'
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
