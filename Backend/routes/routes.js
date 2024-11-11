const express = require('express');

const router = express.Router()
const User = require('../models/User');
const Product = require('../models/Product');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verifyToken  = require('../middelwares/usersMiddelware');

// User Routes
router.post('/users/register', async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
          return res.status(400).json({ error: 'Email already exists' });
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
          email: req.body.email,
          password: hashedPassword,
          age: req.body.age,
          name: req.body.name
        });
        
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
      } catch (error) {
        res.status(500).json({ error: error });
      }
})

router.post('/users/login', async (req, res) => {
    try {
      // Check if the email exists
      const user = await User.findOne({ email: req.body.email });
      console.log(user)
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Compare passwords
      const passwordMatch = await bcrypt.compare(req.body.password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ email: user.email }, 'secret');
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ error: error });
    }
});

router.get('/users/all', async (req, res) => {
    try {
        const data = await User.find()
        res.status(200).json(data)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Product Routes
router.get('/products/all', verifyToken , async (req, res) => {
    try {
        const data = await Product.find()
        res.status(200).json(data)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
}) 

router.get('/users/find', verifyToken, async (req, res) => {
    try {
      // Fetch user details using decoded token
      const user = await User.findOne({ email: req.user.email });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json({ name: user.name, email: user.email });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/products/add',verifyToken, async (req, res) => {
    try {
        const data = new Product({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        })
        await data.save()
        res.status(200).json(data)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
module.exports = router;