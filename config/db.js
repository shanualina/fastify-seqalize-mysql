// const fastifyPlugin = require('fastify-plugin')
// const mongoose = require('mongoose')
// // Connect to DB
// async function dbConnector(fastify, options) {
//     try {
//         const url = "mongodb://localhost:27017/fastify-blog"
//         const db = await mongoose
//             .connect(url, {
//                 useNewUrlParser: true
//             })
//         console.log("Database is connected")
//         fastify.decorate('mongo', db)
//     } catch (err) {
//         console.log(err)
//     }
// }
// module.exports = fastifyPlugin(dbConnector)
const Sequelize = require("sequelize");

const connection = new Sequelize({
    // instance: "sequelize", // the name of fastify plugin instance.
    autoConnect: true, // auto authentication and test connection on first run
    dialect: 'mysql', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    database: 'sakila',
    username: 'root',
    password: 'roottoor',
    options: {
        host: 'localhost',
        port: '3306'
    }
});

module.exports = connection;
