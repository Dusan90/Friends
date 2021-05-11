import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import _ from "lodash";
import "../Styles/User.scss";
import ListofFriends from "../ListofFriends";

function User() {
  const data = useSelector((state) => state.fetchDataReducer);
  const params = useParams();
  console.log(data);
  const specificUser = data.data.filter((el) => {
    return el.id === JSON.parse(params.id);
  });

  const myFriends = data.data.filter((el) => {
    if (specificUser[0]["friends"].includes(el.id)) {
      return el;
    }
  });

  const friendsOfFriends = _.filter(data.data, (el) => {
    if (_.uniq(_.flatten(_.map(myFriends, "friends"))).includes(el.id)) {
      return el;
    }
  });

  const suggestedFriends = data.data.filter((el) => {
    if (
      el.friends.filter((e) => specificUser[0]["friends"].includes(e)).length >=
      2
    ) {
      return el;
    }
  });

  console.log(specificUser);

  return (
    <>
      {specificUser &&
        specificUser.map((el) => (
          <div className="mainDivUser" key={el.id}>
            <div className="userInfo">
              <img
                src={
                  el.gender === "male"
                    ? "https://i.pinimg.com/originals/0c/9a/2d/0c9a2d4dcb169c6afac35d19494a1f4b.jpg"
                    : "data:image/png;base64,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"
                }
                alt="user image"
              />
              <div>
                <p>Name: {el.firstName}</p>
                <p>Surname: {el.surname}</p>
                <p>Age: {el.age}</p>
                <p>Gender: {el.gender}</p>
              </div>
            </div>
            <div className="friends">
              <div className='myFriends'>
                My friends
                <ListofFriends data={myFriends}/>
                </div>
              <div className='frendOffriend'>
                Friends of my friends
                <ListofFriends data={friendsOfFriends} id={el.id}/>
                </div>
              <div className='suggested'>
                Suggested friends
                <ListofFriends data={suggestedFriends} id={el.id}/>
                </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default User;
