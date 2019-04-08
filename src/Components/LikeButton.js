import React, { Component } from 'react';
import '../scss/LikeButton.scss';

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {isItemLiked: true}
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike() {
    this.setState(state => ({
      isItemLiked: !state.isItemLiked
    }))
  }

  render() {
    return(
      <div>
        <img onClick={this.handleLike} src={this.state.isItemLiked ? this.props.unlike : this.props.like} className="like-btn"></img>
      </div>
    );
  }
}

export default LikeButton;
