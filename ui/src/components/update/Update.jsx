import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/actions/userAction";
import Warning from "../warning/Warning";
import "./update.css";

export default function Update() {
  const userNameRef = useRef();
  const {
    user: { username, email },
    isPending,
    hasError,
    errorMessage,
  } = useSelector(({ user }) => user);

  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(userInfo, dispatch);
    setUserInfo({ username: "", email: "" });
    userNameRef.current.focus();
  };

  const hadleRemoveUser = () => {};

  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        <Warning />
        <button className="delete" onClick={() => hadleRemoveUser()}>
          Delete Account
        </button>
        <div className="updateContainer">
          <form onSubmit={handleSubmit}>
            <div className="formItem">
              <label>Profile Picture</label>
              <div className="profilePic">
                <img
                  className="avatar"
                  src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <span className="change">Change</span>
              </div>
            </div>
            <div className="formItem">
              <label>Username</label>
              <input
                ref={userNameRef}
                className="formInput"
                type="text"
                placeholder={isPending ? "" : `${username}`}
                value={userInfo.username}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, username: e.target.value })
                }
              />
            </div>
            <div className="formItem">
              <label>Email</label>
              <input
                className="formInput"
                type="text"
                placeholder={isPending ? "" : `${email}`}
                value={userInfo.email}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, email: e.target.value })
                }
              />
            </div>
            <div className="formItem">
              <label>Password</label>
              <input className="formInput" type="password" />
            </div>
            <button className="updateButton" disabled={isPending}>
              Update
            </button>
            {hasError && <span className="error">{errorMessage}</span>}
          </form>
        </div>
      </div>
    </div>
  );
}
