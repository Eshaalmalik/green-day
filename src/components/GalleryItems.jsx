import React from 'react';
import { galleryItems } from '../../GDItems';
const GalleryItems = () => {
  return (
    <>
      <h1 className="heading ">Our Gallery</h1>
      <div className="gallery-boxe-container">
        {galleryItems.map((gitem, index) => {
          return (
            <div className="gallery-box" key={`gallery-${index}`}>
              <img src={gitem.g_img} alt="" className="gallery-image" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GalleryItems;
