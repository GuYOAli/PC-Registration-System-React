import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check Out What Students Said About Our System!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/c.jpg'
              text='"We are very happy, Now we can feel free to move on with our PC."'
              label='JJU Students'
            />
            <CardItem
              src='images/d.jpg'
              text='"Now I can go out and get in easily and quikly"'
              label='Hibo'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/b.jpg'
              text='"Now I can through it away cause I trust the System."'
              label='Najib'
            />
            <CardItem
              src='images/a.jpg'
              text='I am glad to here about the system even if i do not have a PC keep on it'
              label='Abel'
            />
            <CardItem
              src='images/e.jpg'
              text='"I think starting this minute i do not think any PC will get lost."'
              label='Limit'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
