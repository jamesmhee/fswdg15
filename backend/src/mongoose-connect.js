import mongoose from "mongoose";

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGOOSE_URI ?? "mongodb://localhost:27017", {
  dbName: process.env.MONGOOSE_DBNAME ?? "e-commerce_project",
  promiseLibrary: Promise,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
