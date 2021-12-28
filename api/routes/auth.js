const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtauth = require('../middleware/jwtauth');

const User = require('../models/User');

// @route GET /api/auth
// Get logged in user
// protected == true
router.get('/', jwtauth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');

    if (!user) {
      res.status(400).json({
        status: 400,
        data: 'User not found.'
      });  
    }

    res.status(200).json({
      status: 200,
      data: user
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error.');
  }
});

// @route POST /api/auth
// Log in user
// protected == false
router.post(
  '/', 
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
  ], 
  async (req, res) => {
    const errors = validationResult(req);
    const { email, password } = req.body;
    
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }

    try {
      let user = await User.findOne({email: email});

      if (user == null) {
        return res.status(400).json({message: 'Invalid Credentials'});
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({message: 'Invalid Credentials'});
      }

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(
        payload, 
        process.env.JWT_SECRET, 
        {expiresIn: 1800},
        (err, token) => {
          if (err) {
            throw err;
          }
          res.status(200).json({
            status: 200,
            user: user,
            token: token
          });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
)

// @route /api/auth/logout
// Log out user
// protected == false
router.post('/logout', (req, res) => {
  res.send('Log out the user');
})

module.exports = router;