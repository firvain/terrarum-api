const MongoClient = require("mongodb").MongoClient;
const db = async () => {
  try {
    const db = await MongoClient.connect(process.env.MONGOLAB_URI, {
      useNewUrlParser: true
    });
    return db.db();
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = db;
