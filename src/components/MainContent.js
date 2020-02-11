import React, {Fragment} from 'react';
import {inject, observer} from "mobx-react";

import Slider from "./Slider";
import ItemDetails from "./ItemDetails";
import BlockI from "./BlockI";
import KelvinSelector from "./KelvinSelector";
import Info from './Info';

@inject('store')
@observer
class MainContent extends React.Component {

  render() {
    const {showInfo, toggleShowInfo} = this.props.store;
    const onClick = () => {
      toggleShowInfo();
    }

    return (
      <div className="main-content">
        {showInfo && <Info />}
        {!showInfo &&
          <Fragment>
            <div className="main-slider">
              <Slider/>
            </div>
            <div className="main-right">
              <ItemDetails/>
              <BlockI onClick={onClick} />
              <KelvinSelector />
            </div>
          </Fragment>
        }
      </div>
    );
  }
}

export default MainContent;
