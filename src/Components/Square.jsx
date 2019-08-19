import React from 'react'


class Square extends React.Component {


    render() {
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
