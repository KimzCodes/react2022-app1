import UserCard from "../UserCard/UserCard";

const UserList = ({ names, deleteHandler }) => {
  const namesLoop = names.map((el) => (
    <UserCard key={el.id} {...el} deleteHandler={deleteHandler} />
  ));
  return <>{namesLoop}</>;
};

export default UserList;
