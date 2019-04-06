import React, { Component } from 'react';



function Location(props){
  return(
    <div>
      <article>
      <h3> {props.name}</h3>
      <h4> {props.address} </h4>
      </article>
    </div>
    )
}

export default Location;