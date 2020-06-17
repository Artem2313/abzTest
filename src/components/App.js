import React, { Component } from 'react';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import BackDrop from './BackDrop/BackDrop';

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
    const { sideDrawerOpen } = this.state;
    // if (sideDrawerOpen) {
    //   let SideDrawer = <SideDrawer />;
    //   let BackDrop = <BackDrop />;
    // }
    return (
      <div style={{ height: '100%' }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        {sideDrawerOpen && <BackDrop click={this.backDropClickHandler} />}
        <SideDrawer show={sideDrawerOpen} />
        <main style={{ marginTop: '63px' }}>
          <p>This is page content</p>
        </main>
      </div>
    );
  }
}
