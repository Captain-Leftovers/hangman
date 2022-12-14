import GuessingWordCSS from './GuessingWordCSS.module.css'

type GuessingWordProps = {
    usedLetters: string[],
    wordFromArchive: string,
}

function GuessingWord ({usedLetters, wordFromArchive}:GuessingWordProps) {

    return  (
            <div className={GuessingWordCSS.wordContainer}> 
                {wordFromArchive.split('').map((letter, index) => (
                    <span className={GuessingWordCSS.letter} key={index}>
                        <span className={usedLetters.includes(letter) ? '' : GuessingWordCSS.hidden} >
                        {letter}
                        </span>
                    </span>
                ))}
            </div>
            )
}
export default GuessingWord