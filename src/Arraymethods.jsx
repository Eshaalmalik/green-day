import React from 'react';

const Arraymethods = () => {
  const number = [100, 200, 55, 33, 99, 11, 44, 50, 60];
  const fruits = ['apple', 'peach', 'avacado', 'appricot', 'orange'];
  return (
    <div style={{ height: '300px', textAlign: 'center' }}>
      {number
        .filter((data) => data < 100)
        .map((filterednum) => (
          <li>{filterednum}</li>
        ))}{' '}
      {/* to filter fruits starting with a  */}
      {fruits
        .filter((fruit) => fruit.startsWith('a'))
        .map((afruit) => (
          <li>{afruit}</li>
        ))}
      {/* to render only even numbers  */}
      {number
        .filter((even) => even % 2 == 0)
        .map((sortedEvenNum) => (
          <li>{sortedEvenNum}</li>
        ))}
    </div>
  );
};

export default Arraymethods;
