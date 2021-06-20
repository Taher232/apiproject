import React, { useState, useEffect } from "react";
import axios from "axios";
import Id from "./UserId";

function UserList() {
    const [Data, setData] = useState([]);
    useEffect(() => {
           axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setData(res.data))

            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <header
                style={{
                    textAlign: "center",
                    backgroundColor: "rgba(57, 255, 189,0.5)",
                    color: "white",
                    padding: "20px",
                    position: "sticky",
                    top: "0",
                }}
            >
                <h1>Let's make it</h1>
            </header>
            {Data.map((user) => (
                <Id userData={user} key={user.id} />
            ))}
        </div>
    );
}

export default UserList;