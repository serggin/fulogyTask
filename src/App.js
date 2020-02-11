import React from 'react';
import {inject, observer} from "mobx-react";

import './App.css';
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import BottomMenu from "./components/BottomMenu";
import RightMenu from "./components/RightMenu";

@inject('store')
@observer
class App extends React.Component {
  render() {
    const {showRightMenu} = this.props.store;
    return (
      <div className="App">
        <Header/>
        <div className="content">
          <MainContent/>
          <BottomMenu/>
          {showRightMenu && <RightMenu/>}
        </div>
      </div>
    );
  }
}

export default App;
