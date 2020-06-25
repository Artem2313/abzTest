import React, { Component } from 'react';

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
    const { name, position_id, email, phone, photo } = this.state;
    const { positions } = this.props;
    return (
      <section className="Register-section">
        <div className="Register-section__header">
          <h1>Register to get a work</h1>
          <p>
            Attention! After successful registration and alert, update the list
            of users in the block from the top
          </p>
        </div>
        <form onSubmit={this.handleSubmit} className="Register-section__form">
          <div className="Register-section__form-main">
            <div className="Register-section__form-main-element">
              <label className="Register-section__form-main-label">Name</label>

              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                className="Register-section__form-main-input"
                placeholder="Your name"
              />
              <div className="Register-section__after-input">
                Enter your name
              </div>
            </div>
            <div className="Register-section__form-main-element">
              <label className="Register-section__form-main-label">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                className="Register-section__form-main-input"
                placeholder="Your email"
              />
              <div className="Register-section__after-input">
                Enter your name
              </div>
            </div>
            <div className="Register-section__form-main-element">
              <label className="Register-section__form-main-label">
                Phone number
              </label>
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={this.handleChange}
                className="Register-section__form-main-input"
                placeholder="+380"
              />
              <div className="Register-section__after-input">
                Enter your phone number in open format
              </div>
            </div>
          </div>
          <div className="Register-section__select">
            <label className="Register-section__select-header">
              Select your position
            </label>
            <div>
              {positions.map(position => (
                <div
                  className="Register-section__select-position"
                  key={position.id}
                >
                  <label>
                    <input
                      type="radio"
                      name={position.id}
                      value={position.id}
                      checked={position.id === position_id}
                      onChange={this.handleOptionChange}
                    />
                    <span>{position.name}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="Register-section__photo-container">
            <label className="Register-section__photo-label">Photo</label>
            <div className="Register-section__photo-input">
              <label htmlFor="file-upload" className="custom-file-upload">
                {photo ? photo.name : <span>Upload your photo</span>}
              </label>

              <label htmlFor="file-upload" className="custom-file-browse">
                Browse
              </label>

              <input
                type="file"
                name="photo"
                id="file-upload"
                onChange={this.handlePhotoChange}
                className="Register-section__photo-input"
              />
            </div>
          </div>
          <button type="submit" className="button">
            Sing up now
          </button>
        </form>
      </section>
    );
  }
}
