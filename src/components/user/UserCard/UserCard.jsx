import styles from "./userCard.module.css";

const UserCard = ({ name, gender, ...props }) => {
  const { userCard, delBtn, editBtn } = styles;

  const deleteRecord = (id) => {
    props.getId({ id, type: "delete" });
  };

  const editRecord = (id) => {
    props.getId({ id, type: "edit" });
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
        Delete
      </div>

      <div className={editBtn} onClick={() => editRecord(props.id)}>
        Edit
      </div>
    </div>
  );
};

//delete clicked -> userCard
//invoke deleteHandler -> app

export default UserCard;
