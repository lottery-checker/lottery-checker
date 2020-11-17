import React from 'react';
import BannerHeader from './BannerHeader/BannerHeader';
import Checker from './Checker/Checker';
import './Banner.css';

export const Banner = () => {
  const imageURL = process.env.PUBLIC_URL+"/images/banner.jpg";
  return (
    <div className="banner">
      <div className="banner__image" style={{ backgroundImage: `url(${imageURL})` }}>
        <div className="banner--layer">
          <div className="banner__data">
            <BannerHeader/>
            <Checker/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Banner;