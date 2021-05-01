const express = require('express');
const connectDB = require('./config/db');
const app = express();

const users = require('./routes/users');
const profile = require('./routes/profile');
const posts = require('./routes/posts');
const auth = require('./routes/auth');

//connect DataBase
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));
//define routes
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

app.get('/', (req, res) => {
  res.send('API Running');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
