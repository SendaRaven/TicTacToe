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
  testArrayHasNull = () => {
    for (let i = 0; i < 9; i++) {
      if (this.state.valueArray[i] === null) {
        return true;
      }
    }
    return false;
  }

  isNotNull = () => {
    console.log("test", this.testArrayHasNull());
    if (this.testArrayHasNull() === true) {
      return false;
    } else {
      return true;
    }
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

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (this.state.valueArray[a] && this.state.valueArray[a] === this.state.valueArray[b] && this.state.valueArray[a] === this.state.valueArray[c]) {
        [a, b, c].map(item => {
          let winnerSquares = document.getElementsByClassName("square")
          winnerSquares[item].classList.toggle("winner")
        })
        return this.state.valueArray[a];
      }
    }
    return false;
  }

  checkGameStatus = () => {

    console.log(this.isNotNull(), this.checkWinner());



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

    } else if (this.isNotNull() === true && this.checkWinner() === false) {
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
              {/* TODO */}
            </ul>
          </div>
        </section>
      </article>
    );
  }
}

export default Game;