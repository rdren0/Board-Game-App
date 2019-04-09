import React, { Component } from 'react';
import '../scss/Location.scss';
import LikeButton from './LikeButton.js'
import like from '../images/Like.svg'
import unlike from '../images/Unlike.svg'



function Location(props) {
  return(
    <div className="location-wrapper">
      <article className="locationCard" value={props.name}>
        <img src={props.logo} className="locationLogo" />
        <LikeButton
          like={like}
          unlike={unlike}
          isFavorite={props.isFavorite}
          toggleFav={props.toggleFav}
          name={props.name}/>
        <div className="locationInfo">
          <h3>{props.name}</h3>
          <p>{props.address}</p>
        </div>
      </article>
    </div>
    )
}

export default Location;
