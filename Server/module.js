const express = require('express');
const app = express();

const port = 8081;

//http://localhost:8081/about
app.get('/about', (req, res) => {
    res.status(200).json({
        message: "This is the about page of the API"

    });
});

app.get("/*", (req, res) => {
    res.status(404).json({ 
        message: "This Page does not exist on the API"
    });
}); 


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});