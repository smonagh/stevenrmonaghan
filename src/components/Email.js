import React, { Component } from 'react';
import emailjs from 'emailjs-com';

export default class Email extends Component {

  constructor(props){
    super(props);
    this.state = {
      emailSent: false,
    }
    this.sendEmail = this.sendEmail.bind(this);
  }

  sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_rgW7Qfvu', e.target, 'user_Oqgjf42G401QTpn9IJXGw')
      .then((result) => {
          console.log(result.text, result.status);
          this.setState({emailSent: true});
      }, (error) => {
          console.log(error.text, error.status);
      });
  }

  render (){
    if(this.state.emailSent){
      return(<h1> Email Sent! </h1>)
    } else{
      return (
        <form className="form-group" onSubmit={this.sendEmail}>
          <input type="hidden" name="contact_number" className="form-control" />
          <label>Name</label>
          <input type="text" name="user_name" className="form-control" />
          <label>Email</label>
          <input type="email" name="user_email" className="form-control" />
          <label>Message</label>
          <textarea name="message" className="form-control" />
          <input className="contact-button" type="submit" value="Send" />
        </form>
      );
    }
  }
}
