const router = require('express').Router();

router.route('/').get((req, res) => {
  res.send('refresh-token');
}
);

module.exports = router;