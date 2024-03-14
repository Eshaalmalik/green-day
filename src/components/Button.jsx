import React from 'react';

export const Button = ({ title, btnClass = 'mask' }) => {
  return (
    <div>
      <button className={`btn ${btnClass}`}>{title}</button>
    </div>
  );
};
