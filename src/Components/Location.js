import React, { Component } from 'react';
import '../scss/Location.scss';
import LikeButton from './LikeButton.js'
import like from '../images/Like.svg'
import unlike from '../images/Unlike.svg'



function Location(props) {
  return (
    <div className="location-wrapper">
      <article className="locationCard" value={ props.name }>
        <img src={ props.logo } className="locationLogo" />
        <div className="locationInfo">
          <h2>{ props.name }</h2>
          <p>{ props.address }</p>
          <p>M-F: { props.weekdayOpen }-{ props.weekdayClose }</p>
          <p>Sa & Su: { props.weekendOpen}-{props.weekendClose }</p>
          <a href={ props.website }>{ props.website }</a>
        </div>
        <LikeButton
          like={ like }
          unlike={ unlike }
          isFavorite={ props.isFavorite }
          toggleFav={ props.toggleFav }
          name={ props.name } />
      </article>
    </div>
  )
}

export default Location;
