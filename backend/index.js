const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/signup', (req, res) => {
    const { name, phone, email, password, role } = req.body;

    res.status(200).json({ message: 'Signup successful' });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    res.status(200).json({ message: 'Login successful' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});