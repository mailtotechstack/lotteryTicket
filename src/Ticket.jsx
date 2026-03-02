import TicketNum from "./TicketNum";
import "./Ticket.css"
export default function Ticket({ticket}){
    return(<div className="ticket">
        {
          ticket.map((val, idx)=> <TicketNum num={val} key={idx}/>)
        }
    </div>);
};