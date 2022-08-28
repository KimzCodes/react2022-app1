import styles from "./userCard.module.css";

const UserCard = ({ name, gender, ...props }) => {
  const { userCard, delBtn } = styles;

  const deleteRecord = (id) => {
    props.deleteHandler(id);
  };

  return (
    <div className={userCard}>
      <ul>
        <li>
          <span>name:</span>
          {name}
        </li>
        <li>
          <span>gender:</span>
          {gender}
        </li>
        <li>
          <span>phone:</span>
          {props.phone}
        </li>
        <li>
          <span>address:</span>
          {props.address}
        </li>
      </ul>
      <div className={delBtn} onClick={() => deleteRecord(props.id)}>
        x
      </div>
    </div>
  );
};

//delete clicked -> userCard
//invoke deleteHandler -> app

export default UserCard;
