import React from 'react'
import Square from './Square'


class Board extends React.Component {
    state = {
        playerXTrue: true,
        playerX: "",
        valueArray: []
    }

    playerTurn = (i) => {

if (this.state.valueArray[i]=== undefined) {
    
        if (this.state.playerXTrue == true) {
            let newArray = this.state.valueArray;
            newArray[i] = "X"
            return (
                
                this.setState({
                playerX: "X",
                valueArray: newArray,
                playerXTrue: false
                
            })
            
            );
        } else {
            let newArray = this.state.valueArray;
            newArray[i] = "O"
            return (
                
                this.setState({
                playerX: "O",
                valueArray: newArray,
                playerXTrue: true
                
            }));
        }
    }
        console.log("t");

    }

    renderSquare(i) {
        return <Square playerTurn={()=> this.playerTurn(i)} valueArray={this.state.valueArray[i]} playerXTrue={this.state.playerXTrue} />;
    }
   
    

    render() { console.log(this.state);
        const status = 'Next player: X';

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