import Letters from "./components/Letters/Letters"
import AppCSS from "./App.module.css"
import { useState } from "react"
import archive from "./assets/simpleWords.json"
import GuessingWord from "./components/GuessingWord/GuessingWord"
import HangmanSvg from "./components/HangmanSvg/HangmanSvg"


function App() {
  
  const [wordFromArchive, setWordFromArchive] = useState(() => {
     return archive[Math.floor(Math.random() * archive.length)]
  })

  const [usedLetters, setUsedLetters] = useState<string[]>([]) 
  return (
    <div className={AppCSS.container}>
      <div >starting / loosing message</div>
      <HangmanSvg/>
      <GuessingWord/>
      <Letters/>
    </div>
  )
}

export default App
