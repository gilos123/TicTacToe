import React from 'react'

const Square = (props) => {
return (
        <img src= {props.soucre} alt='' height={100} width={100} onClick={(event) => props.click(event, props.sign)} />
      )
}



export default Square;