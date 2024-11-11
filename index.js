const express = require('express')
const app = express()
const port = 3000

app.get('/sound/:name', (req, res) => { 
    const { name } = req.params

    if(name == "dog") {
        res.json({'sound' : '멍멍'})
    } else if(name == "cat") {
        res.json({'sound' : '야옹'})
    } else if(name == "pig") {
        res.json({'sound : 꿀꿀'})
    } else {
        res.json({'sound' : '알 수 없음'})
    }
})
