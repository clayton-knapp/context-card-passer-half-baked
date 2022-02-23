import './App.css';
import Player from './Player';
import CardList from './CardList';
// import initialCards from './cards-data';
// import { useState } from 'react';
import ExecutePassButton from './ExecutePassButton';
import { useGameContext } from './GameProvider';

function App() {
  // const [deck, setDeck] = useState(initialCards);
  // const [selectedCard, setSelectedCard] = useState();
  // const [playerOneHand, setPlayerOneHand] = useState([]);
  // const [playerTwoHand, setPlayerTwoHand] = useState([]);
  // const [playerThreeHand, setPlayerThreeHand] = useState([]);
  // const [from, setFrom] = useState('deck');
  // const [to, setTo] = useState(1);

  const { 
    deck, setDeck,
    selectedCard, setSelectedCard,
    playerOneHand, setPlayerOneHand,
    playerTwoHand, setPlayerTwoHand,
    playerThreeHand, setPlayerThreeHand,
    from,
    to, 
  } = useGameContext();

  function findCardIndex(value, suit, cards) {
    return cards.findIndex(card => card.value === value && card.suit === suit);
  }

  //defined the function here but could move it and state into execute pass button component
  function passCard(card) {
    const playerHands = [playerOneHand, playerTwoHand, playerThreeHand];
    const playerHandSetFunctions = [setPlayerOneHand, setPlayerTwoHand, setPlayerThreeHand];

    // arrays start at zero, but our players start at 1 :shrug:
    const toHand = playerHands[to - 1] || deck; //WHY || deck ?????
    const fromHand = playerHands[from - 1] || deck;

    const toSetFunction = playerHandSetFunctions[to - 1] || setDeck; //WHY || deck ?????
    const fromSetFunction = playerHandSetFunctions[from - 1] || setDeck;

    const cardToMoveIndex = findCardIndex(card.value, card.suit, fromHand); //find the index of the card in the From hand that matches the card selected in state

    const [cardToMove] = fromHand.splice(cardToMoveIndex, 1); //splice the card out of the FROM hand and get that card to push to To Hand

    toHand.push(cardToMove); //Push the card to the To hand

    toSetFunction([...toHand]); //push the new to hand where card was added to THAT players hand
    fromSetFunction([...fromHand]); //push the new from hand where the card was taken out of to THAT players hand

    setSelectedCard(null);
  }

  return (
    <div className="App">
      <section>
        <h2>Card Game</h2>
        {/* if the player names are numbers, that will make our life easier later because we can reuse numbers as arrays. Note that this will make our app brittle! */}
        <Player 
          player={1} 
          hand={playerOneHand} 

          // to={to} 
          // setTo={setTo} 

          // setFrom={setFrom} 
          // selectedCard={selectedCard} 
          // setSelectedCard={setSelectedCard} 
        />
        <Player 
          player={2} 
          hand={playerTwoHand} 

          // to={to} 
          // setTo={setTo} 

          // setFrom={setFrom} 
          // selectedCard={selectedCard} 
          // setSelectedCard={setSelectedCard} 
        />
        <Player 
          player={3} 
          hand={playerThreeHand} 

          // to={to} 
          // setTo={setTo} 

          // setFrom={setFrom} 
          // selectedCard={selectedCard} 
          // setSelectedCard={setSelectedCard} 
        />
        <CardList 
          player={'deck'} 
          cards={deck} 
          // selectedCard={selectedCard} 
          // setSelectedCard={setSelectedCard}
          // setFrom={setFrom} 
        />
      </section>
      <section>
        {
          selectedCard && <ExecutePassButton 
            passCard={passCard} 
            // from={from} 
            // to={to} 
            // selectedCard={selectedCard} 
          />
        }
      </section>
    </div>
  );
}

export default App;
