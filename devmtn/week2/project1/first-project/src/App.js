import React, { Component } from 'react';
import axios from 'axios'
import NewRun from './NewRuns/newRuns'
import SingleRun from './ArrayOfRuns/SingleRun'


class App extends Component {
  constructor() {
    super()

    this.state = {
      runs: []
    }
  }

  componentDidMount = () => {
    axios.get('/api/allRuns')
      .then(res => {
        console.log(res)
        this.setState({ runs: res.data })
      })
  }

  handleCreateRun = (obj) => {
    const { runTitle, runDate, runLocation, runTotalTime, runTotalDistance
    } = obj
    axios.post('/api/newRun', {
         runTitle, runDate, runLocation, runTotalTime, runTotalDistance 
        }).then((res) => {
        this.setState({
            runs: res.data
        })
    })
}

  render() {
    let runsDisplay = this.state.runs.map((run) => {
      console.log(run)
      return <SingleRun key={run.id}
    
        runTitle={run.runTitle}
        runDate={run.runDate}
        runLocation={run.runLocation}
        runTotalTime={run.runTotalTime}
        runTotalDistance={run.runTotalDistance}
      />

    })

    return (

      <div className="App" >
        <nav>
          <h1>Running Log</h1>
        </nav>
        <div>
          <NewRun handleCreateRun = {this.handleCreateRun} />
          {runsDisplay}
        </div>
      </div>
    );
  }
}

export default App;
