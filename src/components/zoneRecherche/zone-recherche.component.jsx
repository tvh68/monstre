import React from 'react'
import './zone-recherche.styles.css'



export const ZoneRecherche = ({ placeholder, gererChangement }) => (

  <input
    className = "recherche"
    type="search" placeholder={placeholder}
    onChange={gererChangement}
  />
)