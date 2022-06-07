const asyncHandler = require('express-asyncHandler')

const getPeeps = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get peeps' })
})

const postPeeps = asyncHandler(async (req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }
  res.status(200).json({ message: 'Post new peep' })
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