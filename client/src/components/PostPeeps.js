import React, {useState} from 'react'

const PostPeeps = () => {
  const [peep, setPeep] = useState("")  

  return(
    <>
    <h1 className='text-center mt-5'>Post a NEW PEEPPPPPPP</h1>
    <form>
      <input type='text'/>
      <button>Add Peep</button>
    </form>
    </>
  )
}

export default PostPeeps;