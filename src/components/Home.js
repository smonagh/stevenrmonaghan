import React, { Component } from 'react';

export default class Home extends Component {

  render(){
    return(
      <div className="body">
        <div className="container">
          <div className="jumbotron">
            <h1 className="title"> Steven Monaghan </h1>
            <h6> Software Engineer / Data Scientist </h6>
            <img className="head-shot" src="/headShot.jpg" alt="" />
            <p> Hi, I am Steven Monaghan. I have several years of experience in the industry working on software
                projects related to machine learning and statistical analysis. I possess a broad range of experience
                across academia, the nuclear industry, and currently in FinTech. Please check out my website and contact
                me if you have any inquiries.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
