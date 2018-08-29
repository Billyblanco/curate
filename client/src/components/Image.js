import React from 'react'
import greenery from '../img/greenery=bouquet.jpg'
import mine from '../img/mine.jpg'
import m from '../img/marissa-bouquet.jpg'
import white from '../floral/simpleWhite.jpg'
import antherium from '../floral/antherium.jpg'
import maddie from '../floral/maddie.jpg'
import girl from '../floral/littleGirly.jpg'
import '../css/Image.css'

export default function Image () {
  return (
    <div className='image-container'>
    <h1>not sure what you want?</h1>
    <h2>check out what other curators have selected</h2>
        <div className='image-scroll'>
          <img src={m} alt='example' height='450' width='450'/>
          <img src={antherium} alt='example' height='450'/>
          <img src={white} alt='example' height='450'/>
          <img src={mine} alt='example' height='450' width='450'/>
          <img src={maddie} alt='example' height='450'/>
          <img src={girl} alt='example' height='450' />
          <img src={greenery} alt='example' height='450'/>
        </div>
    </div>
  )
}