import Lottery from "./Lottery3";
import { sum } from "./Helper";
import "./App.css"

export default function App(){
  function winCondition(ticket){
    return sum(ticket)=== 30;
  }
  return(<div>
    
    <div>
      <Lottery num={5} winCondition={winCondition}/>

    </div>
  </div>)
}