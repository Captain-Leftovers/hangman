import GuessingWordCSS from './GuessingWordCSS.module.css'

const word:string = "testing";
const guessedLetters:string[]= ["t", "o", "e"];
function GuessingWord () {

    return  (
            <div className={GuessingWordCSS.wordContainer}> 
                {word.split('').map((letter, index) => (
                    <span className={GuessingWordCSS.letter} key={index}>
                        <span className={guessedLetters.includes(letter) ? '' : GuessingWordCSS.hidden} >
                        {letter}
                        </span>
                    </span>
                ))}
            </div>
            )
}
export default GuessingWord