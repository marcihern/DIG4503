import React from "react";
import ReactTypingEffect from 'react-typing-effect';

class Home extends React.Component {
  render() {
    return (
      <div>
        <p className="centered"><ReactTypingEffect className="typingeffect" text={['Hello, welcome to my website.']} speed={100} eraseDelay={700}/></p>
      </div>
    );
  }
}

export default Home;
