import React, { Component } from 'react';
import Email from './Email'

export default class Contact extends Component {

  render(){
    return(
      <div className="contact">
        <div className="container">
          <div className="jumbotron">
            <Email />
          </div>
        </div>
      </div>
    )
  }
}
