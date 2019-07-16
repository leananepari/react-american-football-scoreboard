import React, { useState } from 'react';
import BottomRow from './BottomRow';

function Scoreboard(props) {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [holder1, setHolder1] = useState(0);
  const [holder2, setHolder2] = useState(0);

  return (
    <div className="wrap">
      <button className="start" onClick={ () => props.timer([minutes, setMinutes], [seconds, setSeconds], [holder1, setHolder1], [holder2, setHolder2])}>START</button>
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{props.homeTeam[0]}</div>
          </div>
          <div className="timer">
            <div>{minutes}</div>
            <div>{holder1}</div>
            <div>:</div>
            <div>{seconds}</div>
            <div>{holder2}</div>
          </div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{props.awayTeam[0]}</div>
          </div>
        </div>
        <BottomRow quarter={props.quarter}/>
      </section>
    </div>
  )
}

export default Scoreboard;