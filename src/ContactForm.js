import React, { Component } from "react";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    picture: ""
  };

  tfHandler = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    return (
      <div>
        <p>{JSON.stringify(this.state)}</p>
        <h3>Add a new contact</h3>
        <form className="form" onSubmit={this.addNewContact}>
          <div className="form-group row">
            <label htmlFor="" className="control-label col-md-4">
              Name
            </label>
            <div className="col-md-8">
              <input
                value={this.state.name}
                onChange={this.tfHandler}
                name="name"
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="" className="control-label col-md-4">
              Email address
            </label>
            <div className="col-md-8">
              <input
                value={this.state.email}
                onChange={this.tfHandler}
                name="email"
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="" className="control-label col-md-4">
              Phone number
            </label>
            <div className="col-md-8">
              <input
                value={this.state.phone}
                onChange={this.tfHandler}
                name="phone"
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="" className="control-label col-md-4">
              Picture
            </label>
            <div className="col-md-8">
              <input
                value={this.state.picture}
                onChange={this.tfHandler}
                name="picture"
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <button className="btn btn-primary">Save data</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
