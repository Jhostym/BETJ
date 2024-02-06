const router = require('express').Router();
const { jsonResponse } = require('../lib/jsonrespose');
const User = require('../schema/user');


router.post("/", async (req, res) => {
  const { username, name, password } = req.body;

  if (!!!username || !!!name || !!!password) {
    return res.status(400).json(jsonResponse(400, {
      error: 'Fields are required',
    }));
  }

  //crear usuario en la base de datos

  try {

    const user = new User();
    const exist = await user.usernameExists(username);

    if (exist) {
      return res.status(400).json(jsonResponse(400, {
        error: 'Username already exists',
      }));
    }

    const newUser = new User({
      username,
      name,
      password,
    });

    newUser.save();

    res.status(200).json(jsonResponse(200, {
      message: 'User created',
    }));

    res.send('signout');

  } catch (error) {
    res.status(500).json(jsonResponse(500, {
      error: 'Internal server error',
    })
    );
  }
});


module.exports = router;