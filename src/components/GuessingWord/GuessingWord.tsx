import GuessingWordCSS from './GuessingWordCSS.module.css'

type GuessingWordProps = {
    usedLetters: string[],
    wordFromArchive: string,
    showWord: boolean,
}

function GuessingWord ({usedLetters, wordFromArchive, showWord = false}:GuessingWordProps) {

    return  (
            <div className={GuessingWordCSS.wordContainer}> 
                {wordFromArchive.split('').map((letter, index) => (
                    <span className={`${GuessingWordCSS.letter} ${showWord && !usedLetters.includes(letter)  ? GuessingWordCSS.wrongLetters : ""}`} key={index} >
                        <span className={usedLetters.includes(letter) || showWord ? '' : GuessingWordCSS.hidden} >
                        {letter}
                        </span>
                    </span>
                ))}
            </div>
            )
}
export default GuessingWord