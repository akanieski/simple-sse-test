const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors())


app.get('/', function (req, res) {

    const options = {
        root: path.join(__dirname)
    };
 
    const fileName = 'index.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
		console.log(err);
		res.send(err);
        }
    });
});

app.get('/events', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });

  setInterval(() => {
    res.write('data: ' + new Date().toLocaleTimeString() + '\n\n');
  }, 1000);
});

app.listen(PORT );

console.log(`Server running at http://localhost:${PORT}/`);