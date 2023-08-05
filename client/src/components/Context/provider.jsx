import React, { useState } from "react";
import { Context } from "./context";

export const Provider = ({ children }) => {
    const [data, setData] = useState({ items: [] })
    const [open, setOpen] = useState(true);
    const [user, setUser] = useState("");
    const [repo, setRepo] = useState("");
    const [loading, setLoading] = useState(false);
    const [selected, setSelected] = useState(null);

    return <Context.Provider value={{
        user,
        setUser,
        repo,
        setRepo,
        data,
        setData,
        open,
        setOpen,
        loading,
        setLoading,
        selected,
        setSelected
    }}>{children}</Context.Provider>
}