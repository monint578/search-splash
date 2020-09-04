import React from "react";

const typewriterText = ["mediapark", "career", "employ", "cats"];

class TypeWriter extends React.Component {
  state = { current: typewriterText[0] };

  changeText = () => {
    setTimeout(() => {
      let index = typewriterText.indexOf(this.state.current);
      let newIndex = typewriterText.length > index + 1 ? index + 1 : 0;
      this.setState({ current: typewriterText[newIndex] }, () => {
        this.changeText();
      });
    }, 5000);
  };

  componentDidMount() {
    this.changeText();
  }

  render() {
    return (
      <div>
        <h1>
          Browse for: #<span className="typewriter">{this.state.current}</span>
        </h1>
      </div>
    );
  }
}

export default TypeWriter;
