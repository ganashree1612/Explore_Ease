const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");
const optionModel = require("./models/Option");
const placeModel = require("./models/Places");
const reviewModel = require("./models/Review");
const path = require("path")
const fs = require("fs/promises");
const bcrypt = require("bcrypt");
const multer = require("multer");
const { CardBody } = require("react-bootstrap");
const storage = multer.diskStorage({
  destination: (req, file) => {
    cb(null);
  },
});
const app = express();
const upload = multer({ storage: storage });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
mongoose
  .connect("mongodb://localhost:27017/Explore")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.post("/review", async (req, res) => {
  try {
    const { placeName, rating, description, image } = req.body;
    console.log(placeName);
    
    const place = await placeModel.findOne({ name: placeName });
    console.log(place._id);
    if (!place) {
      return res.status(404).json({ message: "Place not found" });
    }
    
    const newReview = new reviewModel({
      placeId: place._id, 
      description,
      rating,
      image
      
    });
    console.log(newReview);
    
    await newReview.save();

    res.status(201).json({ message: "Review created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

app.get("/reviews/:placeName", async (req, res) => {
  try {
    
    const { placeName } = req.params;

    
    const place = await placeModel.findOne({ name: placeName });

    
    if (!place) {
      return res.status(404).json({ message: "Place not found" });
    }

    
    const reviews = await reviewModel.find({ placeId: place._id });

   
    res.status(200).json(reviews);
  } catch (error) {
    
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/User", async (req, res) => {
  try {
    const { name, email, password } = req.body
    console.log(password)
    const hash=await bcrypt.hash(password,12)
    // const user = await UserModel.create(req.body);
    const user = new UserModel({
      name,
      email,
      password:hash
    })
    await user.save()
    res.json(user);
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ error: err.message });
  }
});
app.post("/User/check", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    const pass=await bcrypt.compare(password,user.password)
    if (pass&&user) {
      
      res.json({ exists: true, email: user.email, password: user.password });
    } else {
      
      res.json({ exists: false });
    }
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred. Please try again later." });
  }
});
app.get("/food", async (req, res) => {});
app.get("/User", async (req, res) => {
  try {
    const { email } = req.query;
    const user = await UserModel.findOne({ email });

    if (user) {
      res.json({ exists: true, email: user.email });
    } else {
      res.json({ exists: false, email: null });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/Option", async (req, res) => {
  try {
    const option = await optionModel.create(req.body);
    res.json(option);
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ error: err.message });
  }
});
app.post("/Places", async (req, res) => {
  try {
    const place = await placeModel.create(req.body);
    res.json(place);
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ error: err.message });
  }
});

app.post("/User", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.json(user);
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ error: err.message });
  }
});

app.options("/User", cors(corsOptions));
app.options("/Option", cors(corsOptions));
