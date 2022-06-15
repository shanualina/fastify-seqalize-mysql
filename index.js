const fastify = require('fastify');
const PORT = process.env.PORT || 3000;
const db = require("./config/db")
const routes = require("./routes/Routes")
const path = require('path')
const multer = require('fastify-multer') // or import multer from 'fastify-multer'

const app = fastify({
    logger: true
})
app.register(require('fastify-static'), {
    root: path.join(__dirname, 'public'),
    prefix: '/public/images/',
})
// app.register(db)
app.register(multer.contentParser);

app.register(require('@fastify/cors'), {
    origin: "*",
    corsOptions: 200
})
routes.forEach((route, index) => {
    app.route(route)
})


app.get("/", async () => {
    return {
        Message: "Fastify is On Fire"
    }
})

const start = async () => {
    try {
        await db.sync();
        await app.listen(PORT)
        app.log.info(`server listening on ${app.server.address().port}`)

    } catch (err) {
        app.log.error(err)
        process.exit(1)

    }
}
start();