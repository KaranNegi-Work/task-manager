const express = require('express')
const COMMON_CONST = require("../constants/common")
const router = express.Router();

router.use(COMMON_CONST.API_VERSION_1_0, require("./v1.0"))

module.exports = router