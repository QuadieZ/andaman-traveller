require("dotenv").config();

// Saving user data
const session = require("express-session");

// Cross origin access
const cors = require("cors");

// Controllers - Define endpoints
const adminController = require("./controllers/admin_controller");
const userController = require("./controllers/user_controller");
const placesController = require("./controllers/places_controller");

const mongoose = require("mongoose");
const express = require("express");
const app = express();

const PORT = 4000;
mongoose.connect(
  process.env.REACT_APP_MONGODB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("Database Error", err);
    }
    console.log("Connected to database");
  }
);

express.json();
app.use(
  session({
    secret: process.env.REACT_APP_SECRET,
    resave: false,
    saveUninitialized: false.valueOf,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 14,
    },
  })
);
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());

setTimeout(() => {
  // User Endpoints
  /*
  app.get("/api/user-data", userController.readUserDat);
  app.post("/api/user-data/pins", userController.addToPin);
  app.delete("/api/user-data/pins/:id", userController.removeFromCart);
  app.post("/api/login", userController.login);
  app.post("/api/logout", userController.logout);
  */
  app.get("/auth/callback", userController.login);

  // Places Endpoints
  app.get("/api/places", placesController.readAllPlaces);
  app.get("/api/places/:id", placesController.readPlace);

  // Admin Endpoints
  app.get("/api/users", adminController.getAdminUsers);
  app.post("/api/places", adminController.createPlace);
  app.put("/api/places/:id", adminController.updatePlace);
  app.delete("/api/products/:id", adminController.deletePlace);
}, 200);

app.listen(PORT, () => {
  console.log("Listening on Port: ", PORT);
});
