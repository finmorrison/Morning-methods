import React, { Component } from 'react'
import './AllRuns.css'
import Save from './Save'

class SingleRun extends Component {
    constructor(props) {
        super(props)

        this.state = {
            runTitle: '',
            runDate: '',
            runLocation: '',
            runTotalTime: 0,
            runTotalDistance: 0,
            runPace: 0,
            toggleEdit: false
        }
    }

    handleInput(key, input) {
        this.setState({ [key]: input })
    }

    handleEdit() {
        this.setState({ toggleEdit: !this.state.toggleEdit })
    }

    handleSaveUpdate = () => {
        console.log(this.props)
        this.props.handleSave(this.state, this.props.id)
        this.handleEdit()
    }

    render() {
        
        return (
            <div>
                {this.state.toggleEdit ?
                    (<>
                        <input placeholder='Run Title' onChange={(e) => this.handleInput('runTitle', e.target.value)} />
                        <input placeholder='Run Date' onChange={(e) => this.handleInput('runDate', e.target.value)} />
                        <input placeholder='Location' onChange={(e) => this.handleInput('runLocation', e.target.value)} />
                        <input placeholder='Run Total Time' onChange={(e) => this.handleInput('runTotalTime',e.target.value)} />
                        <input placeholder='Run Total Distance' onChange={(e) => this.handleInput('runTotalDistance', e.target.value)} />
                        <Save handleSaveUpdate = {this.handleSaveUpdate}/>
                    </>)
                    :
                    (<><h1>{this.props.runTitle}</h1>
                        <h3>Run Date: {this.props.runDate}</h3>
                        <h3>Run Location:{this.props.runLocation}</h3>
                        <h3>Run Total Time: {this.props.runTotalTime}</h3>
                        <h3>Run Total Distance: {this.props.runTotalDistance}</h3>
                        <h3>Run Pace: {Math.round(this.props.runTotalTime / this.props.runTotalDistance *100)/100} min/mile</h3>
                        <button onClick={() => this.handleEdit()}>Edit</button>
                        <button onClick = {() => this.props.handleDelete()}>Delete Run</button></>)}
            </div>
        )
    }
}

export default SingleRun