const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
const port = 3000
const server = http.createServer(app)
server.listen(3000)
app.get('/',(req,res)=>{
    res.send("Hello")
})
app.get('/pyramid', callName) 
  
function callName(req, res) { 
    var spawn = require("child_process").spawn; 
    // E.g : http://localhost:3000/pyramid?check=Mike
    var process = spawn('python',["./pyramid.py", 
                            req.query.check] 
                             ); 
    
    process.stdout.on('data', function(data) { 
        res.send(data.toString()); 
        console.log(data.toString());
    } ) 
} 