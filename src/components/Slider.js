import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "../styles/style.css";

const Slider = () => {
  return (
    <section className="slider_section">
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="detail-box">
                  <h1>Innovative</h1>
                  <p> Elevate your online presence with cutting-edge web development solutions tailored for your business growth.</p>
                  <div className="btn-box">
                    <a href="/" className="btn1">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img-box">
                  <img src="images/slider-img.png" alt="Crypto" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="detail-box">
                  <h1>Scalable E-Commerce Platforms</h1>
                  <p>Launch your online store with feature-rich, scalable e-commerce solutions designed for maximum conversions.</p>
                  <div className="btn-box">
                    <a href="/" className="btn1">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img-box">
                  <img src="images/slider-img.png" alt="Bitcoin Investment" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Slider;
