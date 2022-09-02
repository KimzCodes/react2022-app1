import styles from "./userCard.module.css";

const UserCard = ({ name, gender, ...props }) => {
  const { userCard, delBtn, updateBtn } = styles;

  const deleteRecord = (id) => {
    props.deleteHandler(id);
  };

  const updateRecord = (data) => {
    props.updateHandler(data);
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
      <div
        className={updateBtn}
        onClick={() =>
          updateRecord({
            name: "test",
            gender,
            id: props.id,
            address: props.address,
            phone: props.phone,
          })
        }
      >
        edit
      </div>
    </div>
  );
};

//delete clicked -> userCard
//invoke deleteHandler -> app

export default UserCard;
