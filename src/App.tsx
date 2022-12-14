import Letters from "./components/Letters/Letters"
import AppCSS from "./AppCSS.module.css"
import { useState } from "react"
import archive from "./assets/simpleWords.json"
import GuessingWord from "./components/GuessingWord/GuessingWord"
import HangmanSvg from "./components/HangmanSvg/HangmanSvg"


function App() {
  
  const [wordFromArchive, setWordFromArchive] = useState(() => {
     return archive[Math.floor(Math.random() * archive.length)]
  })
  
  const [usedLetters, setUsedLetters] = useState<string[]>([]) 

  const numberWrongLetters:number = usedLetters.filter((letter) => !wordFromArchive.includes(letter)).length;


  return (
    <div className={AppCSS.container}>
      <div>STARTING / LOOSING</div>
      <HangmanSvg numberWrongLetters={numberWrongLetters}/>
      <GuessingWord usedLetters={usedLetters} wordFromArchive={wordFromArchive} />
      <Letters/>
    </div>
  )
}

export default App
