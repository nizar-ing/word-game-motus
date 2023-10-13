import  {useState} from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../guessInput";
import GuessResults from "../GuessResults";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
//import GameOverBanner from "../GameOverBanner";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = useState('running'); // running | won | lost
  const [guesses, setGuesses] = useState([]);

  function handleGuesses(guess){
    const nextGuesses = [ ...guesses, guess];
    setGuesses(nextGuesses);
    if(guess.toUpperCase() === answer) setGameStatus('won');
    else if(nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) setGameStatus('lost');
  }
  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleGuesses={handleGuesses} gameStatus={gameStatus}  />
      {
        gameStatus === 'won' && (
            <WonBanner numberOfGuesses={guesses.length} />
          )
      }
      {
        gameStatus === 'lost' && (
            <LostBanner answer={answer} />
          )
      }
    </>
  );
}

export default Game;
