import React from 'react';

function Buttons(props) {
  return (
    <section className="buttons">
      <div className="homeButtons">
        <button className="homeButtons__touchdown" onClick={ () => props.homeTeam[1](props.homeTeam[0] + 7) }>Home Touchdown</button>
        <button className="homeButtons__fieldGoal" onClick={ () => props.homeTeam[1](props.homeTeam[0] + 3) }>Home Field Goal</button>
      </div>
      <div className="awayButtons">
        <button className="awayButtons__touchdown" onClick={ () => props.awayTeam[1](props.awayTeam[0] + 7) }>Away Touchdown</button>
        <button className="awayButtons__fieldGoal" onClick={ () => props.awayTeam[1](props.awayTeam[0] + 3) }>Away Field Goal</button>
      </div>
   </section>
  )
}

export default Buttons;