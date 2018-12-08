import React from 'react'

export default function SingleRun(props){
    return(
        <div>
            <h1>Run Title: {props.runTitle}</h1>
                <h3>Run Date: {props.runDate}</h3>
                <h3>Run Location:{props.runLocation}</h3>
                <h3>Run Total Time: {props.runTotalTime}</h3>
                <h3>Run Total Distance: {props.runTotalDistance}</h3>
        </div>
    )
}

   