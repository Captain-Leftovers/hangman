import Graphic from "./components/Graphic/Graphic"
import Letters from "./components/Letters/Letters"
import AppCSS from "./App.module.css"
function App() {
  
  return (
    <div className={AppCSS.container}>
      <div className={AppCSS.message}>starting / loosing message</div>
      <Graphic></Graphic>
      <div className={AppCSS.word}>WORD</div>
      <Letters/>
    </div>
  )
}

export default App
