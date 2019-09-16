import ReactDOM from "react-dom";
import React from "react";
import "./styles.css";
import DynamicStars from './DynamicStars.js';
import QuarterStars from './QuarterStars.js';


class FiveStars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      ratingEntry: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      ratingEntry: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      rating: this.state.ratingEntry,
      ratingEntry: ""
    });
  }

  render() {
    return (
    <div>
      <DynamicStars/>
      <QuarterStars rating={this.state.rating}/>
      <form onSubmit={this.handleSubmit}>
      <label>
        Rating: {this.state.rating} <br/>
        <input type="text" name="rating" value={this.state.ratingEntry} onChange={this.handleChange}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
    </div>
    )
  }

}

var mountNode = document.getElementById("app");
ReactDOM.render(<FiveStars/>, mountNode);