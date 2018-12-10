let id = 2
let allRuns = [{
    runTitle: 'sdkfj',
    runDate: 'fdsafsa',
    runLocation: 'safjklsa',
    runTotalTime: 1,
    runTotalDistance: 1,
    runPace: 1,
    id: 1
}]

module.exports = {
    getAll: (req, res) => {
        res.status(200).send(allRuns)
    },

    createRun: (req, res) => {
        let newRun = {
            runTitle: req.body.runTitle,
            runDate: req.body.runDate,
            runLocation: req.body.runLocation,
            runTotalTime: req.body.runTotalTime,
            runTotalDistance: req.body.runTotalDistance,
            runPace: req.body.runPace,
            id: id
        }
        allRuns.push(newRun)
        id++
        res.status(200).send(allRuns)
    },

    editRun: (req, res) => {
        console.log ('params', req.params)
        console.log('body', req.body)
        let newRun = {
            runTitle: req.body.runTitle,
            runDate: req.body.runDate,
            runLocation: req.body.runLocation,
            runTotalTime: req.body.runTotalTime,
            runTotalDistance: req.body.runTotalDistance,
            runPace: req.body.runPace,
            id: +req.params.id
        }
        let runIndex = allRuns.findIndex((singleRun) => singleRun.id == newRun.id)
        console.log(runIndex)
        let singleRun = allRuns[runIndex]
        console.log(newRun)
        let originalRun = allRuns[runIndex]
        allRuns[runIndex] ={
            id: +req.params.id,
            runTitle: newRun.runTitle || originalRun.runTitle,
            runDate: newRun.runDate || originalRun.runDate,
            runLocation: newRun.runLocation || originalRun.runLocation,
            runTotalTime: newRun.runTotalTime || originalRun.runTotalTime,
            runTotalDistance: newRun.runTotalDistance || originalRun.runTotalDistance
        }
        console.log(allRuns)
        res.status(200).send(allRuns)
    },

    deleteRun: (req, res) => {
        let deleteIndex = req.params.id
        runIndex = allRuns.findIndex((singleRun) => singleRun.id == deleteIndex)
        allRuns.splice(runIndex, 1)
        res.status(200).send(allRuns)
    }
}

