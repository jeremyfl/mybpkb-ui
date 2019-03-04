import React, { Component } from "react";
import LazyLoad from "react-lazyload";

// Gambar Slide
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
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <LazyLoad offset={100} once>
                <img className="d-block w-100" src={slide2} alt="First slide" />
              </LazyLoad>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={slide3} alt="First slide" />
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
