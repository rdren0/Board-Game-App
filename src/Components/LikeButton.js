import React, { Component } from 'react';
import '../scss/LikeButton.scss';

class LikeButton extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <img src={this.props.unlike} className="like-btn"></img>
      </div>
    );
  }
}

export default LikeButton;
