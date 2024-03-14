import React from 'react';
import { partnerData } from '../../GDItems';
const SponsorBox = () => {
  return (
    <>
      <h1 className="heading">Our Partners</h1>
      <div className="part-box">
        {partnerData.map((partitem) => {
          return (
            <div className="part-img-box">
              <img src={partitem.p_img} alt="" className="part-img" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SponsorBox;
