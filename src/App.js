import { useState } from "react";
import { UserList, UserFrom } from "./components/user";
import { Lightbox, Container, Input, Button } from "./components/layout";

import "./main.css";

const App = () => {
  const [search, setSearchInput] = useState("");
  const [toggleLightBox, setToggleLightBox] = useState(false);
  const [names, setName] = useState([
    { id: 111, name: "reham", address: "doki", phone: "12341", gender: "male" },

    { id: 1, name: "mina", address: "cairo", phone: "12341", gender: "male" },
    { id: 2, name: "kareem", address: "giza", phone: "12234", gender: "male" },
    {
      id: 3,
      name: "omnia",
      address: "giza",
      phone: "12344",
      gender: "female",
    },
  ]);

  const deleteHandler = async (id) => {
    setName(names.filter((el) => el.id !== id));
  };

  const updateHandler = (data) => {
    setName((prevState) =>
      prevState.map((el) => {
        if (el.id === data.id) {
          return { ...data };
        }
        return { ...el };
      })
    );
    console.log(names);
  };

  const dataHandler = (data) => {
    setName([...names, data]);
  };

  const toggleHandler = () => {
    setToggleLightBox(!toggleLightBox);
  };

  const namesHandler = () => {
    if (search.length > 0) {
      return names.filter((el) => el.name.includes(search));
    }
    return names;
  };

  return (
    <>
      <Container>
        <Input
          name="search"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <Button onClick={toggleHandler}>Insert Name</Button>

        <UserList
          names={namesHandler()}
          deleteHandler={deleteHandler}
          updateHandler={updateHandler}
        />
      </Container>

      {toggleLightBox && (
        <Lightbox closeHandler={toggleHandler}>
          <UserFrom insertHandler={dataHandler} closeHandler={toggleHandler} />
        </Lightbox>
      )}
    </>
  );
};

export default App;
