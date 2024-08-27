// src/AboutUsPage.js

// import React from 'react';

import "./AboutUsPage.css";

const teamMembers = [
  {
    name: "Yesh",
    role: "Team Leader | AI Developer & Entrepreneur",
    bio: "Yesh is an experienced AI developer and entrepreneur with a passion for building innovative solutions. He leads the team with a focus on integrating cutting-edge AI technologies.",
    image: "img/team/yesh.png", // Replace with actual path to Yesh's image
  },

  //   {
  //     name: "Member 2",
  //     role: "Developer",
  //     bio: "A skilled developer with expertise in front-end technologies and a keen eye for design.",
  //     image: "path-to-member2-image.jpg", // Replace with actual path to Member 2's image
  //   },
  //   {
  //     name: "Member 3",
  //     role: "Developer",
  //     bio: "Specializes in back-end development, ensuring robust and scalable server-side applications.",
  //     image: "path-to-member3-image.jpg", // Replace with actual path to Member 3's image
  //   },
  //   {
  //     name: "Member 4",
  //     role: "Developer",
  //     bio: "Expert in full-stack development, bridging the gap between front-end and back-end technologies.",
  //     image: "path-to-member4-image.jpg", // Replace with actual path to Member 4's image
  //   },
  //   {
  //     name: "Member 5",
  //     role: "Developer",
  //     bio: "A versatile developer with a strong focus on mobile app development and user experience.",
  //     image: "path-to-member5-image.jpg", // Replace with actual path to Member 5's image
  //   },
];

const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Meet the passionate team behind "My Local Ganesh".</p>
      </header>

      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img
              src={member.image}
              alt={member.name}
              className="member-image"
            />
            <h3>{member.name}</h3>
            <p className="role">{member.role}</p>
            <p className="bio">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsPage;
