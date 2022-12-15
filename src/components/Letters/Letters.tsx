import LettersCSS from "./Letters.module.css"

const lettersArr:string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

type LettersProps = {
    correctLetters:string[]
    incorrectLetters:string[]
    disabled: boolean
    addLetter:(letter:string)=> void
}


function Letters({correctLetters, incorrectLetters, disabled = false, addLetter}:LettersProps) {

    return (
       <div className={LettersCSS.keyboard}>
            {lettersArr.map((key)=>{
                const isActive = correctLetters.includes(key);
                const isInactive = incorrectLetters.includes(key)
                return <button 
                            onClick={()=>addLetter(key)} 
                            className={`${LettersCSS.keys} ${isActive ? LettersCSS.active : ""} ${isInactive ? LettersCSS.inactive : ""}`} 
                            key={key}
                            disabled={isInactive || isActive || disabled}    
                       >{key}</button>
            })}
       </div>
    )
}

export default Letters;