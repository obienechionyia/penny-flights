import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Destination = ({ country, image, price, id }) => {
  const { setCurrentDestination } = useGlobalContext();
  return (
    <article className='destination-container'>
      <div>
        <Link to={ `/destination/${ id }` } onClick={ () => setCurrentDestination(id) }>
          <img src={ image } alt={ country } className='img' />
        </Link>
      </div>
      <div>
        <h3>{ country }</h3>
        <p>From ${ price }</p>
        <Link to={ `/destination/${ id }` } onClick={ () => setCurrentDestination(id) }>
          More Info
        </Link>
      </div>
    </article>
  )
}

export default Destination