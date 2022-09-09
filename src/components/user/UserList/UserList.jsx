import React from "react";
import UserCard from "../UserCard/UserCard";

const UserList = ({ names, getId }) => {
  console.log("UserList");
  const namesLoop = names.map((el) => (
    <UserCard key={el.id} {...el} getId={getId} />
  ));
  return <>{namesLoop}</>;
};

export default React.memo(UserList);
