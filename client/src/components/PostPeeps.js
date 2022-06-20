import React, {Fragment, useState} from 'react'

const PostPeeps = () => {
  const [peep, setPeep] = useState("")  
  
  const newPeep = async () => {
    try {
      await fetch("http://localhost:5000/peeps", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          text: peep
        })
      })
    } catch (err) {
      console.error(err.message)
    }
  };

  return (
    <Fragment>
    <h1 className='text-center mt-5'>Post a NEW PEEPPPPPPP</h1>
    <form className='d-flex mt-5' onSubmit={newPeep}>
      <input 
        type='text' 
        className='form-control' 
        value={peep}
        onChange={e => setPeep(e.target.value)}
      />
      <button className='btn btn-success'>Add Peep</button>
    </form>
    </Fragment>
  )
} 

export default PostPeeps;