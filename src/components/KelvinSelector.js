import React from 'react';
import {inject, observer} from "mobx-react";

import {Kelvins} from './constants';
import {kelvinImages} from "../assets/images/images";

const images = kelvinImages();

const CheckMark = () => {
  return (
    <div className="check-mark">{"\u2713"}</div>
  );
}

const KelvinComponent = (kelvin, selected, onClick) => {
  return (
    <div className="kelvin-component" key={kelvin} onClick={onClick}>
      <img src={images[kelvin]} />
      { selected && <CheckMark/>}
    </div>
  );
}

@inject('store')
@observer
class KelvinSelector extends React.Component {
  render() {
    const {currentKelvin, setKelvin} = this.props.store;
    const onKelvinClick = (kelvin) => {
      setKelvin(kelvin);
    }
    return (
      <div className="kelvin-selector">
        {Kelvins.map(kelvin => {
          return KelvinComponent(
            kelvin,
            currentKelvin == kelvin,
            () => onKelvinClick(kelvin)
          );
        })}
      </div>
    );
  }
}

export default KelvinSelector;
