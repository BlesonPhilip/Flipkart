import {Favorite} from '@mui/icons-material'
import React from 'react';
import './Card.css';

const Card = ({offerPrice,image,name,rating,actualPrice}) => {
  return (
    <div className='card'>
        <div className='card__heart'>
          <Favorite />
        </div>
        <div className='card__image'>
          <img src={image} alt="images" />
        </div>
        <div className="contentDet">

        
        <div className='card__details'>
          <p className="title">Adidas</p>
          <p>running shoes</p>
          <span className="span1">{offerPrice}</span>
          <span className="span2">{actualPrice}</span>
          <span className="span3">56%</span>
        </div>
        <div className='card__size'>
          <p>Size<span>6,7,8,9</span></p>
        </div>

    </div>
    </div>
  )
}

export default Card
