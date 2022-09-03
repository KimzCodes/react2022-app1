import { useEffect, useState } from "react";
import { Input } from "../../layout";

function UserFrom({ userHandler, closeHandler, selectedName }) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (selectedName) {
      setName(selectedName.name);
      setGender(selectedName.gender);
      setPhone(selectedName.phone);
      setAddress(selectedName.address);
    }
  }, [selectedName]);

  //first render
  //useEffect
  //clean up take place in memory

  //second render
  //invoke or fire clean up
  //useEffect

  //third render
  //invoke or fire clean up
  //useEffect

  //fourth render
  //invoke or fire clean up
  //useEffect

  const resetForm = () => {
    setName("");
    setGender("");
    setPhone("");
    setAddress("");
  };

  const fromHandler = (e) => {
    e.preventDefault();
    //
    const operationType = selectedName ? "edit" : "insert";
    userHandler(
      {
        id: selectedName ? selectedName.id : Date.now(),
        name,
        gender,
        phone,
        address,
      },
      operationType
    );
    resetForm();
    closeHandler();
  };

  return (
    <div>
      <form onSubmit={fromHandler} className={`controller`}>
        <Input
          label="name"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          value={gender}
          label="gender"
          name="gender"
          id="gender"
          onChange={(e) => setGender(e.target.value)}
        />
        <Input
          value={phone}
          label="phone"
          name="phone"
          id="phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <Input
          value={address}
          label="address"
          name="address"
          id="address"
          onChange={(e) => setAddress(e.target.value)}
        />

        <input type="submit" value={selectedName ? "Edit" : "Submit"} />
      </form>
    </div>
  );
}

export default UserFrom;
