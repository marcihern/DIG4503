import React from "react";
import "./index.css";

class SkillBars extends React.Component {
  render() {
    return (
      <div className="skillbars">
        <ul>
          <li id="list" className="ai">Illustrator</li>
          <li id="list" className="ps">Photoshop</li>
          <li id="list" className="xd">XD</li>
          <li id="list" className="html">HTML</li>
          <li id="list" className="css">CSS</li>
          <li id="list" className="js">JavaScript</li>
          <li id="list" className="react">React</li>
        </ul>
      </div>
    );
  }
}

export default SkillBars;
