import React from 'react';

import { GDreview } from '../../GDItems';

const Reviews = () => {
  return (
    <div className="review-container">
      {GDreview.map((ritem) => {
        return (
          <div className="review-box">
            <div className="r-num">
              <span>{ritem.review_num}</span>
              {ritem.review_icon}
            </div>
            <div className="r-title">{ritem.riew_title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
