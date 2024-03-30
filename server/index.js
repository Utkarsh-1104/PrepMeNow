const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Server Running</h1>')
})
app.listen(4000, () => {
    console.log('Server running on http://localhost:4000');
})