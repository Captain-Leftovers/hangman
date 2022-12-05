import GraphicCSS from "./Graphic.module.css"

function Graphic() {

    return (
        <div className={GraphicCSS.container}>
          <div className={GraphicCSS.person}>
            <div className={GraphicCSS.leg}></div>
          </div>

          <div className={GraphicCSS.weapon}>
          </div>  
        </div>
    )
}

export default Graphic