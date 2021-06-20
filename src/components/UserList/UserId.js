import React, { useState, useEffect } from "react";

import axios from "axios";

import Id from "./UserId";

export default function UserList() {
    const [Data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setData(res.data))

            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <header
                style={{
                    textAlign: "center",
                    color: "red",
                    backgroundColor: "rgba(57, 380, 287,1.5)",
                    padding: "20px",
                    position: "sticky",
                    top: "0",
                }}
            >



                <h1>Let's make our project</h1>
            </header>
            {Data.map((user) => (
                <Id userData={user} key={user.id} />
            ))}
        </div>
    );
}

