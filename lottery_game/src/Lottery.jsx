import { useState } from "react";
import "./Lottery.css";
import { randomTicket, checkSum } from "./helper";
import Ticket from "./Ticket";

function Lottery({ n = 3, winningSum = 15 }) {
  let [ticket, setTicket] = useState(randomTicket(n));
  let isWinning = checkSum(ticket) === winningSum;

  function byTicket() {
    setTicket(randomTicket(n));
  }

  return (
    <div>
      <h2>Lottery Game</h2>
      <div className="lottery">
        <div className="ticket">
          <Ticket ticket={ticket} />
        </div>
        <button onClick={byTicket}>Get Ticket</button>
      </div>
      <h4>{isWinning && "Congratulations, You Won!"}</h4>
    </div>
  );
}

export default Lottery;
