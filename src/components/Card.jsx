import React from 'react'

function Card({Topic, Image}) {
  return (
    <div className='card'>
      <div className='upper'>
      <img src={`./${Image}.png`}></img>
      <h3>{Topic}</h3>
      </div>     
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
    </div>
  )
}

export default Card
