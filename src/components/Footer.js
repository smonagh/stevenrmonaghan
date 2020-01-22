import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGithub, faTwitter, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export default class Footer extends Component {

  render(){
    return(
      <div className="footer">
        <a className="icon-link" href="https://www.linkedin.com/in/steven-monaghan-7b65b7154/">
          <FontAwesomeIcon className="display-icon" icon={faLinkedin} size="2x" />
        </a>
        <a className="icon-link" href="https://github.com/smonagh">
          <FontAwesomeIcon className="display-icon" icon={faGithub} size="2x" />
        </a>
        <a className="icon-link" href="https://twitter.com/StevenMonagha18?fbclid=IwAR0PEW8jFJfF_E_GxASa5OTi4IMIKrAFD3SfLq2iABtOQjG2h3OinLTJJtc">
          <FontAwesomeIcon className="display-icon" icon={faTwitter} size="2x" />
        </a>
        <br />
        <p>&copy; 2020, Steven Monaghan </p>
      </div>
    )
  }
}
