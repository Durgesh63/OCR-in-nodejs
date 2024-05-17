const mongoose = require("mongoose");
const { BD_NAME, DB_URI } = require('../app.constant');

/**
 * Connect to database
 */
async function bdConnect() {
    try {
        const connectionInstance = await mongoose.connect(`${DB_URI}/${BD_NAME}`)
        console.log("Data base connect !! DB Host :", connectionInstance.connections[0].host);
    } catch (error) {
        throw error
    }

}


module.exports = bdConnect