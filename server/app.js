const path = require('path');
const express = require('express')

const app = express();
const port = process.env.PORT || 3000

app.use(express.static(publicPath))


app.get