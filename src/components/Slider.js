import React from 'react';
import {inject, observer} from "mobx-react";

import noImage from '../assets/images/no-image.png';
import {itemImages} from '../assets/images/images';

const IteratorButton = (index, selected, onClick) => {
  const classes = "iterator-button" + (selected ? " selected" :"");
  return (
    <div className={classes} key={index} onClick={onClick}></div>
  );
}

const ImageIterator = ({amount, selectedIndex, onClick}) => {
  let indices = Array(amount);
  for (let i=0; i< amount; i++) {
    indices[i] = i;
  }
  return (
    <div className="image-iterator">
      {indices.map(index => {
        return IteratorButton(index, index === selectedIndex, () => {onClick(index)})
      })}
    </div>
  );
}

@inject('store')
@observer
class Slider extends React.Component {

  render() {
    const {currentKelvin, imageIndex, setImageIndex} = this.props.store;

    const images = itemImages("angular");
    const kelvinImages = images[currentKelvin];
    const image = images && kelvinImages[imageIndex] || noImage;
    const onClick = (index) => {setImageIndex(index)};

    return (
      <div className="slider">
        <img src={image}/>
        <ImageIterator
          amount={kelvinImages.length}
          selectedIndex={imageIndex}
          onClick={onClick}
        />
      </div>
    );
  }
}

export default Slider;
