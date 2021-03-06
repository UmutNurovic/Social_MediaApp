const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const helmet = require('helmet');
const morgan = require('morgan');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const postRouter = require('./routes/posts');

const port = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology: true },()=>{
    console.log("Connect to MongoDb");
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use('/api/users',userRouter);
app.use('/api/auth',authRouter);
app.use('/api/posts',postRouter);
app.listen(port, () => console.log(`Server running on port ${port} 🔥`));