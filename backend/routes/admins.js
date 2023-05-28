const { check, validationResult } = require("express-validator");

const router = require("express").Router();

const Admin = require("../models/admin.model.js");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
//@route POST api/admins
//@desc Register an admin
//@access Public
router.post(
  "/",
  [
    check("name", "Please add a name").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Please enter a pwd with 6 or more characters ").isLength(
      { min: 6 }
    ),
  ],
  async (req, res) => {
    // res.send("Register an admin");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //res.send("passed");

    const { name, email, password } = req.body;

    try {
      let admin = await Admin.findOne({ email });

      if (admin) {
        return res.status(400).json({ msg: "Admin already exists" });
      }

      admin = new Admin({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      admin.password = await bcrypt.hash(password, salt);

      await admin.save();
      const payload = {
        admin: {
          id: admin.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);
module.exports = router;
