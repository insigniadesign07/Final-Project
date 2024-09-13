const jwt = require('jsonwebtoken');

const authMiddleware = (roles = []) => {
  return (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ message: 'Access denied' });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err || !roles.includes(user.role)) return res.status(403).json({ message: 'Access denied' });
      req.user = user;
      next();
    });
  };
};

module.exports = authMiddleware;
