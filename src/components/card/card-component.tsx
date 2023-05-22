import { Monster } from '../../App';

import './card.style.css'

type CardProps = {
  monster: Monster;
}

const Card = ({ monster }: CardProps) => {
  //destructering, this.props is a.k.a monster
  const { id, name, email } = monster;

  return(
    <div className='card'>
      <img 
        alt={`monster ${name}`} 
        src={`https://robohash.org/${id}?set=set4&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}

export default Card;