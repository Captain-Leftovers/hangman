import Letters from "./components/Letters/Letters"
import AppCSS from "./AppCSS.module.css"
import { KeyboardEvent, useCallback, useEffect, useState } from "react"
import archive from "./assets/simpleWords.json"
import GuessingWord from "./components/GuessingWord/GuessingWord"
import HangmanSvg from "./components/HangmanSvg/HangmanSvg"
import ReloadButton from "./components/ReloadButton/ReloadButton"

function App() {
  const [wordFromArchive, setWordFromArchive] = useState(() => {
     return newWord()
  })
  
  
  const [usedLetters, setUsedLetters] = useState<string[]>([]) 

  function newWord() {
    return archive[Math.floor(Math.random() * archive.length)].toLowerCase()
  }

  function newGameFn(){
    setWordFromArchive(newWord())
    setUsedLetters([])
  }
  

  const incorrectLetters = usedLetters.filter((letter) => !wordFromArchive.includes(letter));

  const correctLetters = usedLetters.filter(letter => wordFromArchive.includes(letter)); 
  const gameIsLost = incorrectLetters.length >= 6;
  const gameIsWon = wordFromArchive.split("").every((letter)=> usedLetters.includes(letter));
  const disabled = gameIsLost || gameIsWon;
  
  const addLetter= useCallback((letter:string) => {
    // letter = letter.toLowerCase();
    if (usedLetters.includes(letter) || gameIsLost || gameIsWon) return
<ReloadButton/>
    setUsedLetters(oldLetters => [...oldLetters, letter])
  },[usedLetters])



  useEffect(() => {
       const keyboardHandler = (e:KeyboardEvent) =>{
       let letter:string = e.key

       if(!letter.match(/^[a-zA-Z]$/))  return
       e.preventDefault()
       addLetter(letter.toLowerCase())
       
    }

    document.addEventListener("keypress",keyboardHandler)

    return () => {
      document.removeEventListener("keypress",keyboardHandler)
    }
  }, [usedLetters])



  return (
    <div className={AppCSS.container}>
      <div className={AppCSS.message}>
        {gameIsWon && "Congratulations You Guessed Correctly"}
        {gameIsLost && "Better Luck Next Time"}
      </div>
      <HangmanSvg numberWrongLetters={incorrectLetters.length}/>
      <GuessingWord usedLetters={usedLetters} showWord={gameIsLost}
        wordFromArchive={wordFromArchive} />
      
      {gameIsLost || gameIsWon
       ? <ReloadButton newGame={newGameFn}/> 
      : <Letters 
      correctLetters={correctLetters} 
      incorrectLetters={incorrectLetters}
      addLetter={addLetter}
      disabled={disabled}
      />
      }
    </div>
  )
}

export default App
