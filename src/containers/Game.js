import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Game.css';
import Board from './Board';
import { click_function, jump_function } from '../actions';
import FormGame from './FormGame';
import { ButtonTest } from './ButtonTest';

 class Game extends Component {
   render() {
     console.log('History1 :  ', this.props.history.StepNumber);
     console.log('History11 :  ', this.props.history.SquaresHistory);
    //  const stepNumber = (typeof this.props.history.StepNumber === "undefined") ? 0 : this.props.history.StepNumber;
     const stepNumber = this.props.history.StepNumber;
     console.log('History 2 :  ', stepNumber);
     const xturn = this.props.history.Xturns[stepNumber]
     const squares = this.props.history.SquaresHistory[stepNumber].Squares
     const winner = this.props.history.Winner
     const nexPlayer = (xturn === true)?'X':'O'
     let messageInfo = winner?`Le Gagnant est ' ${winner}` :`Au tour de ${nexPlayer}`
     console.log('message ', messageInfo)
     const historyList = this.props.history.SquaresHistory.map((step, stepnum) => {
       return(
         <li key={stepnum} className="history"><button  onClick={() => this.handleJump(stepnum)} >Aller au Step {stepnum}</button></li>
         )
        });
        
  return (
    <div className="game">
      <div>
        <Board handleClick={(i) => this.handleClick(i)} squares={squares} />
      </div>
      <div className="info">
        {messageInfo}
        <ul>
          {historyList}
        </ul>
      </div>
      <div>
        <FormGame />
      </div>
      <ButtonTest />
    </div>
  );
  }

  handleClick(indice) {
      const winner = this.props.history.Winner
      const stepnum = this.props.history.StepNumber
      const squares = this.props.history.SquaresHistory[stepnum].Squares.slice()

      if(squares[indice]) {
        console.log('Case déjà cochée')
        return
      }

      if(winner) {
        console.log('Le gagnant est : ', this.props.history.Winner)
        return
      }

      console.log('handleClick processing ', indice)
      this.props.handleMyClick(indice)

  }

  handleJump(step) {
    console.log('handleJump ok', step)
    this.props.handleMyJump(step)

  }
}

const mapStateToProps = (store) => {
  return {history: store.history}
}

const mapActionsToProps = {
  handleMyClick: click_function,
  handleMyJump: jump_function
}

export default connect(mapStateToProps, mapActionsToProps)  (Game)
