// Import Express router and apiRoutes
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
// If the users puts in a route not use, sends a message saying they're in the wrong route
router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;
