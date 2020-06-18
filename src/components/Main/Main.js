import React, { Component } from 'react';
import AboutMe from './Section_About_Me/AboutMe';
import RelationshipsAndRequirements from './Section_Relationships_and_Requirements/RelationshipsAndRequirements';
import * as API from '../../service/api';
import Users from './Section_Users/Users';

export default class Main extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    API.fetchUsers().then(response => {
      this.setState({ users: response.data.users });
    });
  }

  render() {
    const { users } = this.state;
    return (
      <main style={{ marginTop: '63px' }}>
        <AboutMe />
        <RelationshipsAndRequirements />
        <Users users={users} />
      </main>
    );
  }
}
