import { useState } from "react";
import Ticket from "./Ticket";
import { genTicket} from "./Helper";
import Button from "./Button";
// import "./App.css"

export default function Lottery({ num =3 , winCondition}){
    const [ticket, setTicket] = useState(genTicket(num));
    function buyNewTicket(){
        setTicket(genTicket(num))
    }
    let isWinning = winCondition(ticket);
    return(
    <div>
        <h1>The Lottery Game!</h1>
        <div>
            <div >
                <p>Ticket No</p>
                <Ticket ticket={ticket}/>
            </div>
            <br/>
            <Button text="Buy new Ticket" clkFunc={buyNewTicket}/>
            {isWinning && <p>Congratulation you won! </p>}
        </div>

    </div>)
};