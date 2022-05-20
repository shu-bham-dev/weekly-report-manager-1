import React, { Component } from "react";

class UserCards extends Component {
  render() {
    return (
      <div className="clearfix">
        <div className="row">
            <div className="col-md-4 animated fadeIn">
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                   
                  </div>
                  <h5 className="card-title">
                    Shubham Sahu
                  </h5>
                  <p className="card-text">
                    Varanasi
                    <br />
                    <span className="phone">7007592373</span>
                  </p>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default UserCards;
