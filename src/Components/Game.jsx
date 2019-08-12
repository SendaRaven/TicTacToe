import React, { Component } from 'react'
import Board from './Board'

class Game extends React.Component {
  state = {
    playerXTrue: true,
    playerX: "",
    valueArray: [],
    gameStatus1: "Go on playing!"
  }

  childCallback = (setStateObject) => {

    let setStateValue = setStateObject;

    //console.log("setStateValue", setStateValue)

    this.setState(setStateValue)
    //console.log("Updated State:", this.state);

  }
  checkWinner = () => true;
  checkGameStatus = () => {
    if (this.checkWinner === true) {
      console.log(this.state);

      return this.setState({ gameStatus1: "We have a winner!" })
      console.log(this.state);
    }
  }


  render() {
    return (
      <article className="game container mt-5">
        <section className="row">
          <div className="col-sm-8 game-board">
            <Board valueArray={this.state.valueArray} playerXTrue={this.state.playerXTrue} childCallback={this.childCallback} gameStatus1={this.gameStatus1} checkGameStatus={this.checkGameStatus} />
          </div>
          <div className="col-sm-4 game-info">
            <p className="h2">{this.state.gameStatus1}</p>
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