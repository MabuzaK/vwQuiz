const router = require("express").Router();
const frontController = require('.../controllers/userController');



router.get("/", frontController.home)

router.get("/Questionnaire", frontController.question)

router.get("/successPage", frontController.suc)


router.post('/details/save', frontController.add_answers)

router.post('/user/saved', frontController.add_user)

// router.post('Questionnaire/complete', frontController.add_Questionnaire)


module.exports = router