const path = require('path');
const express = require('express');

const app = express();
// const publicPath  = (__dirname, '..', 'public');
const port = process.env.PORT || 3000

app.use(express.static('public/build'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public',  'index.html'))
})
app.listen(port, () => {
    console.log(`server listening on ${port} 👂`)
})