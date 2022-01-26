import createError from "http-errors";
import express from "express";
import mongoose from "mongoose";
import router from "./routes/index.js";
import bodyParser from 'body-parser'
import cors from 'cors';
import 'dotenv/config';

const app = express();
const dbUrl = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majorit`;
const port = process.env.PORT || 3000

/*app.use(express.json());*/
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    //res.render('error');
    res.json({error: err});
});

app.listen(port, async () => {
    await mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log(`Example app listening at http://localhost:${port}`);
});

export default app;
