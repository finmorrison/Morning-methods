import React, { Component } from 'react';
import axios from 'axios'
import NewRun from './NewRuns/newRuns'
import SingleRun from './ArrayOfRuns/SingleRun'
import './reset.css'
import './NewRuns/newRuns.css'
// import RunsDisplay from './ArrayOfRuns/runsDisplay'

class App extends Component {
  constructor() {
    super()

    this.state = {
      runs: []
    }
    this.handleSave = this.handleSave.bind(this)

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
  handleSave(obj, id) {
    const { runTitle, runDate, runLocation, runTotalTime, runTotalDistance } = obj
    console.log(obj, id)
    axios.put(`/api/editRun/${id}`, { runTitle, runDate, runLocation, runTotalTime, runTotalDistance }).then((res) => {
      this.setState({ runs: res.data })
    })
  }

  handleDelete = (id) => {
    axios.delete(`/api/deleteRun/${id}`).then((res) => {
      this.setState({ runs: res.data })
    })
  }

  

  render() {
    let runsDisplay = this.state.runs.map((run) => {
      return <SingleRun key={run.id}
        id={run.id}
        runTitle={run.runTitle}
        runDate={run.runDate}
        runLocation={run.runLocation}
        runTotalTime={run.runTotalTime}
        runTotalDistance={run.runTotalDistance}
        handleSave={this.handleSave}
        handleDelete={this.handleDelete}
      />

    })

    return (

      <div className="App" >
        <nav>
          <h1>Running Log</h1>
        </nav>
        <div>
          <NewRun handleCreateRun={this.handleCreateRun}
          />
          {runsDisplay}
        </div>
      </div>
    );
  }
}

export default App;
