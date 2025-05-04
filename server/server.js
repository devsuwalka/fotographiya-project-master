const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const cors = require('cors');
// const port = 3000
require('dotenv').config()
const PORT = process.env.PORT || 5000


app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// app.use('/public',express.static('./uploads/haldi'))
app.use('/public',express.static('uploads'))


const projectrouter = require('./routers/ProjectRouter')
const adminrouter = require('./routers/AdminRouter')
const view = require('./routers/ViewRouter')

app.use(cors());
app.use('/api/wedding', projectrouter)
app.use('/api/admin', adminrouter)
app.use('/', view)

mongoose.connect('mongodb+srv://sahil123:sahil123@sahil.eumlk.mongodb.net/weddingproject')
    .then(() => {
        console.log("db connected..👍");
    })
    .catch((err) => {
        console.log(err);
    })

app.listen(PORT, () => console.log(`Example app listening on port http://localhost:${PORT}`))