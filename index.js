import express from 'express'

const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello, World!')
// })

// listen port
// app.listen(3000);

// listen port with log
// app.listen(port, () => {
//    console.log(`App listening at http://localhost:${port}`);
//});

function handleListen() {
    console.log(`App listening at http://localhost:${port}`);
}

function handleIndex(req, res) {
  res.send('Hello, World!')
}

app.get('/', handleIndex)
app.listen(port, handleListen)

