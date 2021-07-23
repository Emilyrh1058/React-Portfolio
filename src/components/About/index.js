import React from "react";
import profilePic from "../../assets/images/Emily-photo.png";
import Footer from "../Footer";

function About() {
  return (
    <section className="my-5">
      <div className="container d-flex flex-column text-center">
        <div className="p-2">
          <h1 id="about">Hi, I'm Emily!</h1>
          <img
            src={profilePic}
            className="profile-pic"
            style={{ width: "50%" }}
            alt="Emily"
          />
        </div>
        <div className="p-2">
          <p className="aboutMe">
            I've recently gained a Full Stack Web Developer certification
            through the University of Texas at Austin. Previously, I stayed at
            home during the Covid-19 pandemic to care for my two small children.
            Before the pandemic, I was in the oilfield serving as range of
            things from HES Technician to Office Mangager. In my personal life I
            enjoy anything to do with the ocean (scuba diving, free diving, deep
            sea fishing, beach combing) as well as travel. I'm raising two
            amazing children who are the light of my life.
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}

export default About;
