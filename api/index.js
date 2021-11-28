const express = require('express')
const cors = require('cors')
const { json } = require('express')


const app = express()

app.use(cors())
app.use(express.json())


app.post('/api/users/:id/update', (req, res) => {

    setTimeout(() => {
        if (req.body.username === 'faruk') {
            res.status(500).send(`Can't update with faruk`)
        } else {
            res.status(200).send(req.body)
        }
    }, 2000);

})



app.listen(4000, () => {
    console.log('Server running on port 4000')
})