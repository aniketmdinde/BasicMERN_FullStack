import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req,res)=>{
    res.send("server is ready");
})

app.get('/api/jokes', (req, res)=>{
    const jokes = [
        {
            id:1,
            title: "Joke1",
            content: "This is Joke1"
        },
        {
            id:2,
            title: "Joke2",
            content: "This is Joke2"
        },
        {
            id:3,
            title: "Joke3",
            content: "This is Joke3"
        },
        {
            id:4,
            title: "Joke4",
            content: "This is Joke4"
        },
        {
            id:5,
            title: "Joke5",
            content: "This is Joke5"
        },
    ]

    res.send(jokes)
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})