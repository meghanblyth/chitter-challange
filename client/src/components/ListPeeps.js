import React, { Fragment, useState, useEffect } from 'react';



const ListPeeps = () => {
  const [peeps, setPeeps] = useState([])

  const deletePeep = async (id) => {
    try {
      const deletePeep = await fetch(`http://localhost:5000/peeps/${id}`, {
        method: "DELETE"
      })
      console.log(deletePeep)
    } catch (err) {
      console.error(err.message)
    }
  }

  const getPeeps = async () => {
    try { 
      const response = await fetch("http://localhost:5000/peeps") 
      const jsonData = await response.json()
      setPeeps(jsonData) 
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getPeeps();
  }, []);

  return (
    <Fragment> 
      <table className="table mt-5 text-centre">
        <thead>
          <tr>
            <th>Peep</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {peeps.map(peep => (
            <tr key={peep._id}>
              <td>{peep.text}</td>
              <td>Edit</td>
              <td><button className='btn btn-danger' onClick={() => deletePeep(peep._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}
export default ListPeeps; 