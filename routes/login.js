const router = require('express').Router();
const { jsonResponse } = require('../lib/jsonrespose');
router.post( "/",(req, res) => {
  const { username,password } = req.body;

  if (!!!username || !!!password) {
    return res.status(400).json(jsonResponse(400, {
      error: 'Fields are required',
    }));
    }
    //autenticar usuario
    const acessToken = "access-token";
    const refreshToken = "refresh-token";
    const user = {
      id: "1",
      name: "JHOSTYM ROSAS HERNANDEZ",
      username: "JHOSTYM96",
    };
    res.status(200).json(jsonResponse(200, {
      message: {user, acessToken, refreshToken},
    }));
}
);

module.exports = router;