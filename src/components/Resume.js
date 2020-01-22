import React, { Component } from 'react';

export default class Resume extends Component {

  render(){
    return(
      <div className="container">
        <div className="jumbotron">
          <h1> Resume </h1>
          <a href="/resume.pdf" download> Download </a>
          <h3 className="text-left"> Education </h3>
          <ul className="resume-list">
            <li>George Mason University, Economics M.A. 2018 </li>
            <li>Sonoma State University, Mathematics B.A. 2015 </li>
            <li>Sonoma State University, Economics B.A. 2015 </li>
          </ul>
          <h3 className="text-left"> Experience </h3>
          <div class="subtitle-list">
            <i>
              <h6 className="subtitle-left" > Quantitative Analyst - Software Engineer </h6>
            </i>
            <h6 className="subtitle-right"> CFRA Research : August 2018 - Current</h6>
          </div>
          <ul className="resume-list">
            <li>
                I automated several reporting procedures that were previously done by hand
                saving hundreds of hours of work. Additionally, I architected and developed
                an internal dashboard that displayed the results of these reports using re
                act.js/bootstrap/plotly on the front-end and python/flask to handle ingestion
                and transformation on the back-end.
            </li>
            <li>
              I designed and architected the cloud infrastructure for the Quantitative team’s
              ETF/MF reports in AWS. Each component Docker image was built and de-
              ployed to ECR using the code-pipeline CI/CD system that pulled from github.
              Containers were scheduled to run by CRON jobs and deployed to Batch for
              paralell computation.
            </li>
            <li>
              I developed programming interfaces to the Capital IQ and Ice bond data APIs
              in Python to assist developers on the Quantitative team who were less familiar
              with the REST API protocol.
            </li>
            <li>
              I wrote and maintained several repositories, as well as maintained a few legacy
              CFRA applications written in Python and Java. I reviewed and gave feedback
              and assistance to several other quants and engineers making commits to these
              repositories.
            </li>
          </ul>
          <div className="subtitle-list">
            <i>
              <h6 className="subtitle-left"> Python Developer - Contract </h6>
            </i>
            <h6 className="subtitle-right"> General Electric / Hitachi : March 2018 - August 2018 </h6>
          </div>
          <ul className="resume-list">
            <li>
              I developed web applications that delivered machine learning analytics to the
              nuclear industry as full-stack developer on an agile team.
            </li>
            <li>
              I built back-end ETL and REST API protocols with Python/Flask to deliver
              data to front-end application. I also assisted with front-end development uti-
              lizing Node.js/Polymer.js.
            </li>
          </ul>
          <div className="subtitle-list">
            <i>
              <h6 className="subtitle-left"> Research Assistant </h6>
            </i>
            <h6 className="subtitle-right"> Mercatus Center : January 2016 - March 2018 </h6>
          </div>
          <ul className="resume-list">
            <li>
                I was responsible for developing web applications in Python/Django that were
                used in economic experiments. I hosted and maintained on Heroku cloud infrastructure.
            </li>
            <li>
              I conducted research on experiments with non-parametrics statistics in R/Python
            </li>
          </ul>
          <div className="subtitle-list">
            <i>
              <h6 className="subtitle-left">Database Administrator</h6>
            </i>
            <h6 className="subtitle-right"> AMS.Net : August 2013 - Janary 2016 </h6>
          </div>
          <ul className="resume-list">
            <li> I remotely maintained company’s Salesforce database. </li>
          </ul>
          <h3 className="text-left"> Computer Skills </h3>
          <p className="text-left"> <i> Programming/Scripting Languages </i> : Python, Javascript, C#, C, HTML, SQL, Bash </p>
          <p className="text-left"> <i> Statistical Languages </i> : Pandas, R, Stata </p>
          <p className="text-left"> <i> Web Frameworks </i> : Flask, Django, React </p>

        </div>
      </div>
    )
  }
}
