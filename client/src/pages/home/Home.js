import React, { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";

function Home({ type }) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API}lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              token:
                "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDM0ZGNhM2I5ZWJlYzBlOTQ5N2QwNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjcwNTU3MSwiZXhwIjoxNjgzMTM3NTcxfQ.dpKzUs7bw62-QHVxxQufWQqDB_yEXSF10npxyGgkYZI",
            },
          }
        );
        const data = await res.json();
        setLists(data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div>
      <Navbar />
      <Featured type={type} />
      {lists.map((list, i) => {
        return <List key={i} list={list} />;
      })}
    </div>
  );
}

export default Home;
