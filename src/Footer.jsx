import React from 'react';
import { FaFacebookF } from 'react-icons/fa';

import { contactSocialItem, contactWayData, fGallery } from '../GDItems';

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-container container">
        <div className="left-footer">
          <div className="footer-logo"></div>
          <p className="footer-left-content">
            GreenDay is an organic farm located in California. We offer healthy foods and products to our clients.
          </p>
          <hr />
          <div className="contact-way">
            {contactWayData.map((citem) => {
              return (
                <div className="contact">
                  {citem.contact_icon}
                  {citem.contact}
                </div>
              );
            })}
          </div>
        </div>
        <div className="mid-footer">
          <p className="f-heading">Newsletter</p>
          <p className="footer-left-content">Join our email newsletter for news and tips.</p>
          <div>
            <input type="email" name="" id="" placeholder="Enter your Email" className="footer-inputs f-email" />
          </div>
          <div>
            {' '}
            <input type="text" name="" id="" placeholder="SUBSCRIBE" className="footer-inputs " />
            <div className="social">
              <p>Follow US</p>
              {contactSocialItem.map((sitem) => {
                return <div className="social-icon">{sitem.s_icon}</div>;
              })}
            </div>
          </div>
        </div>
        <div className="right-footer">
          <p className="f-heading">Gallery</p>
          <div className="footer-gallery">
            {fGallery.map((gitem) => {
              return (
                <div className="gallery-img">
                  <img src={gitem.footer_gallery_img} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
