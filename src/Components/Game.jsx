import React, { Component } from 'react'
import Board from './Board'
class Game extends React.Component {
  state = {
    playerXTrue: true,
    playerX: "",
    valueArray: []//Array(9).fill(null)
  }

  childCallback = (setStateObject) => {
   
    let  setStateValue = setStateObject;
    
    console.log("setStateValue", setStateValue)   

    this.setState(setStateValue )
    console.log("Updated State:", this.state);

  }

  render() {
    return (
      <article className="game container mt-5">
        <section className="row">
          <div className="col-sm-8 game-board">
            <Board valueArray={this.state.valueArray} playerXTrue={this.state.playerXTrue} childCallback={this.childCallback} />
          </div>
          <div className="col-sm-4 game-info">
            <p className="h2">{/* status */}</p>
            <ul className="nav nav-pills flex-column">
              {/* TODO */}
            </ul>
          </div>
        </section>
      </article>
    );
  }
}

export default Game