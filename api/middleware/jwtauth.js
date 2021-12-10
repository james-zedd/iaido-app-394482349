const jwt = require('jsonwebtoken');


module.exports = function(req, res, next) {
  let token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({message: 'No token. Authorization denied.'})
  }

  let jwtToken = token.replace('Bearer ', '');

  try {
    const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({message: 'Token is not valid.'});
  }
};