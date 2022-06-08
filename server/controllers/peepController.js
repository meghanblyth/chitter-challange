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

  const peep = await Peep.findById(req.params.id)

  if(!peep) {
    res.status(400)
    throw new Error('Peep does not exist')
  }

  const updatedPeep = await Peep.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedPeep)
})

const deletePeeps = asyncHandler(async (req, res) => {

  const peep = await Peep.findById(req.params.id)

  if(!peep) {
    res.status(400)
    throw new Error('Peep does not exist')
  }

  await peep.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getPeeps, 
  postPeeps, 
  updatePeeps, 
  deletePeeps,
}

