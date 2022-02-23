import React from 'react';
import Card from './Card';

export default function CardList({ 
  cards, 
  player, 
  // setFrom, 
  // selectedCard, 
  // setSelectedCard, 
}) {




  return (
    <div className='card-list'>
      {
        cards.map((card => <Card 
          key={card.suit + card.value} 
          player={player}
          card={card}
          // setSelectedCard={setSelectedCard} 
          // selectedCard={selectedCard}
          // setFrom={setFrom}
        />))
      }
    </div>
  );
}
