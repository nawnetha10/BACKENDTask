import express from 'express';
import bodyParser from 'body-parser';

import fs from 'fs';

const app = express();
const PORT = 8000;
const DB_FILE = 'db.json';

app.use(bodyParser.json());


interface Submission {
    Name: string;
    Email: string;
    Phone: string;
    GithubLink: string;
    StopwatchTime: string;
}

const readDatabase = (): Submission[] => {
    if (!fs.existsSync(DB_FILE)) {
        return [];
    }
    const data = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(data);
}

const writeDatabase = (submissions: Submission[]) => {
    fs.writeFileSync(DB_FILE, JSON.stringify(submissions, null, 2));
}

app.get('/ping', (req, res) => {
    res.json(true);
});

app.post('/api/Submission', (req, res) => {
    const { Name, Email, Phone, GithubLink, StopwatchTime } = req.body;
    const newSubmission: Submission = { Name, Email, Phone, GithubLink, StopwatchTime };
    const submissions = readDatabase();
    submissions.push(newSubmission);
    writeDatabase(submissions);
    res.status(201).json({ message: 'Submission saved successfully!' });
});


app.get('/api/Submission', (req, res) => {
    const index = parseInt(req.query.index as string);
    const submissions = readDatabase();
    if (index >= 0 && index < submissions.length) {
        res.json(submissions[index]);
    } else {
        res.status(404).json({ message: 'Submission not found' });
    }
});
app.get('/', (req, res) => {
    res.send('Server is running.');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
