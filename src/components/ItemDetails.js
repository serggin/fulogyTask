import React from 'react';
import {inject, observer} from "mobx-react";

const ItemDetail = ([key, value], index) => (
  <div className="item-detail" key={index}>
    <div className="item-cell">{key}:</div>
    <div className="item-cell">{value}</div>
  </div>
);

@inject('store')
@observer
class ItemDetails extends React.Component {
  render() {
    const {itemDetailsArray} = this.props.store;

    return (
      <div className="item-details">
        {itemDetailsArray.map((detail, index) => {
          return ItemDetail(detail, index);
        })}
        {/*Object.entries(itemDetails).map(entry => {
          return ItemDetail(entry);
        })*/}
      </div>
    );
  }
}

export default ItemDetails;
