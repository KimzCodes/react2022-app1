import { useState } from "react";
import { Input } from "../../layout";

function UserFrom({ insertHandler, closeHandler }) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const fromHandler = (e) => {
    e.preventDefault();
    insertHandler({
      id: Date.now(),
      name,
      gender,
      phone,
      address,
    });
    setName("");
    setGender("");
    setPhone("");
    setAddress("");
    closeHandler();
  };

  return (
    <div>
      <form onSubmit={fromHandler} className={`controller `}>
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
        {/* <label htmlFor="name">Name:</label>
        <input type="text" name="name" />

        <label htmlFor="gender">gender:</label>
        <input type="text" name="gender" ref={gender} />

        <label htmlFor="phone">phone:</label>
        <input type="text" name="phone" ref={phone} />

        <label htmlFor="address">address:</label>
        <input type="text" name="address" ref={address} /> */}

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default UserFrom;
