import React from "react";
import { useSelector } from "react-redux";
import "./warning.css";

export default function Warning() {
  const { username } = useSelector(({ user }) => user);
  return (
    <div className="warning">
      Deleting account cannot be undone <b>{username}</b>! You should confirm
      your password to delete your account.
    </div>
  );
}
