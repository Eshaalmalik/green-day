import React from 'react';
import { GDFeaturesItems } from '../../GDItems';
const FeatureBox = () => {
  return (
    <>
      {GDFeaturesItems.map(({ feature_icon, title, id }, index) => (
        <div className="feature-box-container" key={`features-${index}`}>
          <div className="feature-box">
            {feature_icon}
            <p className="feature-text">{title}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeatureBox;
