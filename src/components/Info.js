import React from "react";
import SocialMedia from "./SocialMedia";

// const Info = () => {
//   return (
//     <section className="info_section layout_padding2">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6 col-lg-3 info_col">
//             <div className="info_contact">
//               <h4>Address</h4>
//               <div className="contact_link_box">
//                 <a href="/">
//                   <i className="fa fa-map-marker" aria-hidden="true"></i>
//                   <span>Location</span>
//                 </a>
//                 <a href="tel:+011234567890">
//                   <i className="fa fa-phone" aria-hidden="true"></i>
//                   <span>Call +01 1234567890</span>
//                 </a>
//                 <a href="mailto:demo@gmail.com">
//                   <i className="fa fa-envelope" aria-hidden="true"></i>
//                   <span>demo@gmail.com</span>
//                 </a>
//               </div>
//             </div>
//             <div className="info_social">
//               <a href="/">
//                 <i className="fa fa-facebook" aria-hidden="true"></i>
//               </a>
//               <a href="/">
//                 <i className="fa fa-twitter" aria-hidden="true"></i>
//               </a>
//               <a href="/">
//                 <i className="fa fa-linkedin" aria-hidden="true"></i>
//               </a>
//               <a href="/">
//                 <i className="fa fa-instagram" aria-hidden="true"></i>
//               </a>
//             </div>
//           </div>
//           <div className="col-md-6 col-lg-3 info_col">
//             <div className="info_detail">
//               <h4>Info</h4>
//               <p>We provide professional services with a focus on customer satisfaction and excellence.</p>
//             </div>
//           </div>
//           <div className="col-md-6 col-lg-2 mx-auto info_col">
//             <div className="info_link_box">
//               <h4>Links</h4>
//               <div className="info_links">
//                 <a href="/">Home</a>
//                 <a href="/about">About</a>
//                 <a href="/services">Services</a>
//                 <a href="/why">Why Us</a>
//                 <a href="/team">Team</a>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-6 col-lg-3 info_col">
//             <h4>Subscribe</h4>
//             <form action="#">
//               <input type="text" placeholder="Enter email" />
//               <button type="submit">Subscribe</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

const Info = () => {
  return (
    <section className="info_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 info_col">
            <h4>Contact Us</h4>
            <p>Email: celeritytechnocrats@gmail.com</p>
            <p>Phone: +1 N/A</p>
            <p>Address: 123 Tech Street, Innovation City</p>
          </div>
          {/* <div className="col-md-6 col-lg-3 info_col">
            <h4>Our Services</h4>
            <ul>
              <li>Web Development</li>
              <li>E-commerce Solutions</li>
              <li>Custom Software Development</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
           */}
           <div className="col-md-6 col-lg-2 mx-auto info_col">
            <div className="info_link_box">
              <h4>Links</h4>
              <div className="info_links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/why">Why Us</a>
                <a href="/team">Team</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 info_col">
            {/* 
            <p>Stay connected through our social media channels.</p> */}
            <SocialMedia></SocialMedia>
          </div>
          <div className="col-md-6 col-lg-3 info_col">
            <h4>Subscribe</h4>
            <p>Get the latest updates and news by subscribing to our newsletter.</p>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;