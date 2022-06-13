import React, {Fragment, useState} from 'react'

const PostPeeps = () => {
  const [peep, setPeep] = useState("")  
  
  
  // const onSubmitForm = async e => {
  //   //below so it doesnt refresh
  //   e.preventDefault();
  //   try {
      
  //     const body = { peep };
  //     const response = await fetch("http://localhost:5000/peeps", {
  //       method: "POST",
  //       headers: {"Content-Type": "application/json"},
  //       body: JSON.stringify(body)
  //     })
  //     console.log(response)
  //     //window.location = "/";
  //   } catch (err) {
  //     console.error(err.message)
  //   }
  // };

  const NewPeep = async () => {
    await fetch("http://localhost:5000/peeps", {
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
                text: peep
            })
        })
        .then(response => response.json())
        .then(data => {


            setPeep(data);
            
        })
        .catch(err => console.log(err))
    }

  return (
    <Fragment>
    <h1 className='text-center mt-5'>Post a NEW PEEPPPPPPP</h1>
    <form className='d-flex mt-5' onSubmit={NewPeep}>
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