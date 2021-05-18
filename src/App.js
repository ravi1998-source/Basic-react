import React from 'react';
import {connect} from 'react-redux';
import {addData} from './action';
import './App.css';
import data from './data';


function App({addData,data}) {


  return (
    <div className="App">
      <h1>App</h1>
      <button onClick={addData}>Add Data</button>
    </div>
  );
}

const mapState = (state)=> (
  { data: state.data },
  console.log(data)
  )

const mapDispatch = (dispatch) => {
  return {
    addData: ()=> dispatch(addData)
  }
}

export default connect(mapState,mapDispatch) (App);
