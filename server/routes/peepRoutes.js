const express = require('express')
const router = express.Router()
const { getPeeps, postPeeps, updatePeeps, deletePeeps } = require('../controllers/peepController')

router.get('/', getPeeps)

router.post('/', postPeeps)

router.put('/:id', updatePeeps)

router.delete('/:id', deletePeeps)

module.exports = router 