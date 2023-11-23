const express = require('express')
const app = express()
const router = require('./routes/route')
const Sentry = require("@sentry/node");
require('dotenv').config()

const port = process.env.PORT || 3000
const sentryDsn = process.env.SENTRY_DSN


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/v1/', router)


Sentry.init({
    dsn: sentryDsn,
    tracesSampleRate: 1.0,
})

app.use(Sentry.Handlers.requestHandler())
app.use(Sentry.Handlers.errorHandler())

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`)
})