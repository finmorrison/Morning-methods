import React, { Component } from 'react'
import './newRuns.css'

class newRun extends Component {
    constructor(props) {
        super(props)
        this.state = {
            runTitle: '',
            runDate: '',
            runLocation: '',
            runTotalTime: 0,
            runTotalDistance: 0,
            runPace: 0,
            id: 0,
        }
    }

    handleChange(key, input) {
        this.setState({ [key]: input })
    }



    render() {

        return (
            <div>
                <input placeholder='Run Title' onChange={(e) => this.handleChange('runTitle', e.target.value)} />
                <input placeholder='Date' onChange={(e) => this.handleChange('runDate', e.target.value)} />
                <input placeholder='Location' onChange={(e) => this.handleChange('runLocation', e.target.value)} />
                <input placeholder='Run Total Time' onChange={(e) => this.handleChange('runTotalTime', e.target.value)} />
                <input placeholder='Run Total Distance' onChange={(e) => this.handleChange('runTotalDistance', e.target.value)} />
                <p></p>
                <button onClick={() => this.props.handleCreateRun(this.state)}>Add Run</button>
            </div>
        )
    }
}

export default newRun