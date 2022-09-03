import { useState } from "react";
import { UserList, UserFrom } from "./components/user";
import { Lightbox, Container, Input, Button } from "./components/layout";

import "./main.css";

const App = () => {
  const [search, setSearchInput] = useState("");
  const [toggleLightBox, setToggleLightBox] = useState(false);
  const [names, setName] = useState([
    {
      id: 111,
      name: "reham",
      address: "doki",
      phone: "1222341",
      gender: "female",
    },

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
  const [selectedName, setSelectedName] = useState();

  //every time
  // useEffect(() => {
  //   console.log("hi");
  // });

  //firt time only
  // useEffect(() => {
  //   console.log("hi");
  // },[]);

  // first time and every dependacny get update
  // useEffect(() => {
  //   console.log("search");

  // }, [search]);

  const getId = (payload) => {
    switch (payload.type) {
      case "delete":
        deleteHandler(payload.id);
        break;
      case "edit":
        selectUserHandler(payload.id);
        break;
      default:
        break;
    }
  };

  const deleteHandler = (id) => {
    setName(names.filter((el) => el.id !== id));
  };

  const selectUserHandler = (id) => {
    //get user data
    const selectedUser = names.find((el) => el.id === id);
    setSelectedName(selectedUser);
    toggleHandler();
  };

  const userHandler = (data, type) => {
    if (type === "insert") {
      return setName([...names, data]);
    }

    setName(
      names.map((el) => {
        console.log(el);
        if (el.id === data.id) {
          return { ...data };
        } else {
          return { ...el };
        }
      })
    );
  };

  const toggleHandler = () => {
    setToggleLightBox(!toggleLightBox);
    if (toggleLightBox) {
      setSelectedName();
    }
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

        <UserList names={namesHandler()} getId={getId} />
      </Container>

      {toggleLightBox && (
        <Lightbox closeHandler={toggleHandler}>
          <UserFrom
            userHandler={userHandler}
            closeHandler={toggleHandler}
            selectedName={selectedName}
          />
        </Lightbox>
      )}
    </>
  );
};

export default App;
