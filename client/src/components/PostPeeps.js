import React from 'react'

const PostPeeps = () => {
  //const [peep, setPeep] = useState("")  

  return(
    <>
    <h1 className='text-center mt-5'>Post a NEW PEEPPPPPPP</h1>
    <form className='d-flex'>
      <input type='text'/>
      <button className='btn btn-success'>Add Peep</button>
    </form>
    </>
  )
}

export default PostPeeps;