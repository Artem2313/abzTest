import React, { Component } from 'react';
import AboutMe from './Section_About_Me/AboutMe';
import RelationshipsAndRequirements from './Section_Relationships_and_Requirements/RelationshipsAndRequirements';
import * as API from '../../service/api';
import Users from './Section_Users/Users';
import Form from './Section_Register/Register';
import Modal from '../shared/Modal';

export default class Main extends Component {
  state = {
    users: [],
    positions: [],
    RegisterSuccess: false,
    RegisterError: false,
  };

  componentDidMount() {
    API.fetchUsers().then(response => {
      this.setState({ users: response.data.users });
    });
    API.fetchToken().then(res => {
      window.localStorage.setItem('token', JSON.stringify(res.data.token));
    });
    API.fetchPositions().then(res => {
      this.setState({ positions: res.data.positions });
    });
  }

  handleRegister = data => {
    console.log(data);
    API.addUser(data).then(res => {
      console.log(res.data);
      if (res.data.success) {
        this.setState({ RegisterSuccess: true });
      } else {
        this.setState({ RegisterSuccess: false });
      }
    });
  };

  handleModal = () => {
    this.setState({ RegisterSuccess: false, RegisterError: false });
  };

  render() {
    const { users, positions, RegisterSuccess, RegisterError } = this.state;
    return (
      <main style={{ marginTop: '63px' }}>
        <AboutMe />
        <RelationshipsAndRequirements />
        <Users users={users} />
        <Form positions={positions} onRegister={this.handleRegister} />
        {RegisterSuccess && <Modal onModal={this.handleModal} />}
        {RegisterError && <Modal onModal={this.handleModal} />}
      </main>
    );
  }
}
