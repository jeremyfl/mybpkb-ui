import React, { Component } from "react";
import LazyLoad from "react-lazyload";

import Placeholder from "./Placeholder";

// Gambar Slide
import slide1 from "../images/banner_1.jpg";
import slide2 from "../images/banner_2.jpg";
import slide3 from "../images/banner_3.jpg";

export default class Slider extends Component {
  render() {
    return (
      <header>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <LazyLoad offset={100} once>
                <img className="d-block w-100" src={slide1} alt="First slide" />
              </LazyLoad>
            </div>
            <div className="carousel-item">
              <LazyLoad offset={-100} placeholder={<Placeholder />} once>
                <img className="d-block w-100" src={slide2} alt="First slide" />
              </LazyLoad>
            </div>
            <div className="carousel-item">
              <LazyLoad offset={0} placeholder={<Placeholder />} once>
                <img className="d-block w-100" src={slide3} alt="First slide" />
              </LazyLoad>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </header>
    );
  }
}
