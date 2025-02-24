import React from "react";

const About = () => {
  return (
    <section className="about_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            About <span>Us</span>
          </h2>
          <p>
            Celerity Technocrats is a leading web development company dedicated to delivering innovative and high-quality digital solutions. With expertise in modern technologies and a passion for excellence, we help businesses build dynamic and user-friendly websites that drive success.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="img-box">
              <img src="images/about-img.png" alt="About Us" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-box">
              <h3>We Are Celerity Technocrats</h3>
              <p>
                At Celerity Technocrats, we specialize in crafting customized web solutions tailored to our clients' unique needs. Our team of skilled developers, designers, and strategists work collaboratively to turn ideas into reality, ensuring seamless user experiences and cutting-edge designs.
              </p>
              <p>
                Whether it's a startup or an established enterprise, we provide scalable and efficient solutions that enhance digital presence and drive growth. Our commitment to innovation, quality, and client satisfaction sets us apart in the industry.
              </p>
              <a href="/">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
