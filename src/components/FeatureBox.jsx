import React from 'react';
import { GDFeaturesItems } from '../../GDItems';
const FeatureBox = () => {
  return (
    <>
      {GDFeaturesItems.map((items) => {
        return (
          <>
            <div className="feature-box-container">
              <div className="feature-box">
                {items.feature_icon}
                <p className="feature-text">{items.title}</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default FeatureBox;
