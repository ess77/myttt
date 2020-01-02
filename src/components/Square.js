import React from 'react'

const Square = (props) => {
    if(props.value==='X') {return <button className="square Xsquare" onClick={() => props.onClickChange()}>{props.value}</button>}
    else {return <button className="square Osquare" onClick={() => props.onClickChange()}>{props.value}</button>}
}

export default Square