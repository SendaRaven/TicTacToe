import React from 'react'
import Board from './Board'

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playerXTrue: true,
      playerX: "",
      valueArray: Array(9).fill(null),
      gameStatus1: "Go on playing!"
    }
  };

  childCallback = (setStateObject) => {

    let setStateValue = setStateObject;
    this.setState(setStateValue);

  }

  checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < 8; i++) {

      const [a, b, c] = lines[i];

      if (this.state.valueArray[a] && this.state.valueArray[a] === this.state.valueArray[b] && this.state.valueArray[a] === this.state.valueArray[c]) {
        [a, b, c].map(item => {
          let winnerSquares = document.getElementsByClassName("square");
          winnerSquares[item].classList.toggle("winner", true)
        })

        return this.state.valueArray[a];
      }
    }
    return false;
  }

  checkGameStatus = () => {

    if (this.checkWinner() !== false) {

      this.setState({
        gameStatus1: `${this.checkWinner()} is the winner! `,
        valueArray: this.state.valueArray.map(item => {
          if (item === null) {
            return item = ".";
          }
          else {
            return item;
          }
        }
        )
      })

    } else if (this.state.valueArray.includes(null) !== true && this.checkWinner() === false) {
      this.setState({
        gameStatus1: `There is no winner! `
      })
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
              {/* TODO maybe in the future*/}
            </ul>
          </div>
        </section>
      </article>
    );
  }
}

export default Game;