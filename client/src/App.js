import ListPeeps from "./components/ListPeeps";
import PostPeeps from "./components/PostPeeps";
import React, { Fragment } from 'react'

function App() {
  return (
    <Fragment>
    <div className="container">
      <PostPeeps />
      <ListPeeps /> 
    </div> 
    </Fragment>
  );
}

export default App;
