import express from 'express';
import data from './data/data.json';

const app= express();
const PORT = 8000;

//This is for the public folder on path /
app.use(express.static('public'));

//This is for the images folder on path images
app.use('/images', express.static('images'));

app.get('/', (req, res) => {
    // If we were using mongo we would connect and get the data
    res.json(data[49]);
});

app.get('/item/:myID', (req, res) => {
    console.log(req.params.myID);
    let user = parseInt(req.params.myID);    
    console.log(user);
    console.log(data[user]);
    res.send(data[user]);
});

app.post('/newItem', (req, res) => {
    res.send(`a POST request with /newItem route on port ${PORT}`);
});

app.put('/item', (req, res) => {
    res.send(`a PUT request with /item route on port ${PORT}`);
});

app.delete('/item', (req, res) => {
    res.send(`a DELETE request with /Item route on port ${PORT}`);
});

app.listen(PORT, () => {
     console.log(`Your server is running on port ${PORT}`)
     //console.log(data);
});