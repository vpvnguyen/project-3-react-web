const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

// parse json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static files; heroku deployment
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get('/', (req, res) => {
    console.log(__dirname)
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
})
// Start the API server
app.listen(PORT, function () {
    console.log(`localhost: ${PORT}!`);
});
