import React, { Component } from 'react';
import Toolbar from './Header/Toolbar/Toolbar';
import SideDrawer from './Header/SideDrawer/SideDrawer';
import BackDrop from './Header/BackDrop/BackDrop';
import Main from './Main/Main';
import Footer from './Footer/Footer';

export default class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => ({
      sideDrawerOpen: !prevState.sideDrawerOpen,
    }));
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    console.log(window.devicePixelRatio);
    const { sideDrawerOpen } = this.state;
    return (
      <div className="wrapper">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        {sideDrawerOpen && <BackDrop click={this.backDropClickHandler} />}
        <SideDrawer show={sideDrawerOpen} />

        <Main />
        <Footer />
      </div>
    );
  }
}
