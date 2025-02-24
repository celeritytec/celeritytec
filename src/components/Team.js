import React from "react";

const Team = () => {
  return (
    <section className="team_section layout_padding">
      <div className="container-fluid">
        <div className="heading_container heading_center">
          <h2>Our <span>Team</span></h2>
        </div>
        <div className="team_container">
          <div className="row">
            {teamMembers.map((member, index) => (
              <div className="col-lg-3 col-sm-6" key={index}>
                <div className="box">
                  <div className="img-box">
                    <img src={member.image} alt={member.name} className="img1" />
                  </div>
                  <div className="detail-box">
                    <h5>{member.name}</h5>
                    <p>{member.position}</p>
                  </div>
                  <div className="social_box">
                    {member.socials.map((social, i) => (
                      <a href={social.link} key={i}>
                        <i className={`fa fa-${social.icon}`} aria-hidden="true"></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const teamMembers = [
  {
    name: "Joseph Brown",
    position: "Marketing Head",
    image: "images/team-1.jpg",
    socials: [
      { icon: "facebook", link: "#" },
      { icon: "twitter", link: "#" },
      { icon: "linkedin", link: "#" },
      { icon: "instagram", link: "#" },
      { icon: "youtube-play", link: "#" }
    ]
  },
  {
    name: "Nancy White",
    position: "Marketing Head",
    image: "images/team-2.jpg",
    socials: [
      { icon: "facebook", link: "#" },
      { icon: "twitter", link: "#" },
      { icon: "linkedin", link: "#" },
      { icon: "instagram", link: "#" },
      { icon: "youtube-play", link: "#" }
    ]
  }
  // Add more team members here
];

export default Team;