const express = require('express')
const app = express()
const router = require('./src/routes/route')
const { initSentry } = require('./src/libs/sentry')
require('dotenv').config()

const port = process.env.PORT || 3000


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/v1/', router)

app.use(Sentry.Handlers.requestHandler());

// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());


app.use(Sentry.Handlers.errorHandler());

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});


app.get('/', (req, res) => {
    try {
        console.log('Hello World')
    } catch (error) {
        Sentry.captureException(error);
    }
})

initSentry(process.env.SENTRY_DSN)

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`)
})