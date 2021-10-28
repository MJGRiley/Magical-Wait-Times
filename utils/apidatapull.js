const fetch = require('node-fetch')
const fs = require('fs')

const pullData =  () => {
    var error = false //used for error modal
    fetch('https://queue-times.com/en-US/parks/6/queue_times.json', {
        cache: 'reload',
    })
    .then((res) => { 
        if (res.ok==false) {error = true} //checks the response.ok for an error
        return res.json()
    })
    .then((data) => {
        if (error) { //returns with nothing if there's an error
            return
        }
        fs.writeFile('../models/WDWMKWTDATA.txt', JSON.stringify(data), (err) => {
            if (err) {
                return console.log(err);
              }
              console.log(data);
        })
        return data
    })
}

module.exports = pullData