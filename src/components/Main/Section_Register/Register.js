import React, { Component } from 'react';
import Form from '../../shared/Form';
import Label from '../../shared/Label';

export default class Register extends Component {
  state = {
    position_id: 1,
    name: '',
    email: '',
    phone: '',
    photo: null,
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOptionChange = e => {
    this.setState({ position_id: Number(e.target.value) });
  };

  handlePhotoChange = e => {
    this.setState({ photo: e.target.files[0] });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, position_id, email, phone, photo } = this.state;
    const { onRegister } = this.props;
    const data = {
      name,
      position_id,
      email,
      phone,
      photo,
    };
    onRegister(data);
    this.setState({
      position_id: 1,
      name: '',
      email: '',
      phone: '',
      photo: null,
    });
  };

  render() {
    const { name, position_id, email, phone } = this.state;
    const { positions } = this.props;
    return (
      <section className="Register-section">
        <div className="Register-section__header">
          <h1>Register to get a work</h1>
          <p>Attention! After successful...</p>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <div>
            <Label>
              Name
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
            </Label>
          </div>
          <div>
            <Label>
              Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </Label>
          </div>
          <div>
            <Label>
              Phone number
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={this.handleChange}
              />
            </Label>
          </div>
          <div>
            <Label>Select your option</Label>
            <div>
              {positions.map(position => (
                <div key={position.id}>
                  <Label>
                    <input
                      type="radio"
                      name={position.id}
                      value={position.id}
                      checked={position.id === position_id}
                      onChange={this.handleOptionChange}
                    />
                    {position.name}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Label>
              Photo
              <input
                type="file"
                name="photo"
                onChange={this.handlePhotoChange}
              />
            </Label>
          </div>
          <button type="submit">Sing up now</button>
        </Form>
      </section>
    );
  }
}
