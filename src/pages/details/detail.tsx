import React from "react";
import { useAppSelector } from "../../store/store";
import { Navigate } from "react-router-dom";
const Details = () => {
  const { name, age } = useAppSelector((state) => state.messageReducer.user);
  if (name === "") {
    return <Navigate to="/" />;
  }
  return (
    <div className="details">
      Your name {name} aged {age} has been added to student system. You may now
      exit.
    </div>
  );
};
export default Details;
