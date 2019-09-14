import ReactDOM from "react-dom";
import React from "react";
import "./styles.css";
import DynamicStars from './DynamicStars.js';
import QuarterStars from './QuarterStars.js';


class FiveStars extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <DynamicStars/>
      <QuarterStars rating={3.8}/>
    </div>
    )
  }

}

var mountNode = document.getElementById("app");
ReactDOM.render(<FiveStars/>, mountNode);