var express = require('express');
var app = express();
const cors = require('cors');
app.use(cors());


app.post('/suggest/:data', function(req, res) {
    //let data = req.params.body;
    let list = ["redgie", "gravador", "jessa"]
    console.log(list)
    res.json(list)
})


app.listen(3000, function() {
    console.log("listening at ", 3000)
})