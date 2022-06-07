const express = require('express')
const router = express.Router()
const { getPeeps, postPeeps, updatePeeps, deletePeeps } = require('../controllers/peepController')

router.route('/').get(getPeeps).post(postPeeps)

router.route('/:id').delete(deletePeeps).put(updatePeeps)

module.exports = router 

