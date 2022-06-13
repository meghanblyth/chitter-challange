import React, { Fragment, useState, useEffect } from 'react';

const ListPeeps = () => {
  
  const [peeps, setPeeps] = useState([])

  // const deletePeeps = async (id) => {
  //   try {
  //     const binPeep = await fetch(`http://localhost:5000/peeps/${id}`, {
  //       method: "DELETE"
  //     })
  //     //console.log(binPeep)
  //   setPeeps(peeps.filter(peep => peep.peeps_id !== id))
  //   } catch (err) {
  //     console.error(err.message)
  //   }
  // }

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
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}
export default ListPeeps; 