import express from "express"

const app = express();

app.get('/', (req, res) => {
    res.send('Go to joke');
});

//get a list of 5 jokes 

app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "JOKE 1",
            Content: "This is joke-1"
        },
        {
            id: 2,
            title: "JOKE 2",
            Content: "This is joke-2"
        },
        {
            id: 3,
            title: "JOKE 3",
            Content: "This is joke-3"
        },
        {
            id: 4,
            title: "JOKE 4",
            Content: "This is joke-4"
        },
    ];
    res.send(jokes);
});

const port = process.env.port || 5000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})