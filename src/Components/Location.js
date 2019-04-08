import React, { Component } from 'react';
import '../scss/Location.scss';
import LikeButton from './LikeButton.js'
import like from '../images/Like.svg'
import unlike from '../images/Unlike.svg'



function Location(props) {
  console.log("location ",props.favorites);
  return(
    <div>
      <article className="locationCard">
        <img src={props.logo} className="locationLogo" />
        <LikeButton
          like={like}
          unlike={unlike}
          favorites={props.favorites} />
        <div className="locationInfo">
          <h3>{props.name}</h3>
          <p>{props.address}</p>
        </div>
      </article>
    </div>
    )
}

export default Location;
