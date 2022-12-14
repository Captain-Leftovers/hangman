import LetterCSS from "./Letters.module.css"

const lettersArr:string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function Letters() {

    return (
       <div className={LetterCSS.keyboard}>
            {lettersArr.map((key)=>{
                return <button  className={`${LetterCSS.keys}`} key={key}>{key}</button>
            })}
       </div>
    )
}

export default Letters;