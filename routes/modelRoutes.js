const express = require('express')
const { uploadModel, getModels } = require('../controllers/glbcontrollers')
const upload = require('../middlewares/uploadFile')



const router = express.Router()
router.post('/',upload.single('file'),uploadModel)
router.get('/',getModels)

module.exports = router;