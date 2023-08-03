import React, { useState } from "react";
import { Context } from "./Context";

export const Provider = ({ children }) => {
    const [data, setData] = useState({ items: [] })
    const [open, setOpen] = useState(true);
    const [user, setUser] = useState("");
    const [repo,setRepo] = useState("");

    return <Context.Provider value={{
        user,
        setUser,
        repo,
        setRepo,
        data,
        setData,
        open,
        setOpen
    }}>{children}</Context.Provider>
}