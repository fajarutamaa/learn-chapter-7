const Sentry = require('@sentry/node')
const ProfilingIntegration = require('@sentry/profiling-node')

function initSentry(dsn) {
    Sentry.init({
        dsn,
        integrations: [
            new Sentry.Integrations.Http({ tracing: true }),
            new Sentry.Integrations.Express({ app: express() }),
            new ProfilingIntegration(),
        ],
        tracesSampleRate: 1.0,
        profilesSampleRate: 1.0,
    })
}

module.exports = { initSentry }