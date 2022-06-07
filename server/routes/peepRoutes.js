const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Get peeps' })
})

router.post('/', (req, res) => {
  res.status(200).json({ message: 'Post new peep' })
})

router.put('/:id', (req, res) => {
  res.status(200).json({ message: `Update peep ${req.params.id}` })
})

router.delete('/:id', (req, res) => {
  res.status(200).json({ message: `Delete peep ${req.params.id}` })
})


module.exports = router 