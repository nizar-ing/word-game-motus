import {useState} from 'react';

function guessInput({gameStatus, handleGuesses}) {
  const [guess, setGuess] = useState('');

  function handleSubmit(event){
      event.preventDefault();
      setGuess('');
      handleGuesses(guess);
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
            required
            disabled={gameStatus !== 'running'}
            id="guess-input"
            type="text"
            value={guess}
            minLength={5}
            maxLength={5}
            onChange={(event) => setGuess(event.target.value.toUpperCase())}
        />
    </form>);
}

export default guessInput;
