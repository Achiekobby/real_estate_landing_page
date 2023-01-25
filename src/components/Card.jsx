import React from 'react'
import "../scss/Card.scss"
const Card = ({title, icon, desc}) => {
  return (
    <div className="card">
      <div className="card_icon_container">
        <div className="icon_container">
          {icon}
        </div>
      </div>
      <div className="card_header">{title}</div>
      <div className="card_description">{desc}</div>
    </div>
  )
}

export default Card