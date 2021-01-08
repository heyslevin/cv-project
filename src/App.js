import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="small-container">
        <div className="flex-row">
          <hd />

          <div className="flex-large">
            <h1>James Donovan</h1>
            <input type="button" value="Edit" />
          </div>
          <div className="flex-large">
            <h5>
              jamesdonovan@gmail.com <br />
              (956) 581 7332
            </h5>
          </div>
        </div>

        <hr />

        <div className="flex-row">
          <div className="flex-large">
            <h2>Education</h2>
            <input type="button" value="Edit" />
          </div>
          <div className="flex-large">
            <h5>
              Princeton <br />
              Class of 2005
            </h5>
            <p>Graduated with Honors</p>
          </div>
        </div>

        <hr />

        <div className="flex-row">
          <div className="flex-large">
            <h2>Experience</h2>
            <input type="button" value="Edit" />
          </div>
          <div className="flex-large">
            <h5>
              IBM <br />
              2000-2005
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              aliquam et nisl at tincidunt. Morbi lacus tellus, placerat vel
              purus sed, pharetra malesuada dolor. Aliquam erat volutpat.
              Maecenas cursus eleifend porta. Nulla facilisi. Praesent
              condimentum elementum cursus. Nulla facilisi. Fusce auctor orci
              sit amet urna tristique vestibulum.
            </p>

            <hr />
            <h5>
              Microsoft <br />
              2006-2010
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              aliquam et nisl at tincidunt. Morbi lacus tellus, placerat vel
              purus sed, pharetra malesuada dolor. Aliquam erat volutpat.
              Maecenas cursus eleifend porta. Nulla facilisi. Praesent
              condimentum elementum cursus. Nulla facilisi. Fusce auctor orci
              sit amet urna tristique vestibulum.
            </p>
          </div>
        </div>

        <hr />
        <div className="footer">
          <div className="flex-row">
            <div className="flex-large">
              <p>James Donovan</p>
            </div>
            <div className="flex-large">
              <p>Copyright 2020©</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
