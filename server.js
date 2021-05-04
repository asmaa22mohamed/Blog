const express = require('express');
const connectDB = require('./config/db');
const app = express();
const passport = require('passport');

const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const auth = require('./routes/api/auth');

//connect DataBase
connectDB();

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);
//Init Middleware
app.use(express.json({ extended: false }));
//define routes
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/posts', posts);

app.get('/', (req, res) => {
  res.send('API Running');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
