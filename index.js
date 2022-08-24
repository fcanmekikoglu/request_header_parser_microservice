var express = require('express')
var app = express()
var http = require('http')
var parser = require('ua-parser-js')

app.get('/api/whoami', async (req, res) => {
    const software = req.headers['user-agent']
    const ipaddress = req.ip
    const language = req.headers['accept-language']
    res.json({ ipaddress, language, software })

    //console.log(req.headers)
})

var listener = app.listen(process.env.PORT || 3000, () => {
    { console.log('Your app is listening on port ' + listener.address().port) }
});
