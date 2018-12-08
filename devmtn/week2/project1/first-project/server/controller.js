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
    }
}