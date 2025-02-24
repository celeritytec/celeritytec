// import React from "react";

// const Testimonials = () => {
//   return (
//     <section className="client_section layout_padding">
//       <div className="container">
//         <div className="heading_container heading_center psudo_white_primary mb_45">
//           <h2>What Our <span>Customers Say</span></h2>
//         </div>
//         <div className="carousel-wrap">
//           <div className="owl-carousel client_owl-carousel">
//             {testimonials.map((testimonial, index) => (
//               <div className="item" key={index}>
//                 <div className="box">
//                   <div className="img-box">
//                     <img src={testimonial.image} alt={testimonial.name} className="box-img" />
//                   </div>
//                   <div className="detail-box">
//                     <div className="client_id">
//                       <div className="client_info">
//                         <h6>{testimonial.name}</h6>
//                         <p>{testimonial.designation}</p>
//                       </div>
//                       <i className="fa fa-quote-left" aria-hidden="true"></i>
//                     </div>
//                     <p>{testimonial.feedback}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const testimonials = [
//   {
//     name: "LusDen",
//     designation: "Happy Client",
//     image: "images/client1.jpg",
//     feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//   },
//   {
//     name: "Zen Court",
//     designation: "Satisfied Customer",
//     image: "images/client2.jpg",
//     feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//   }
//   // Add more testimonials as needed
// ];

// export default Testimonials;

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Testimonials = () => {
  return (
    <section className="testimonial_section layout_padding">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>What <span>Our Customers Say</span></h2>
          <p>Hear from our satisfied clients who have experienced the Celerity Technocrats difference.</p>
        </div>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial_box">
              <p>"{testimonial.feedback}"</p>
              <h5>- {testimonial.name}, {testimonial.designation}</h5>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

const testimonials = [
  {
    name: "LusDen",
    designation: "Happy Client",
    feedback: "Celerity Technocrats transformed our vision into a reality with a stunning website that exceeded our expectations.",
  },
  {
    name: "Zen Court",
    designation: "Satisfied Customer",
    feedback: "Working with Celerity Technocrats was a seamless experience. Their team delivered a top-notch e-commerce platform that boosted our sales.",
  }
];

export default Testimonials;
