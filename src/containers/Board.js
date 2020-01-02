import React, { Component } from 'react'
import Square from '../components/Square';

class Board extends Component {
    render() {
        return(
            <div className="board">
                <div>
                    <Square onClickChange={() => this.props.handleClick(0)} value={this.props.squares[0]} />
                    <Square onClickChange={() => this.props.handleClick(1)} value={this.props.squares[1]} />
                    <Square onClickChange={() => this.props.handleClick(2)} value={this.props.squares[2]} />
                </div>
                <div>
                    <Square onClickChange={() => this.props.handleClick(3)} value={this.props.squares[3]} />
                    <Square onClickChange={() => this.props.handleClick(4)} value={this.props.squares[4]} />
                    <Square onClickChange={() => this.props.handleClick(5)} value={this.props.squares[5]} />
                </div>
                <div>
                    <Square onClickChange={() => this.props.handleClick(6)} value={this.props.squares[6]} />
                    <Square onClickChange={() => this.props.handleClick(7)} value={this.props.squares[7]} />
                    <Square onClickChange={() => this.props.handleClick(8)} value={this.props.squares[8]} />
                </div>
            </div>
        )
    }
}

export default Board