
module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'roottoor',
    DB: 'sakila',
    dialect: 'mysql',
    PORT:3306,
    pool: {
        max: 50,
        min: 0,
        acquire: 30000,
        idle: 10
    },
}
