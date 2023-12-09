import React from "react";
import {PrettyChatWindow} from "react-chat-engine-pretty";
import {useEffect, useState} from "react";
import axios from "../../api/axios.jsx";

export const ChatPage = () => {
    const [user, setUser] = useState();

    const [formData, setFormData] = useState({
        email: `${localStorage.getItem("email")}`
    });

    const secret = formData.email;

    useEffect(() => {
        const chatLogin = async () => {
            const result = await axios.post("/chat/login", formData);
            setUser({ ...result.data, secret });
        };

        chatLogin();

    }, []);

    return(
        <div style={{height: "100vh", width: "100vw"}}>
            <PrettyChatWindow
                projectId="95909330-4295-4156-bd8a-8b70b1e062d7"
                username={formData.email}
                secret={secret}
                style={{height: "100%", width: "100vw"}}
            />
        </div>
    )
}