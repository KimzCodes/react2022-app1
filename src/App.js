import { useState, useCallback, useMemo, useEffect } from "react";
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

  useEffect(() => {
    if (selectedName && Object.keys(selectedName).length > 0) {
      setToggleLightBox(true);
    }
  }, [selectedName]);

  const toggleHandler = () => {
    setToggleLightBox(!toggleLightBox);
    if (
      toggleLightBox &&
      selectedName &&
      Object.keys(selectedName).length > 0
    ) {
      return setSelectedName();
    }
  };

  const deleteHandler = useCallback(
    (id) => {
      setName(names.filter((el) => el.id !== id));
    },
    [names]
  );

  const selectUserHandler = useCallback(
    (id) => {
      //get user data
      const selectedUser = names.find((el) => el.id === id);
      setSelectedName(selectedUser);
    },
    [names]
  );

  const getId = useCallback(
    (payload) => {
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
    },
    [deleteHandler, selectUserHandler]
  );

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

  const namesHandler = useMemo(() => {
    if (search.length > 0) {
      return names.filter((el) => el.name.includes(search));
    }
    return names;
  }, [names, search]);

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

        <UserList names={namesHandler} getId={getId} />
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
