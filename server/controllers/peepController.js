const getPeeps = (req, res) => {
  res.status(200).json({ message: 'Get peeps' })
}

const postPeeps = (req, res) => {
  if(!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  } 
  res.status(200).json({ message: 'Post new peep' })
}

const updatePeeps = (req, res) => {
  res.status(200).json({ message: `Update peep ${req.params.id}` })
}

const deletePeeps = (req, res) => {
  res.status(200).json({ message: `Delete peep ${req.params.id}` })
}

module.exports = {
  getPeeps, 
  postPeeps, 
  updatePeeps, 
  deletePeeps,
}