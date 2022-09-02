import UserCard from "../UserCard/UserCard";

const UserList = ({ names, deleteHandler, updateHandler }) => {
  const namesLoop = names.map((el) => (
    <UserCard
      key={el.id}
      {...el}
      deleteHandler={deleteHandler}
      updateHandler={updateHandler}
    />
  ));
  return <>{namesLoop}</>;
};

export default UserList;
