import React from 'react'
import Board from './Board';
//import Click from './Click'

class Square extends React.Component  {


    //console.log(event.target.value);


    render() {
        console.log(this.props);
        
        return (
            <button
                className="square"
                onClick={this.props.playerTurn}
            >
                {this.props.valueArray}
            </button>
        );
    }

}

export default Square;
