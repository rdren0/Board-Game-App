import React, { Component } from 'react';
import '../scss/Location.scss';


function Location(props) {
  return(
    <div>
      <article className="locationCard">
        <img src={props.image} className="locationLogo" />
        <div className="locationInfo">
          <h3>{props.name}</h3>
          <h4>{ props.address }</h4>
        </div>
      </article>
    </div>
    )
}

export default Location;