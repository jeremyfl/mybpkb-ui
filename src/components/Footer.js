import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer-basic">
          <footer>
            <div className="social">
              <a>
                <i className="icon ion-social-instagram" />
              </a>
              <a>
                <i className="icon ion-social-snapchat" />
              </a>
              <a>
                <i className="icon ion-social-twitter" />
              </a>
              <a>
                <i className="icon ion-social-facebook" />
              </a>
            </div>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a>Home</a>
              </li>
              <li className="list-inline-item">
                <a>Services</a>
              </li>
              <li className="list-inline-item">
                <a>About</a>
              </li>
              <li className="list-inline-item">
                <a>Terms</a>
              </li>
              <li className="list-inline-item">
                <a>Privacy Policy</a>
              </li>
            </ul>
            <p className="copyright">MyBPKB © 2018</p>
          </footer>
        </div>
      </div>
    );
  }
}
