const router = require("express").Router();
const frontController = require('../controllers/userController');



router.get("/", frontController.home)

router.get("/survey", frontController.srv)

router.get("/successPage", frontController.suc)


router.post('/details/save', frontController.add_answers)

router.post('/user/saved', frontController.add_user)

// router.post('/survey/complete', frontController.add_survey)


module.exports = router