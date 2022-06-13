import React, { useState, useEffect } from 'react';

const ListPeeps = () => {
  
  const [peeps, setPeeps] = useState([])

  const getPeeps = async () => {
    try { 
      const response = await fetch("http://localhost:5000/peeps") 
      const jsonData = await response.json()
      setPeeps(jsonData) 
    } catch (error) {
      console.error(error.message)
    }
  }
  useEffect(() => {
    getPeeps();
  }, []);

  
  return (
    <> 
    {" "}
    <table className="table mt-5 text-centre">
    <thead>
      <tr>
        <th>Peep</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr> */}
      {peeps.map(peep => (
        <tr>
          <td>{peep.text}</td>
          <td>Edit</td>
          <td>Delete</td>
        </tr>
      ))}
    </tbody>
  </table>
    </>
  )
}
export default ListPeeps; 