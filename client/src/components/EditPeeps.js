import React, { Fragment } from 'react';


const EditPeeps = () => {
  // const [peep, setPeep] = useState(peep.text)

  // const updatePeeps = async () => {
  //   try { 
  //     const body = {peep}
  //     const response = await fetch(`http://localhost:5000/peeps/${peep._id}`, {
  //     method: "PUT",
  //     headers: {"Content-Type": "application/json"},
  //       body: JSON.stringify(body)
  //     });
  //     const jsonData = await response.json()
  //     updatePeeps(jsonData) 

  //   } catch (err) {
  //     console.error(err.message)
  //   }
  // }

  return (
    <Fragment>
          
    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
      Edit
    </button>

    <div className="modal" id="myModal">
      <div className="modal-dialog">
        <div className="modal-content">

        
          <div className="modal-header">
            <h4 className="modal-title">Edit</h4>
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>

          
          <div className="modal-body">
            Edit Peeps
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-dismiss="modal">Edit</button>
            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
          </div>

        </div>
      </div>
    </div>

    </Fragment>
  )
}

export default EditPeeps; 

