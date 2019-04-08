import React, { Component } from 'react';
import '../scss/Location.scss';


function Location(props) {
  return(
    <div>
      <article className="locationCard">
        <img src={props.logo} className="locationLogo" />
        <img src={props.unlike} className="like-btn"></img>
        <div className="locationInfo">
          <h3>{props.name}</h3>
          <p>{ props.address }</p>
        </div>
      </article>
    </div>
    )
}

export default Location;
