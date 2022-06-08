const asyncHandler = require('express-async-handler')

const Peep = require('../models/peepModel')

const getPeeps = asyncHandler(async (req, res) => {
  const peeps = await Peep.find()

  res.status(200).json(peeps)
})

const postPeeps = asyncHandler(async (req, res) => {

  if(!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const peeps = await Peep.create({
    text: req.body.text
  })

  res.status(200).json(peeps)
})

const updatePeeps = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update peep ${req.params.id}` })
})

const deletePeeps = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete peep ${req.params.id}` })
})

module.exports = {
  getPeeps, 
  postPeeps, 
  updatePeeps, 
  deletePeeps,
}

