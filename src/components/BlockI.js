import React from 'react';

const BlockI = ({onClick}) => (
  <div className="block-i">
    <div className="i-button" onClick={onClick}>i</div>
    <div className="i-title">Выберите цвет свечения</div>
  </div>
);

export default BlockI;
