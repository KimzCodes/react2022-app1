import UserCard from "../UserCard/UserCard";

const UserList = ({ names, getId }) => {
  const namesLoop = names.map((el) => (
    <UserCard key={el.id} {...el} getId={getId} />
  ));
  return <>{namesLoop}</>;
};

export default UserList;
