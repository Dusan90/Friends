import React from "react";
import { useSelector } from "react-redux";
import {useHistory} from 'react-router-dom'
import ListofFriends from "../ListofFriends";
import "../Styles/Home.scss";

function Home() {
  const data = useSelector((state) => state.fetchDataReducer);
  console.log(data);
  const history = useHistory()

  function handleClick(id){
    history.push(`/user/${id}`)
  }
  return (
    <>
      {data.loading && <p className="loader">Loading...</p>}
      {!data.loading && (
        <div className="tableDiv">
          <div className="headers">
              <p>Image</p>
              <p>Name</p>
              <p>Age</p>
          </div>
          <ListofFriends data={data.data && data.data}/>
        </div>
      )}
    </>
  );
}

export default Home;
