import React, { Component } from 'react';
import '../scss/LikeButton.scss';

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isItemLiked: true
    }
    this.favoritesStorage = this.props.favorites
    console.log("like button",this.favoritesStorage);
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike(e) {
    this.setState(state => ({
      isItemLiked: !state.isItemLiked
    }));
    this.favoritesStorage.push(this.state.isItemLiked);
    this.saveToStorage();
  }

  saveToStorage() {
    localStorage.setItem('favorite', JSON.stringify(this.favoritesStorage))
    console.log("save to Storage method", this.favoritesStorage);
  }

  render() {
    return(
      <div>
        <img onClick={this.handleLike}
        src={this.state.isItemLiked ? this.props.unlike : this.props.like}
        value={this.state.isItemLiked ? this.props.unlike : this.props.like}
        className="like-btn"></img>
      </div>
    );
  }
}

export default LikeButton;
