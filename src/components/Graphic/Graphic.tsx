import GraphicCSS from "./Graphic.module.css"

function Graphic() {

    return (
        <div className={GraphicCSS.container}>
            <div className={GraphicCSS.rope} />
            <div className={GraphicCSS.top} />
            <div className={GraphicCSS.rightSup} />
            <div className={GraphicCSS.leftSup} />
            <div className={GraphicCSS.vertical}/>
            <div className={GraphicCSS.base}/>
        </div>
    )
}

export default Graphic