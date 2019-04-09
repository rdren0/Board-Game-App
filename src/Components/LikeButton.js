import React, { Component } from 'react';
import '../scss/LikeButton.scss';

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isItemLiked: false
    }
    this.favoritesStorage = this.props.favorites;
    console.log("like button",this.favoritesStorage);
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike(e) {
    const articleEl = e.target.closest('article');
    const title = articleEl.getAttribute('value');
    this.alterStorage(title);
      this.setState(state => ({
      isItemLiked: !state.isItemLiked
    }));
  }

  saveToStorage() {
    localStorage.setItem('favorite', JSON.stringify(this.favoritesStorage))
    console.log("save to Storage method", this.favoritesStorage);
  }

  alterStorage(title) {
    console.log(title)
    const index = this.favoritesStorage.indexOf(title);

    if(this.state.isItemLiked){
      this.favoritesStorage.splice(index, 1);
      this.saveToStorage();
    }else if(index === -1) {
      this.favoritesStorage.push(title);
    } else {
      this.saveToStorage();
    }
      console.log("after splice", this.favoritesStorage, index)

  }

  render() {
    return(
      <div>
        <img onClick={this.handleLike}
        src={this.state.isItemLiked ? this.props.like : this.props.unlike}
        value={this.state.isItemLiked ? this.props.unlike : this.props.like}
        className="like-btn"></img>
      </div>
    );
  }
}
export default LikeButton;
