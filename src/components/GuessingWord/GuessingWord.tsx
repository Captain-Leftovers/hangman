import GuessingWordCSS from './GuessingWordCSS.module.css'

const word:string = "testing";
const guessedLetters:string[]= [];
function GuessingWord () {

    return  (
            <div className={GuessingWordCSS.wordContainer}> 
                {word.split('').map((letter, index) => (
                    <span className={GuessingWordCSS.letter}>
                        <span className={guessedLetters ? GuessingWordCSS.hidden : ''}>
                        {letter}
                        </span>
                    </span>
                ))}
            </div>
            )
}
export default GuessingWord