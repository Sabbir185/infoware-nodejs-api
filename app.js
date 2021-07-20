// external import
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// internal import
const { notFoundError, errorHandler } = require('./middlewares/common/errorHandling');
const adminRouter = require('./routers/adminRouter');
const allProduct = require('./routers/allProductShow');

// app initialization
const app = express();
dotenv.config();

// database connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Database connection successful!'))
    .catch((err) => console.log(err));

// request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static file
app.use(express.static(path.join(__dirname, 'public')));


// router
app.use('/', allProduct);
app.use('/admin', adminRouter);

// 404 not found error
app.use(notFoundError);

// default error
app.use(errorHandler);

// server port
app.listen(process.env.PORT || 5500, () => {
    console.log(`server is listening post ${process.env.PORT}`);
})
