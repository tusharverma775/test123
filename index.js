const express = require("express");
const controllers = require("./Controllers/controllers");


const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World");
});


app.get('/fetchAndStoreData', controllers.fechandstoreData);



app.use('/posts', controllers.getPosts);

const PORT = 3456;
app.listen(PORT, () => {
    console.log(` Server started on port ${PORT}`);
});
