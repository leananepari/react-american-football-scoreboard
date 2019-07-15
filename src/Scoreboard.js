import React, { useState } from 'react';
import BottomRow from './BottomRow';

function Scoreboard(props) {
  // const digOne = React.createRef();
  // const digTwo = React.createRef();
  // const digThree = React.createRef();
  // const digFour = React.createRef();

  const [one, setDigOne] = useState(0);
  const [two, setDigTwo] = useState(0);
  const [three, setDigThree] = useState(0);
  const [four, setDigFour] = useState(0);
  return (
    <div className="wrap">
      <button className="start" onClick={ () => props.timer([one,setDigOne], [two,setDigTwo], [three,setDigThree], [four, setDigFour])}>START</button>
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{props.homeTeam[0]}</div>
          </div>
          <div className="timer">
            <div>{one}</div>
            <div>{two}</div>
            <div>:</div>
            <div>{three}</div>
            <div>{four}</div>
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