const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

exports.oauthCallback = async (req, res) => {
  const { name, email, avatar, provider } = req.body;

  let user = await User.findOne({ email });
  if (!user) {
    user = new User({ name, email, avatar, provider });
    await user.save();
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });

  res.status(200).json({
    message: 'Login successful',
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    },
  });
};

exports.getCurrentUser = async (req, res) => {
  const user = await User.findById(req.user.id).select('-__v');
  if (!user) return res.status(404).json({ message: 'User not found' });

  res.status(200).json(user);
};
