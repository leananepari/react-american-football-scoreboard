//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import Scoreboard from './Scoreboard';
import Buttons from './Buttons';
import timer from './timer.js';

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [quarter, setQuarter] = useState(1);

  return (
    <div className="container">
      <Scoreboard homeTeam={[homeScore, setHomeScore]} awayTeam={[awayScore, setAwayScore]} quarter={[quarter, setQuarter]} timer={timer}/>
      <Buttons homeTeam={[homeScore, setHomeScore]} awayTeam={[awayScore, setAwayScore]}/>
    </div>
  );
}

export default App;
