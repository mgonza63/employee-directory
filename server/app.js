const path = require('path');
const express = require('express');

const app = express();
// const publicPath  = (__dirname, '..', 'public');
const port = process.env.PORT || 3001

app.use(express.static(path.join(__dirname, '..' , 'build')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', '..','index.html'))
})
app.listen(port, () => {
    console.log(`server listening on ${port} 👂`)
})