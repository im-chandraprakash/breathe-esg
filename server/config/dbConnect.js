const mongoose = require("mongoose");

const url = "mongodb+srv://user:uo0WxZkqkM5Wa6w7@cluster0.e7vhw3o.mongodb.net/ignore";

const dbConnect = () => {
    mongoose
        .connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("MongoDb Connected Successfully");
        })
        .catch((e) => {
            console.log("MongoDb connection Error", e);
        });
};

module.exports = dbConnect;
