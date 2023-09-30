const express = require('express');
const { savegame, loadgame, deletegame } = require("../controllers/savegameController");
const { report, verifyLink } =require("../controllers/verifyController");
const { register } = require("../controllers/authController");
const { login } = require("../controllers/loginController");
const router = express.Router();

router.post('/savegame', savegame);
router.post('/savegame/loadgame', loadgame);
router.post('/savegame/deletegame', deletegame);


router.post('/verify/report', report);
router.get('/verify/report/:id/:email', verifyLink);

router.post('/register', register);
router.post('/login', login);


module.exports = router;