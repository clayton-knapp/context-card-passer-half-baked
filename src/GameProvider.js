//import Context
import { 
  createContext, 
  useContext, 
  useState 
} from 'react';
import initialCards from './cards-data';

//create a game context "component"? using create context
const GameContext = createContext();

//create a function called GameProvider that takes in children object - define your state here and bundle it in and object
//then return your GameContext component with the value= your bundled state object
//AND pass children inside of the tags
//When we call Game Provider component and stick App in it, App becomes the Children and renders inside of it
export default function GameProvider({ children }) {

  const [deck, setDeck] = useState(initialCards);
  const [selectedCard, setSelectedCard] = useState();
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);
 
  const gameStateAndSetters = {
    deck, setDeck,
    selectedCard, setSelectedCard,
    playerOneHand, setPlayerOneHand,
    playerTwoHand, setPlayerTwoHand,
    playerThreeHand, setPlayerThreeHand,
    from, setFrom,
    to, setTo    
  };

  return <GameContext.Provider value={gameStateAndSetters}>
    {/* what is this and why do we need it? if the funciton takes in children object as an argument why do we put it here as the child of our provider element when we are returning? */}
    {children} 
  </GameContext.Provider>;

}

// then we have function that we call in a component - this is how we get access to state
export function useGameContext() {
  return useContext(GameContext);
}