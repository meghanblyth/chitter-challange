import React, {Fragment, useState} from "react";

const EditPeeps = ({ peep }) => {
  const [peeps, setPeeps] = useState(peep.peeps)
  const updatePeep = async () => {
    //e.preventDefault()
    try {
      // const body = {peeps}
      const response = await fetch(`http://localhost:5000/peeps/${peep.peep_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: peeps
        })
      });
      console.log(response)
      // const jsonData = await response.json()
      // updatePeep(jsonData)

    } catch (err) {
      console.error(err.message)
    }
  };
  return (
    <Fragment>
      
<button 
  type="button"
  className="btn btn-primary" 
  data-toggle="modal" 
  data-target={`#id${peep.peep_id}`}>
  Edit
</button>


<div className="modal" id={`id${peep.peep_id}`}>
  <div className="modal-dialog">
    <div className="modal-content">

    
      <div className="modal-header">
        <h4 className="modal-title">Edit your peep playa</h4>
        <button type="button" className="close" data-dismiss="modal">&times;</button>
      </div>

      <div className="modal-body">
        <input type="text" className="form-control" value={peeps} onChange={e =>
        setPeeps(e.target.value)}/>
      </div>

     
      <div className="modal-footer">
        <button 
          type="button" 
          className="btn btn-primary" 
          data-dismiss="modal"
          onClick={e => updatePeep(e)}>
          Edit
        </button>
        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
    </Fragment>
  )
}

export default EditPeeps;