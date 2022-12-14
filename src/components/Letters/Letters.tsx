import LettersCSS from "./Letters.module.css"

const lettersArr:string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

type LettersProps = {
    correctLetters:string[]
    incorrectLetters:string[]
    addLetter:(letter:string)=> void
}


function Letters({correctLetters, incorrectLetters, addLetter}:LettersProps) {

    return (
       <div className={LettersCSS.keyboard}>
            {lettersArr.map((key)=>{
                return <button onClick={()=>addLetter(key)} className={`${LettersCSS.keys}`} key={key}>{key}</button>
            })}
       </div>
    )
}

export default Letters;