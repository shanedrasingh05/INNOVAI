import mongoose from "mongoose"

              // Connected to MongoDB
function connect(){
    mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => {
        console.log("Connected To MongoDB");
      })
      .catch((err) => {
        console.log(err);
      });
}

export default connect;