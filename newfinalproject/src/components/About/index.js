import React from "react";
import SkillBars from "../SkillBars/index.js";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <h2>About</h2>
        <p>I am Marcela Hernandez, a fourth-year student studying Digital Media with a focus on Web and Social Platforms at the University of Central Florida. Currently, I am working with the UCF Technology Product Center as a Graphic Designer. Aside from designing marketing material for the computer store I also tutor fellow students on a variety of Adobe programs such as Illustrator, Photoshop, XD, and InDesign.</p>
        <p>Throughout my four years at UCF I have also learned front-end coding languages such as HTML, CSS, and Javascript. More recently, I have become familiar with PHP, MySQL, and React. I also have experience in sales and customer service through a self-run Etsy shop called Crybaby Factory. I hope to utilize these skills to find a summer or fall internship within the UI/UX field in 2020.</p>
        <p>If you have any questions please head over to the contact page to find out how to get in touch with me. </p>
        <h2>Education</h2>
          <div className="grid">
            <div className="item">
              <br />University of Central Florida | 2016-2020
              <br />BA Digital Media - Web and Social Platforms
            </div>
            <div className="item">
              <br />Coral Gables Sr. High School | 2012-2016
              <br />Visual and Performing Arts - Dance
            </div>
          </div>
        <h2>Experience</h2>
          <div className="grid2">
            <div className="item2">
              <p className="date">2019-Present</p>
              <p className="role">Communications Impact Team</p>
              <p className="company">UCF Knight-Thon</p>
            </div>
            <div className="item2">
              <p className="date">2018-Present</p>
              <p className="role">Public Relations Chair</p>
              <p className="company">Women Student Union</p>
            </div>
            <div className="item2">
              <p className="date">2017-Present</p>
              <p className="role">Graphic Designer</p>
              <p className="company">UCF Technology Product Center</p>
            </div>
          </div>
        <h2>Skills</h2>
        <SkillBars />
      </div>
    );
  }
}

export default About;
