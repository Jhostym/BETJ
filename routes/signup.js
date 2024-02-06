const router = require('express').Router();
const { jsonResponse } = require('../lib/jsonrespose');
const User = require('../schema/user');


router.post("/", (req, res) => {
  const { username, name, password } = req.body;

  if (!!!username || !!!name || !!!password) {
    return res.status(400).json(jsonResponse(400, {
      error: 'Fields are required',
    }));
  }
  //crear usuario en la base de datos
  const user = new User(
    {
      username,
      name,
      password,
    }
  );

  user.save();

  res.status(200).json(jsonResponse(200, {
    message: 'User created',
  }));

  res.send('signout');
}
);
module.exports = router;