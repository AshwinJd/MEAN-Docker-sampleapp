const router = require('express').Router();
const { storeUser, getAllUsers } = require('./user.service');

router.get('/', (req, res) => {
    console.log("HI");
    res.end();
})
router.get('/list', getAllUsers);
router.post('/', storeUser)
module.exports = router;