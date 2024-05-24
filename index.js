const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const modelRoutes = require('./routes/modelRoutes')
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DataBase connected"))
  .catch((err) => console.error(err));


  app.use('/allmodels',modelRoutes)
  app.use('/files', express.static("files"));


  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

