import React from "react"
import './fiche.styles.css'

export const Fiche = (props) => (

  <div className="fiche-container">
    <img src={`https://robohash.org/${props.monstre.id}?set=set3&size=180x180`} alt="monstre"/>
    <h2>{props.monstre.name}</h2>
    <p>{props.monstre.email}</p>
  </div>

)