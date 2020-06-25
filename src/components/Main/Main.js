import React, { Component } from 'react';
import { Element } from 'react-scroll';
import AboutMe from './Section_About_Me/AboutMe';
import RelationshipsAndRequirements from './Section_Relationships_and_Requirements/RelationshipsAndRequirements';
import * as API from '../../service/api';
import Users from './Section_Users/Users';
import Form from './Section_Register/Register';
import Modal from '../shared/Modal';
import { successMessage, failMessage } from '../shared/Modal.json';

export default class Main extends Component {
  state = {
    users: [],
    positions: [],
    countUsers: window.innerWidth < 768 ? 3 : 6,
    stepUsers: window.innerWidth < 768 ? 3 : 6,
    totalUsers: 0,
    RegisterSuccess: false,
    RegisterError: false,
  };

  componentDidMount() {
    const { countUsers } = this.state;
    API.fetchUsers(countUsers).then(response => {
      this.setState({
        users: response.data.users,
        totalUsers: response.data.total_users,
      });
    });
    API.fetchToken().then(res => {
      window.localStorage.setItem('token', JSON.stringify(res.data.token));
    });
    API.fetchPositions().then(res => {
      this.setState({ positions: res.data.positions });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { RegisterSuccess, countUsers } = this.state;
    if (
      RegisterSuccess !== prevState.RegisterSuccess ||
      countUsers !== prevState.countUsers
    ) {
      API.fetchUsers(countUsers).then(response => {
        this.setState({
          users: response.data.users,
          totalUsers: response.data.total_users,
        });
      });
    }
  }

  handleRegister = data => {
    API.addUser(data)
      .then(res => {
        if (res.data.success) {
          this.setState({ RegisterSuccess: true });
        } else {
          this.setState({ RegisterError: true });
        }
      })
      .catch(err => {
        if (err) {
          this.setState({ RegisterError: true });
        }
      });
  };

  onHandleModal = () => {
    this.setState({ RegisterSuccess: false, RegisterError: false });
  };

  handleIncreaseUsers = () => {
    const { stepUsers } = this.state;
    this.setState(prevState => ({
      countUsers: prevState.countUsers + stepUsers,
    }));
  };

  render() {
    const {
      users,
      positions,
      RegisterSuccess,
      RegisterError,
      countUsers,
      totalUsers,
    } = this.state;
    return (
      <main style={{ marginTop: '60px' }}>
        <Element name="About me">
          <AboutMe />
        </Element>
        <Element name="Requirements">
          <RelationshipsAndRequirements />
        </Element>
        <Element name="Users">
          <Users
            users={users}
            handleIncreaseUsers={this.handleIncreaseUsers}
            countUsers={countUsers}
            totalUsers={totalUsers}
          />
        </Element>
        <Element name="Sign up">
          <Form positions={positions} onRegister={this.handleRegister} />
        </Element>
        {RegisterSuccess && (
          <Modal onHandleModal={this.onHandleModal} message={successMessage} />
        )}
        {RegisterError && (
          <Modal onHandleModal={this.onHandleModal} message={failMessage} />
        )}
      </main>
    );
  }
}
