import React from "react";

function Information() {
  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card roundedCards">
            <div className="card-body">
              <h4 className="card-title">ABOUT ME</h4>
              <hr className="hr-line" />
              <p className="card-text">
                + 8 years in Quality Assurance and programming. I have been part
                of different teams and different cultures, I like the team work
                and to give ideas and hear everybody is one of my preferred way
                of work. Everybody has something to say.
                <br />I love to workout and visit new places. Get to know new
                people and understand their ideas. Always everybody's ideas are
                important. For me, the comunication is the clue.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card roundedCards">
            <div className="card-body">
              <h4 className="card-title">QUALITY ASSURANCE</h4>
              <hr className="hr-line" />
              <p className="card-text">
                As a QA Enginner, I have experience in Front End and Back End
                testing, also I have experience in performance testing. <br />
                I have the ISTQB certification and also I know how to create UI
                Automated test ussing Cypress and Selenium.
                <br />
                For the Back End testing automation, I know to use javascript to
                create API tests integrated with mocha and chai.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card roundedCards">
            <div className="card-body">
              <h4 className="card-title">FULL STACK DEVELOPMENT</h4>
              <hr className="hr-line" />
              <p className="card-text">
                As a full stack student, I have learned how to create full stack
                responisive projects from zero. I understand how does html and
                css integrated work and also how can we integrate all the
                resources. I know how do the http methods work and how to use
                them to connetct to mongoose database.
                <br />I am able to work with react and express, to create and
                use the CRUD expresions between the Backend and the FrontEnd
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
