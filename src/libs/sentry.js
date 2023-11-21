const Sentry = require('@sentry/node')
// const ProfilingIntegration = require('@sentry/profiling-node')

// const app = express()

function initSentry(dsn) {
    Sentry.init({
        dsn,
        //  integrations: [
        
        //      new ProfilingIntegration(),
        //  ],
        tracesSampleRate: 1.0,
        profilesSampleRate: 1.0,
    })
}

module.exports = { initSentry }