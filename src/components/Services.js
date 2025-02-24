import React from "react";

const Services = () => {
return (
  <section className="service_section layout_padding">
    <div className="container">
      <div className="heading_container heading_center">
        <h2>Our <span>Services</span></h2>
        <p>
          At Celerity Technocrats, we offer a wide range of web development services designed to help businesses thrive in the digital age. Our expertise spans across modern web technologies to deliver high-performing and scalable solutions.
        </p>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="box">
            <div className="img-box">
              <img src="images/s1.png" alt="Web Development" />
            </div>
            <div className="detail-box">
              <h5>Web Development</h5>
              <p>We build responsive, fast, and user-friendly websites tailored to your business needs.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="box">
            <div className="img-box">
              <img src="images/s2.png" alt="E-commerce Solutions" />
            </div>
            <div className="detail-box">
              <h5>E-commerce Solutions</h5>
              <p>We create secure and scalable online stores to enhance your digital sales and customer experience.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="box">
            <div className="img-box">
              <img src="images/s3.png" alt="Custom Software Development" />
            </div>
            <div className="detail-box">
              <h5>Custom Software Development</h5>
              <p>We develop tailored software solutions to streamline business processes and boost efficiency.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-box">
        <a href="/">View All Services</a>
      </div>
    </div>
  </section>
);
};

export default Services;
