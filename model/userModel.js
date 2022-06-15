const Sequelize = require("sequelize");

const database = require("../config/db");

const userModel = database.define("user", {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    userName: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    mobileNo: {
        type: Sequelize.STRING
    },
    profilePic: {
        type: Sequelize.STRING
    },
    roleId: {
        type: Sequelize.INTEGER
    },
    status: {
        type: Sequelize.INTEGER
    }
});

module.exports = userModel 