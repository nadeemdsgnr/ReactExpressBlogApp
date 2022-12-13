import express from "express";

let newsInfo = [
    {
        name: 'learn-react',
        upvotes: 0,
        comments: [],
    },
    {
        name: 'learn-node',
        upvotes: 0,
        comments: [],
    },
    {
        name: 'mongodb',
        upvotes: 0,
        comments: [],
    }
]

const app = express();
app.use(express.json());

app.put('/api/news/:name/upvote', (req, res) => {
    const { name } = req.params;
    const singlenews = newsInfo.find(a => a.name === name);
    if (singlenews) {
        singlenews.upvotes += 1;
        res.send(`The ${name} post now has ${singlenews.upvotes} upvotes!!`);
    } else {
        res.send('That news post doesn\'t exist');
    }
});

app.post('/api/news/:name/comments', (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;
    const singlenews = newsInfo.find(a => a.name === name);
    
    if(singlenews) {
        singlenews.comments.push({ postedBy, text });
        res.send(singlenews.comments);
    } else {
        req.send('That news post doesn\'t exist!');
    }
});

app.listen(8000, () => {
    console.log('Server is listening on port 8000')
});