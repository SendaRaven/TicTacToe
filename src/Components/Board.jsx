import React from 'react'
import Square from './Square'


class Board extends React.Component {


    playerTurn = (i) => {

        if (this.props.valueArray[i] === null) {

            if (this.props.playerXTrue === true) {

                let newArray = this.props.valueArray;
                newArray[i] = "X"

                this.props.childCallback({ playerX: "X", valueArray: newArray, playerXTrue: false })
                this.props.checkGameStatus()


            } else {

                let newArray = this.props.valueArray;
                newArray[i] = "O"

                this.props.childCallback({ playerX: "O", valueArray: newArray, playerXTrue: true })
                this.props.checkGameStatus();
            }
        }

    }

    renderSquare(i) {
        return <Square playerTurn={() => this.playerTurn(i)} valueArray={this.props.valueArray[i]} playerXTrue={this.props.playerXTrue} />;
    }

    render() {
        let status = `Next player: ${(this.props.playerXTrue) ? 'X' : 'O'}`;

        return (
            <React.Fragment>
                <div className="status h2 text-center">{status}</div>
                <div className="board">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </React.Fragment>
        );
    }
}

export default Board;