const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/userModel');


// ADD USER

// UPDATE USER
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findOneAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json("You can only update your account details!");
  }
});


// GET USER
router.get("/", async (req, res, next) =>{
  try {
    await User.findById(req.params.id);
  } catch (error) {
    res.status(500).json(error)
  }
})


// DELETE USER
router.delete('/:id', async (req, res) =>{
  if(req.body.userId === req.params.id){
    try {
      const user = await User.findById(req.params.id)
      try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('User deleted successfully!')
      } catch (error) {
        res.status(500).json(error);
      }
    } catch (error) {
      res.status(404).json('User not found');
    }
  }else{
    res.status(500).json('You can only delete your account!')
  }
})


module.exports = router;