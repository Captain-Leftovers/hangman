 type ReloadButtonProps = {
    newGame:()=>void
 }


function ReloadButton({newGame}:ReloadButtonProps) {

    return (
        <button onClick={()=>newGame()}>NeW Word</button>
    )
}

export default ReloadButton