import Letters from "./components/Letters/Letters"
import AppCSS from "./AppCSS.module.css"
import { KeyboardEvent, useCallback, useEffect, useState } from "react"
import archive from "./assets/simpleWords.json"
import GuessingWord from "./components/GuessingWord/GuessingWord"
import HangmanSvg from "./components/HangmanSvg/HangmanSvg"


function App() {
  
  const [wordFromArchive, setWordFromArchive] = useState(() => {
     return archive[Math.floor(Math.random() * archive.length)].toLowerCase()
  })
  
  
  const [usedLetters, setUsedLetters] = useState<string[]>([]) 

  const incorrectLetters = usedLetters.filter((letter) => !wordFromArchive.includes(letter));

  const correctLetters = usedLetters.filter(letter => wordFromArchive.includes(letter)); 

  const addLetter= useCallback((letter:string) => {
    // letter = letter.toLowerCase();
    if (usedLetters.includes(letter)) return

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
      <div>STARTING / LOOSING</div>
      <HangmanSvg numberWrongLetters={incorrectLetters.length}/>
      <GuessingWord usedLetters={usedLetters} wordFromArchive={wordFromArchive} />
      <Letters 
      correctLetters={correctLetters} 
      incorrectLetters={incorrectLetters}
      addLetter={addLetter}
      />
    </div>
  )
}

export default App
